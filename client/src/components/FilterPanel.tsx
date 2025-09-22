import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Filter, X, RotateCcw } from "lucide-react";
import type { Organisation } from "@shared/schema";

interface FilterPanelProps {
  organisations: Organisation[];
  selectedRegions: string[];
  selectedOrgs: string[];
  onRegionChange: (regions: string[]) => void;
  onOrgChange: (orgs: string[]) => void;
  onReset: () => void;
}

export default function FilterPanel({
  organisations,
  selectedRegions,
  selectedOrgs,
  onRegionChange,
  onOrgChange,
  onReset
}: FilterPanelProps) {
  const [regionFilter, setRegionFilter] = useState<string>('');

  const regions = ["London", "Outside London", "Both"];

  const handleRegionSelect = (region: string) => {
    if (region && !selectedRegions.includes(region)) {
      onRegionChange([...selectedRegions, region]);
      setRegionFilter('');
    }
  };

  const handleOrgSelect = (orgId: string) => {
    if (orgId && !selectedOrgs.includes(orgId)) {
      onOrgChange([...selectedOrgs, orgId]);
    }
  };

  const removeRegion = (region: string) => {
    onRegionChange(selectedRegions.filter(r => r !== region));
  };

  const removeOrg = (orgId: string) => {
    onOrgChange(selectedOrgs.filter(o => o !== orgId));
  };

  const availableOrgs = organisations.filter(org => !selectedOrgs.includes(org.id));
  const availableRegions = regions.filter(region => !selectedRegions.includes(region));

  const hasFilters = selectedRegions.length > 0 || selectedOrgs.length > 0;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-sm font-medium">
          <Filter className="h-4 w-4 text-sidebar-primary" />
          Filters
          {hasFilters && (
            <Button
              onClick={onReset}
              variant="ghost"
              size="sm"
              className="ml-auto h-6 px-2"
              data-testid="button-reset-filters"
            >
              <RotateCcw className="h-3 w-3 mr-1" />
              Reset
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Region Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Region</label>
          <Select value={regionFilter} onValueChange={handleRegionSelect}>
            <SelectTrigger data-testid="select-region-filter">
              <SelectValue placeholder="Add region filter..." />
            </SelectTrigger>
            <SelectContent>
              {availableRegions.map(region => (
                <SelectItem key={region} value={region}>{region}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedRegions.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {selectedRegions.map(region => (
                <Badge 
                  key={region} 
                  variant="secondary" 
                  className="text-xs pr-1"
                  data-testid={`badge-region-${region.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {region}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 ml-1 hover:bg-destructive hover:text-destructive-foreground"
                    onClick={() => removeRegion(region)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Organisation Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Organisation</label>
          <Select onValueChange={handleOrgSelect} value="">
            <SelectTrigger data-testid="select-organisation-filter">
              <SelectValue placeholder="Add organisation..." />
            </SelectTrigger>
            <SelectContent>
              {availableOrgs.map(org => (
                <SelectItem key={org.id} value={org.id}>
                  {org.name}
                  <span className="ml-2 text-xs text-muted-foreground">
                    ({org.region})
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedOrgs.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {selectedOrgs.map(orgId => {
                const org = organisations.find(o => o.id === orgId);
                return org ? (
                  <Badge 
                    key={orgId} 
                    variant="secondary" 
                    className="text-xs pr-1"
                    data-testid={`badge-org-${org.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {org.name}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-4 w-4 p-0 ml-1 hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => removeOrg(orgId)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ) : null;
              })}
            </div>
          )}
        </div>

        {/* Filter Summary */}
        {hasFilters && (
          <div className="pt-2 border-t">
            <p className="text-xs text-muted-foreground">
              Active filters: {selectedRegions.length} region(s), {selectedOrgs.length} organisation(s)
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}