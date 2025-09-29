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
    percentage: Math.round((award.count / 9) * 100).toString()
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
    { year: "2023", actual: 4, forecast: null },
    { year: "2024", actual: 5, forecast: null },
    { year: "2025", actual: null, forecast: payForecast2025.market_context.median_forecast_pct }
  ];

  return (
    <div className="space-y-8">
      {/* Professional Header */}
      <div className="bg-primary/5 rounded-xl p-8 border border-primary/20 shadow-xl" data-testid="reflections-header">
        <div className="flex items-center gap-3 mb-3">
          <TrendingUp className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-primary">Reflections on Pay</h1>
            <p className="text-lg text-foreground mt-1">
              Market overview, economic context and pay award analysis for Housing Associations
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
        </div>
      </div>

      {/* Market Overview Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4" data-testid="section-market-overview">
          <div className="w-1 h-8 bg-primary rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">Market Overview</h2>
        </div>
        
        <div className="bg-card border border-card-border rounded-lg p-6">
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg text-muted-foreground mb-6">
              This section sets the scene for the report by considering the current economic context. First we look at the current state of the labour market, before considering what inflation and pay rises might look like next year and the implications for the supported housing sector.
            </p>
          </div>
        </div>
      </div>

      {/* Current Labour Market Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4" data-testid="section-current-labour-market">
          <div className="w-1 h-8 bg-chart-2 rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">The Current Labour Market</h2>
        </div>
        
        <div className="bg-card border border-card-border rounded-lg p-6">
          <div className="prose prose-lg max-w-none text-foreground space-y-4">
            <p>
              Some will have found the UK labour market over the past two to three years akin to navigating a treacherous mountain path without a compass. Having successfully surmounted the challenges of skills shortages and a recruitment crisis, as well as the Cost of Living Crisis – and with inflation finally back to more normal levels – employers now find the bottom of the market being moved significantly upwards through increases in the National Living Wage.
            </p>
            
            <p>
              The forthcoming 6% increase in the statutory National Living Wage to £12.21, will take the minimum salary for a 37.5-hour week to £23,809. Furthermore, almost all of our survey respondents are signed up to the London Living Wage (previously £13.15, since announced to rise to £13.85). Employers have until 1st May 2025 to implement the rates, and, for a 37.5-hour week, the new LLW represents an annual salary of £27,007.
            </p>
            
            <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-l-primary my-6">
              <h4 className="font-semibold text-foreground mb-2">Key Wage Impacts</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Pay for roles at the bottom of the market increased by <strong>9%</strong> over the last year</li>
                <li>Roles at Senior Support level saw increases of <strong>just over 7%</strong> in the £22,000-£32,000 bracket</li>
                <li>Fairly steady market for roles at the manager level</li>
                <li>Some erosion of differentials between bottom grades in many organisations</li>
              </ul>
            </div>
            
            <p>
              These upwards shifts – particularly of the statutory National Living Wage – are having a noticeable impact on the bottom of the labour market. Our analysis shows that pay for roles at the bottom of the market has increased by 9% over the last year; on the other hand, it has been a fairly steady market for roles at the manager level.
            </p>
            
            <p>
              While there has been some erosion of differentials between the bottom grades in many organisations, there is a limit to how much can be absorbed this year. The result of this is that these uplifts at the very bottom also ripple upwards. It is in pay for roles within the £22,000 - £32,000 bracket that we have seen the biggest increases over the past 18 months: just over 7% for roles at Senior Support level.
            </p>
            
            <p>
              Finally, our analysis shows that this need to give higher than average pay rises to these lower paid staff has reduced the amount available for more senior levels. Indeed, tracking recruitment job sites shows advertised pay reducing slightly at these levels. The result of this is that pay rises for more senior roles have been skewed slightly downwards.
            </p>
          </div>
        </div>
      </div>

      {/* Economic Context Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-chart-1" />
            Economic Context 2024
          </CardTitle>
          <CardDescription>
            The economic context has returned to more familiar ground after the high inflation/higher interest rate scenario of the recent past
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none text-foreground space-y-4 mb-6">
            <p>
              More broadly, the economic context has returned to more familiar ground after the high inflation/higher interest rate scenario of the recent past.
            </p>
            
            <p>
              <strong>CPI now sits at 2%</strong>, as expected this is slightly in line with the Bank of England's 2% target and is likely to remain so throughout 2025. <strong>Interest rates have come down from their peak and sit at 5%</strong>.
            </p>
            
            <p>
              The labour market is slowly loosening, with unemployment edging up and vacancies slightly down – although it remains tight and this can be seen in the continuing stickiness of wage inflation. <strong>Annual growth in employees' average earnings (regular and total) was 5%</strong> in July to September 2024, slightly up from 5% (regular earnings) the month before; higher than many commentators expected when inflation started to reach its 2% target.
            </p>
          </div>
          
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
          
          <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-l-primary">
            <h4 className="font-semibold text-foreground mb-2">Labour Market Summary</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Taking all of this into account, we see a labour market that continues the flux of previous years. Whilst it is undoubtedly true that recruitment pressures and pay rises have cooled from their respective peaks, we are now seeing a transformative shift in the approach to paying the lowest paid across the economy and the impact of this has not yet fully been felt.
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

      {/* Forecast Pay Rises & Sector Implications */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4" data-testid="section-forecast-pay-rises">
          <div className="w-1 h-8 bg-chart-5 rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">Forecast Pay Rises & Implications for the Supported Housing Sector</h2>
        </div>
        
        <div className="bg-card border border-card-border rounded-lg p-6">
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg text-muted-foreground mb-6">
              So how then will all of this play out in terms of pay rises in 2025 and what does this mean for the supported housing sector?
            </p>
            
            <p className="mb-4">
              Affordability has been the absolute criteria for support providers over the past ten years. The well-known difficulties in contract values mean that providers across the sector continue to have relatively little room to manoeuvre in terms of available money to fund across-the-board pay increases.
            </p>
            
            <p className="mb-4">
              However, support providers have generally managed to achieve meaningful pay rises over the past couple of years. Section 1.2 looks at pay rises in 2024 and it's notable that no participant gave an award lower than 2.1% (and that was only to some staff).
            </p>
            
            <p className="mb-4">
              What is also notable is that the direct result of Living Wage increases is that participants are increasingly having to give variable pay awards i.e., front line/lower paid colleagues receiving more than managerial staff. As our section above shows, it's clear that this is happening across the economy as a whole – pay for lower paid staff is going up noticeably more than for other groups.
            </p>
            
            <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-l-primary my-6">
              <h4 className="font-semibold text-foreground mb-2">External Market Forecasts</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>CIPD's Labour Market Survey forecasts median pay rises of <strong>3%</strong> in voluntary/private sectors, <strong>4%</strong> in public sector</li>
                <li>Bank of England survey suggests pay rises between <strong>2-4%</strong></li>
                <li>Brightmine data indicates median pay rise around <strong>3%</strong></li>
                <li>TwentySix's own forecasts for the economy: <strong>3-4%</strong> for 2025/26</li>
              </ul>
            </div>
            
            <p className="mb-4">
              However, all of these forecasts were published before the recent budget, in which Employers' National Insurance contributions increased from 13.8% to 15%, with a reduction in the threshold to £5,000. This is a direct increase in organisations' wage bills, and, combined with the Living Wage increases, we would expect to see pay rise expectations shading downwards.
            </p>
            
            <p>
              What is clear, however, is that pay rises will be lower than last year, and this is supported by data from this benchmarking group in section 1.2 below.
            </p>
          </div>
        </div>
      </div>

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
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-amber-800 mb-1">Market Outlook</h4>
                <p className="text-sm text-amber-700">
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