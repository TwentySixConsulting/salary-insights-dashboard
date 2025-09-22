import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: 'positive' | 'negative' | 'neutral';
  };
  description?: string;
  tooltip?: string;
  trend?: 'up' | 'down' | 'stable';
  format?: 'percentage' | 'currency' | 'number' | 'text';
}

export default function KPICard({ 
  title, 
  value, 
  change, 
  description, 
  tooltip,
  trend,
  format = 'text'
}: KPICardProps) {
  const formatValue = (val: string | number) => {
    if (format === 'percentage' && typeof val === 'number') {
      return `${val}%`;
    }
    if (format === 'currency' && typeof val === 'number') {
      return `£${val.toLocaleString()}`;
    }
    if (format === 'number' && typeof val === 'number') {
      return val.toLocaleString();
    }
    return val;
  };

  const getTrendColor = () => {
    if (!change) return '';
    switch (change.type) {
      case 'positive': return 'text-green-600 dark:text-green-400';
      case 'negative': return 'text-red-600 dark:text-red-400';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Card className="hover-elevate">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-sidebar-primary" data-testid={`kpi-value-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {formatValue(value)}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">
            {description}
          </p>
        )}
        {change && (
          <div className="flex items-center mt-2">
            <Badge 
              variant="secondary" 
              className={`text-xs ${getTrendColor()}`}
            >
              {change.type === 'positive' ? '↗' : change.type === 'negative' ? '↘' : '→'} 
              {change.value > 0 ? '+' : ''}{change.value}%
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
}