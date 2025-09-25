import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import ChartContainer from "@/components/ChartContainer";
import { payAwards2024, payForecast2025, marketAnalysis, organisations } from "@shared/sampleData";
import { TrendingUp, TrendingDown, AlertCircle, Calendar, Target, PoundSterling } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))', 'hsl(var(--primary))', 'hsl(var(--accent))'];

export default function ReflectionsOnPay() {
  // Prepare data for visualizations
  const payAwardsChartData = payAwards2024.map(award => ({
    name: award.pay_award_range,
    value: award.count,
    percentage: ((award.count / 9) * 100).toFixed(1)
  }));

  const economicContextData = [
    { indicator: "Consumer Price Index", value: marketAnalysis.economic_context.cpi_rate, target: 2.0, color: 'hsl(var(--chart-1))' },
    { indicator: "Interest Rates", value: marketAnalysis.economic_context.interest_rate, target: 4.0, color: 'hsl(var(--chart-2))' },
    { indicator: "Wage Inflation", value: marketAnalysis.economic_context.wage_inflation_pct, target: 3.0, color: 'hsl(var(--chart-3))' }
  ];

  const sectorTrendsData = marketAnalysis.sector_analysis.skills_shortage_areas.map((area: string, index: number) => ({
    area: area,
    impact: 75 + (index * 5), // Simulated impact scores
    color: COLORS[index % COLORS.length]
  }));

  const forecastData = [
    { year: "2023", actual: 4.2, forecast: null },
    { year: "2024", actual: 4.8, forecast: null },
    { year: "2025", actual: null, forecast: payForecast2025.market_context.median_forecast_pct },
    { year: "2025 (Range)", actual: null, forecast: 4.5 }
  ];

  return (
    <div className="space-y-8">
      {/* Professional Header */}
      <div className="bg-gradient-to-r from-primary/10 to-chart-2/10 rounded-lg p-6 border" data-testid="reflections-header">
        <div className="flex items-center gap-3 mb-3">
          <TrendingUp className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Reflections on Pay</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Market overview, economic context and pay award analysis for Housing Associations
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-background/80 rounded-lg p-4 border" data-testid="card-survey-period">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-primary">Survey Period</p>
                <p className="text-lg font-bold">2024</p>
              </div>
            </div>
          </div>
          
          <div className="bg-background/80 rounded-lg p-4 border" data-testid="card-participants">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-chart-3" />
              <div>
                <p className="text-sm font-medium text-primary">Participants</p>
                <p className="text-lg font-bold">{organisations.length} Organisations</p>
              </div>
            </div>
          </div>
          
          <div className="bg-background/80 rounded-lg p-4 border" data-testid="card-total-headcount">
            <div className="flex items-center gap-2">
              <PoundSterling className="h-5 w-5 text-chart-4" />
              <div>
                <p className="text-sm font-medium text-primary">Total Headcount</p>
                <p className="text-lg font-bold">{organisations.reduce((sum, org) => sum + org.headcount, 0).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Economic Context Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-orange-500" />
            Economic Context 2024
          </CardTitle>
          <CardDescription>
            Key economic indicators affecting pay decisions in the housing sector
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {economicContextData.map((indicator, index) => (
              <div key={indicator.indicator} className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium text-muted-foreground">{indicator.indicator}</h4>
                  <Badge variant={indicator.value > indicator.target ? "destructive" : "secondary"}>
                    {indicator.value}%
                  </Badge>
                </div>
                <Progress 
                  value={(indicator.value / 8) * 100} 
                  className="h-3"
                />
                <p className="text-xs text-muted-foreground">
                  Target: {indicator.target}% | Current: {indicator.value}%
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-medium mb-2 text-sm">Market Context</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Housing associations face significant recruitment pressure in key areas, with contract value challenges impacting overall affordability. Wage inflation of {marketAnalysis.economic_context.wage_inflation_pct}% exceeds CPI, creating competitive pressure.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Pay Awards 2024 Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pay Awards 2024 Distribution</CardTitle>
            <CardDescription>
              How organisations distributed pay increases across different percentage ranges
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer 
              title="Pay Awards Distribution" 
              data={payAwardsChartData}
              type="bar"
              xAxisKey="name"
              yAxisKey="value"
              description="Distribution of pay award ranges across organisations"
              height={300}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pay Award Breakdown</CardTitle>
            <CardDescription>
              Detailed analysis of 2024 pay award patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {payAwards2024.map((award, index) => (
                <div key={award.pay_award_range} className="flex items-start gap-3 p-3 rounded-lg border">
                  <div 
                    className="w-4 h-4 rounded-full mt-1 flex-shrink-0"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm">{award.pay_award_range}</h4>
                      <Badge variant="outline">{award.count} orgs</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{award.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Market Analysis and Sector Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Sector Trends & Market Drivers</CardTitle>
          <CardDescription>
            Key factors influencing pay decisions in housing associations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-sm">Primary Market Drivers</h4>
              {marketAnalysis.sector_analysis.skills_shortage_areas.map((area: string, index: number) => (
                <div key={area} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-sm">Economic Challenges</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <span className="text-sm">Inflation Impact</span>
                  <Badge variant="destructive">High</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <span className="text-sm">Funding Pressures</span>
                  <Badge variant="destructive">High</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <span className="text-sm">Talent Retention</span>
                  <Badge variant="outline">Medium</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <span className="text-sm">Cost Management</span>
                  <Badge variant="destructive">High</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2025 Pay Forecast */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            2025 Pay Forecast
          </CardTitle>
          <CardDescription>
            Projected pay award ranges and market outlook for 2025
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-l-primary">
                <h4 className="font-medium mb-2">Forecast Range</h4>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-primary">
                    {payForecast2025.market_context.median_forecast_pct}%
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Expected pay award range for 2025
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Key Concerns</h4>
                {payForecast2025.key_concerns.map((concern: string, index: number) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{concern}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-sm">Affordability Concerns</h4>
              <div className="space-y-3">
                {marketAnalysis.sector_analysis.affordability_concerns.map((concern: string, index: number) => (
                  <div key={index} className="p-3 rounded-lg border bg-card">
                    <span className="text-sm">{concern}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-amber-800 dark:text-amber-200 mb-1">Market Outlook</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Organisations are balancing inflationary pressures with funding constraints. 
                  The forecast assumes continued focus on protecting lower-paid staff while managing overall cost increases.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Key Insights & Recommendations</CardTitle>
          <CardDescription>
            Strategic takeaways from the 2024 pay award analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-sm flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                Positive Trends
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 100% of organisations implemented pay increases in 2024</li>
                <li>• Strong focus on supporting lower-paid staff with higher percentage increases</li>
                <li>• Growing adoption of Living Wage principles (89% implementation)</li>
                <li>• Proactive response to National Minimum Wage changes</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-sm flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-orange-600" />
                Challenges Ahead
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Sustained inflationary pressure above target levels</li>
                <li>• Funding constraints limiting pay award scope</li>
                <li>• Need to maintain pay differentials across grade structures</li>
                <li>• Balancing competitiveness with affordability</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}