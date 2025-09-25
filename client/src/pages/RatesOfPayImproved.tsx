import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { roleRates } from "@shared/sampleData";
import { Search, Info, Download, MapPin, Users } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Group roles by category for better organisation
const roleCategories = {
  "Entry Level": ["Support Worker", "Relief Support Worker", "Night Worker", "Night Assistant/Concierge", "Cook/Chef"],
  "Specialist Support": ["Support Worker - Specialist", "Activities Worker/Coordinator", "Specialist Advice Workers", "Resettlement Worker", "IDVA/IDVSA", "Navigator"],
  "Administrative": ["Housing Management Assistant", "Service Co-ordinator"],
  "Management": ["Deputy/Assistant Scheme Manager", "Scheme Manager", "Service Manager", "Operations Manager", "Senior Manager"],
  "Executive": ["Deputy Chief Executive", "Chief Executive"]
};

const formatCurrency = (amount: number | undefined) => {
  if (!amount) return "—";
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const getGeographyBadgeVariant = (geography: string) => {
  switch (geography) {
    case "Inside London":
      return "default";
    case "Outside London":
      return "secondary";
    case "Total":
      return "outline";
    default:
      return "outline";
  }
};

export default function RatesOfPayImproved() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"role" | "median" | "average">("role");

  // Get unique regions for filtering
  const regions = useMemo(() => {
    const uniqueRegions = Array.from(new Set(roleRates.map(rate => rate.geography)));
    return uniqueRegions.filter(region => region !== "Total");
  }, []);

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = roleRates.filter(rate => {
      const matchesSearch = rate.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = selectedRegion === "all" || rate.geography === selectedRegion || (selectedRegion === "total" && rate.geography === "Total");
      
      let matchesCategory = selectedCategory === "all";
      if (!matchesCategory) {
        matchesCategory = roleCategories[selectedCategory as keyof typeof roleCategories]?.includes(rate.role) || false;
      }
      
      return matchesSearch && matchesRegion && matchesCategory;
    });

    // Sort the filtered data
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "median":
          return (b.Median || 0) - (a.Median || 0);
        case "average":
          return (b.Average || 0) - (a.Average || 0);
        case "role":
        default:
          return a.role.localeCompare(b.role);
      }
    });

    return filtered;
  }, [searchTerm, selectedRegion, selectedCategory, sortBy]);

  // Export functionality
  const handleExportCSV = () => {
    const headers = ["Role", "Geography", "Sample Size", "Lower Quartile (£)", "Median (£)", "Upper Quartile (£)", "Average (£)"];
    const csvContent = [
      headers.join(","),
      ...filteredAndSortedData.map(rate => [
        `"${rate.role}"`,
        `"${rate.geography}"`,
        rate.sample_size || "",
        rate.LQ || "",
        rate.Median || "",
        rate.UQ || "",
        rate.Average || ""
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `salary-data-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Rates of Pay for Key Roles</h1>
        <p className="text-muted-foreground mb-4">
          Comprehensive salary data from the SSHR Pay Benchmark Group Report across different geographies and role levels.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              Search & Filter Options
            </div>
            <Button 
              onClick={handleExportCSV} 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              data-testid="button-export-csv"
            >
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Search Roles</label>
              <Input
                placeholder="Search for job roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
                data-testid="input-search-roles"
              />
            </div>

            {/* Region Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Region</label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger data-testid="select-region">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="total">Total (All Areas)</SelectItem>
                  {regions.map(region => (
                    <SelectItem key={region} value={region}>{region}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Role Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger data-testid="select-category">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {Object.keys(roleCategories).map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort Options */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Sort By</label>
              <Select value={sortBy} onValueChange={(value: "role" | "median" | "average") => setSortBy(value)}>
                <SelectTrigger data-testid="select-sort">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="role">Role Name (A-Z)</SelectItem>
                  <SelectItem value="median">Median Salary (High-Low)</SelectItem>
                  <SelectItem value="average">Average Salary (High-Low)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Filter Summary */}
          {(searchTerm || selectedRegion !== "all" || selectedCategory !== "all") && (
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium mb-1">Active Filters:</p>
              <div className="flex flex-wrap gap-1">
                {searchTerm && <Badge variant="outline">Search: "{searchTerm}"</Badge>}
                {selectedRegion !== "all" && <Badge variant="outline">Region: {selectedRegion}</Badge>}
                {selectedCategory !== "all" && <Badge variant="outline">Category: {selectedCategory}</Badge>}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Showing {filteredAndSortedData.length} results
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Salary Quartiles Glossary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Info className="h-5 w-5 text-primary" />
            Salary Quartiles Glossary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="p-3 rounded-lg border cursor-help">
                    <div className="font-medium text-primary">LQ (Lower Quartile)</div>
                    <p className="text-muted-foreground">25th percentile</p>
                    <p className="text-xs mt-1">25% of salaries fall below this amount</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>The salary below which 25% of workers earn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="p-3 rounded-lg border cursor-help">
                    <div className="font-medium text-primary">Median</div>
                    <p className="text-muted-foreground">50th percentile</p>
                    <p className="text-xs mt-1">Middle value - 50% above, 50% below</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>The middle salary value in the dataset</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="p-3 rounded-lg border cursor-help">
                    <div className="font-medium text-primary">UQ (Upper Quartile)</div>
                    <p className="text-muted-foreground">75th percentile</p>
                    <p className="text-xs mt-1">75% of salaries fall below this amount</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>The salary below which 75% of workers earn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="p-3 rounded-lg border cursor-help">
                    <div className="font-medium text-primary">Average</div>
                    <p className="text-muted-foreground">Mean salary</p>
                    <p className="text-xs mt-1">Arithmetic mean of all salary values</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>The calculated average of all salaries in the sample</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardContent>
      </Card>

      {/* Main Salary Data Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Salary Data by Role and Geography
            </div>
            <Badge variant="outline" className="text-xs">
              {filteredAndSortedData.length} roles shown
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Role</TableHead>
                  <TableHead className="w-[150px]">Geography</TableHead>
                  <TableHead className="w-[100px] text-center">Sample Size</TableHead>
                  <TableHead className="w-[120px] text-right">Lower Quartile</TableHead>
                  <TableHead className="w-[120px] text-right">Median</TableHead>
                  <TableHead className="w-[120px] text-right">Upper Quartile</TableHead>
                  <TableHead className="w-[120px] text-right">Average</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAndSortedData.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      No roles found matching your search criteria
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredAndSortedData.map((rate, index) => (
                    <TableRow key={`${rate.role}-${rate.geography}-${index}`} className="hover:bg-muted/50">
                      <TableCell className="font-medium">
                        <div className="space-y-1">
                          <div className="text-sm">{rate.role}</div>
                          {/* Add category badge if filtering by category */}
                          {selectedCategory === "all" && (
                            <div>
                              {Object.entries(roleCategories).map(([category, roles]) => {
                                if (roles.includes(rate.role)) {
                                  return (
                                    <Badge key={category} variant="secondary" className="text-xs">
                                      {category}
                                    </Badge>
                                  );
                                }
                                return null;
                              })}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getGeographyBadgeVariant(rate.geography)} className="text-xs">
                          <MapPin className="h-3 w-3 mr-1" />
                          {rate.geography}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        {rate.sample_size ? (
                          <Badge variant="outline" className="text-xs">
                            {rate.sample_size}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm">
                        {formatCurrency(rate.LQ)}
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm font-medium">
                        {formatCurrency(rate.Median)}
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm">
                        {formatCurrency(rate.UQ)}
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm">
                        {formatCurrency(rate.Average)}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Data Source Information */}
      <Card>
        <CardContent className="pt-6">
          <div className="text-sm text-muted-foreground">
            <p className="font-medium mb-2">Data Source & Methodology</p>
            <ul className="space-y-1 text-xs">
              <li>• Sample includes 9 housing associations and supported housing providers</li>
              <li>• Turnover range: £4.3m–£70m, median headcount: 600 employees</li>
              <li>• Geography mix: 2 London-only, 1 South East-only, 6 both London and outside</li>
              <li>• Working week: majority 37.5 hours, some 39-40 hours, some variable 35-39 hours</li>
              <li>• Salary figures include basic pay excluding overtime, bonuses, and benefits</li>
              <li>• All amounts shown in British Pounds (£) as annual salaries</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}