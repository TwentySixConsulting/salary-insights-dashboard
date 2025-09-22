import SalaryTable from "@/components/SalaryTable";
import { roleRates } from "@shared/sampleData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function RatesOfPay() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Rates of Pay for Key Roles</h1>
        <p className="text-muted-foreground mb-4">
          Comprehensive salary data from the SSHR Pay Benchmark Group Report across different geographies and role levels.
        </p>
        
        {/* Glossary Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Info className="h-5 w-5 text-sidebar-primary" />
              Salary Quartiles Glossary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="font-medium cursor-help">LQ (Lower Quartile)</div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>25% of salaries fall below this amount</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <p className="text-muted-foreground">25th percentile</p>
              </div>
              <div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="font-medium cursor-help">Median</div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Middle value - 50% above, 50% below</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <p className="text-muted-foreground">50th percentile</p>
              </div>
              <div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="font-medium cursor-help">UQ (Upper Quartile)</div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>75% of salaries fall below this amount</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <p className="text-muted-foreground">75th percentile</p>
              </div>
              <div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="font-medium cursor-help">Average</div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Arithmetic mean of all salary values</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <p className="text-muted-foreground">Mean salary</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Salary Table */}
      <SalaryTable 
        data={roleRates} 
        title="Comprehensive Salary Data by Role and Geography"
      />
      
      {/* Data Source */}
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
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}