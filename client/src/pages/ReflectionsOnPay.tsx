import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ChartContainer from "@/components/ChartContainer";
import { TrendingUp, AlertCircle, Calendar, Users, PoundSterling, Heart, Umbrella } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];

export default function ReflectionsOnPay() {
  // Graph 1: Factors Influencing Pay Review
  const factorsData = [
    { name: 'Living Wage', value: 7 },
    { name: 'Affordability', value: 6 },
    { name: 'Benchmarking', value: 3 },
    { name: 'NI Increase', value: 3 },
    { name: 'NJC Award', value: 2 }
  ];

  // Graph 2: Weekday Overtime Rates
  const weekdayOvertimeData = [
    { name: 'No overtime premium', value: 78 },
    { name: 'Overtime premium', value: 22 }
  ];

  // Graph 3: Weekend Overtime Rates  
  const weekendOvertimeData = [
    { name: 'No overtime premium', value: 67 },
    { name: 'Overtime premium', value: 33 }
  ];

  // Graph 4: On-Call Allowance
  const onCallData = [
    { name: '£20 per weekday night', value: 20 },
    { name: '£25 per 24 hours', value: 25 },
    { name: '£30 per 24 hours', value: 30 },
    { name: '£30 per overnight/weekend', value: 30 },
    { name: '£32 per weekday', value: 32 },
    { name: '£40 per weekend/bank holiday', value: 40 },
    { name: '£40 per weekend day', value: 40 },
    { name: '£45 per weekend day', value: 45 },
    { name: '£64 per weekend day', value: 64 },
    { name: '£80 per bank holiday', value: 80 }
  ];

  // Graph 5: Healthcare Benefits
  const healthcareData = [
    { name: 'Yes', value: 75 },
    { name: 'No', value: 25 }
  ];

  // Graph 6: Basic Holiday Allowance
  const basicHolidayData = [
    { name: '25 days', value: 56 },
    { name: '28 days', value: 22 },
    { name: '29 days', value: 11 },
    { name: '26 days', value: 11 }
  ];

  // Graph 7: Maximum Holiday Entitlement
  const maxHolidayData = [
    { name: '30 days', value: 45 },
    { name: '28 days', value: 22 },
    { name: '31 days', value: 11 },
    { name: '25 days', value: 11 },
    { name: '29 days', value: 11 }
  ];

  // Graph 8: Additional Holiday Benefits
  const additionalHolidayData = [
    { name: 'No', value: 78 },
    { name: 'Yes', value: 22 }
  ];

  // Graph 9: Buying/Selling Annual Leave
  const buySellData = [
    { name: 'Buy and Sell', value: 44 },
    { name: 'Neither', value: 56 }
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
              <Users className="h-5 w-5 text-chart-3" />
              <div>
                <p className="text-sm font-medium text-primary">Participants</p>
                <p className="text-lg font-bold">9 Organisations</p>
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
              The forthcoming 5.8% increase in the statutory National Living Wage to £12.21, will take the minimum salary for a 37.5-hour week to £23,809. Furthermore, almost all of our survey respondents are signed up to the London Living Wage (previously £13.15, since announced to rise to £13.85). Employers have until 1st May 2025 to implement the rates, and, for a 37.5-hour week, the new LLW represents an annual salary of £27,007.
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
              <strong>CPI now sits at 2.3%</strong>, as expected this is slightly higher than the Bank of England's 2% target and is likely to remain so throughout 2025. <strong>Interest rates have come down from their peak and sit at 4.75%</strong>.
            </p>
            
            <p>
              The labour market is slowly loosening, with unemployment edging up and vacancies slightly down – although it remains tight and this can be seen in the continuing stickiness of wage inflation. <strong>Annual growth in employees' average earnings (regular and total) was 5.2%</strong> in July to September 2024, slightly up from 4.8% (regular earnings) the month before; higher than many commentators expected when inflation started to reach its 2% target.
            </p>
          </div>
          
          {/* Economic Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="p-6 rounded-lg border bg-card">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-muted-foreground">Consumer Price Index</h4>
                <Badge variant="secondary" className="text-lg font-bold">2.3%</Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Slightly above Bank of England's 2% target
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-muted-foreground">Interest Rates</h4>
                <Badge variant="secondary" className="text-lg font-bold">4.75%</Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Down from peak, continuing to stabilize
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-muted-foreground">Wage Inflation</h4>
                <Badge variant="secondary" className="text-lg font-bold">5.2%</Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Annual growth in average earnings (Jul-Sep 2024)
              </p>
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-l-primary">
            <h4 className="font-semibold text-foreground mb-2">Labour Market Summary</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Taking all of this into account, we see a labour market that continues the flux of previous years. Whilst it is undoubtedly true that recruitment pressures and pay rises have cooled from their respective peaks, we are now seeing a transformative shift in the approach to paying the lowest paid across the economy and the impact of this has not yet fully been felt.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Forecast Pay Rises Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-chart-5 rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">Forecast Pay Rises & Implications for the Supported Housing Sector</h2>
        </div>
        
        <div className="bg-card border border-card-border rounded-lg p-6">
          <div className="prose prose-lg max-w-none text-foreground space-y-4">
            <p>
              So how then will all of this play out in terms of pay rises in 2025 and what does this mean for the supported housing sector?
            </p>
            
            <p>
              Affordability has been the absolute criteria for support providers over the past ten years. The well-known difficulties in contract values mean that providers across the sector continue to have relatively little room to manoeuvre in terms of available money to fund across-the-board pay increases.
            </p>
            
            <p>
              However, support providers have generally managed to achieve meaningful pay rises over the past couple of years. Section 1.2 looks at pay rises in 2024 and it's notable that no participant gave an award lower than 2.1% (and that was only to some staff).
            </p>
            
            <p>
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
            
            <p>
              However, all of these forecasts were published before the recent budget, in which Employers' National Insurance contributions increased from 13.8% to 15%, with a reduction in the threshold to £5,000. This is a direct increase in organisations' wage bills, and, combined with the Living Wage increases, we would expect to see pay rise expectations shading downwards.
            </p>
            
            <p>
              What is clear, however, is that pay rises will be lower than last year, and this is supported by data from this benchmarking group in section 1.2 below.
            </p>
          </div>
        </div>
      </div>

      {/* Pay Rises in 2024 Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-primary rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">1.2 Pay Rises in 2024</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Pay Award Provided in 2024</CardTitle>
            <CardDescription>
              All nine survey participants confirmed implementing a pay award in 2024 - the highest proportion compared to previous years
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none text-foreground mb-6">
              <p>
                The significant rise in pay awards in 2024 reflects the impact of inflationary pressures, rising living costs, and the need to remain competitive in a tightening labour market. Seven of nine organisations provided percentage figures for the pay award in 2024, with some organisations having varied pay increases based on roles within the organisation.
              </p>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-blue-100 border-b-2 border-blue-200 hover:bg-blue-100">
                    <TableHead className="font-bold text-primary border-r border-blue-200">Pay Award in 2024</TableHead>
                    <TableHead className="font-bold text-primary text-center border-r border-blue-200">Total Answered (9)</TableHead>
                    <TableHead className="font-bold text-primary">Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium bg-gray-50 border-r border-gray-200">0 - 2%</TableCell>
                    <TableCell className="text-center border-r border-gray-200">0</TableCell>
                    <TableCell className="text-sm">All organisations reported implementing some form of pay increase in 2024</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium bg-gray-50 border-r border-gray-200">2.1 - 3%</TableCell>
                    <TableCell className="text-center border-r border-gray-200">2</TableCell>
                    <TableCell className="text-sm">-</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium bg-gray-50 border-r border-gray-200">3.1 - 5%</TableCell>
                    <TableCell className="text-center border-r border-gray-200">3</TableCell>
                    <TableCell className="text-sm">-</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium bg-gray-50 border-r border-gray-200">5.1 - 7%</TableCell>
                    <TableCell className="text-center border-r border-gray-200">2</TableCell>
                    <TableCell className="text-sm">Includes organisations prioritising lower-paid staff, with increases reaching up to 7%</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium bg-gray-50 border-r border-gray-200">7.1%+</TableCell>
                    <TableCell className="text-center border-r border-gray-200">2</TableCell>
                    <TableCell className="text-sm">Focused on LLW adjustments and uplifts for staff in the lowest pay bands, such as 8% or 10%</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium bg-gray-50 border-r border-gray-200">Fixed Amount (NJC)</TableCell>
                    <TableCell className="text-center border-r border-gray-200">2</TableCell>
                    <TableCell className="text-sm">Inner London roles £1575, Outer London roles £1491</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium bg-gray-50 border-r border-gray-200">Other</TableCell>
                    <TableCell className="text-center border-r border-gray-200">1</TableCell>
                    <TableCell className="text-sm">Includes organisations applying varied increases across roles or responding to specific benchmarks like NLW</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> Some organisations had different levels of pay rises for different roles. The highest percentage of pay rises were given to entry-level roles and those on the lowest pay band, particularly due to the rise of the Living Wage.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Consolidated Pay Award for 2025 */}
      <Card>
        <CardHeader>
          <CardTitle>Consolidated Pay Award for 2025</CardTitle>
          <CardDescription>
            55.6% of organisations plan to offer a consolidated pay award at the next pay review
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none text-foreground mb-6">
            <p>
              Of these, five organisations (55.6%) indicated they are planning to increase pay next year. Two organisations (22.2%) were unsure; one had initially planned a pay increase but is reconsidering this due to the rise in National Insurance contributions. The final two organisations stated they are not planning to provide a pay rise, but one organisation may review working hours as an alternative.
            </p>
          </div>

          <div className="rounded-md border mb-6">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-100 border-b-2 border-blue-200 hover:bg-blue-100">
                  <TableHead className="font-bold text-primary border-r border-blue-200">2025 Pay Rise</TableHead>
                  <TableHead className="font-bold text-primary text-center border-r border-blue-200">Total Answered (9)</TableHead>
                  <TableHead className="font-bold text-primary text-center border-r border-blue-200">Operate Both Inside & Outside London (6)</TableHead>
                  <TableHead className="font-bold text-primary text-center border-r border-blue-200">Only Inside Greater London (2)</TableHead>
                  <TableHead className="font-bold text-primary text-center">Only Outside Greater London (1)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium bg-gray-50 border-r border-gray-200">Yes</TableCell>
                  <TableCell className="text-center border-r border-gray-200">55.6%</TableCell>
                  <TableCell className="text-center border-r border-gray-200">50.0%</TableCell>
                  <TableCell className="text-center border-r border-gray-200">50%</TableCell>
                  <TableCell className="text-center">100%</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium bg-gray-50 border-r border-gray-200">No</TableCell>
                  <TableCell className="text-center border-r border-gray-200">22.2%</TableCell>
                  <TableCell className="text-center border-r border-gray-200">33.3%</TableCell>
                  <TableCell className="text-center border-r border-gray-200">0%</TableCell>
                  <TableCell className="text-center">0%</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium bg-gray-50 border-r border-gray-200">Undecided</TableCell>
                  <TableCell className="text-center border-r border-gray-200">22.2%</TableCell>
                  <TableCell className="text-center border-r border-gray-200">16.7%</TableCell>
                  <TableCell className="text-center border-r border-gray-200">50%</TableCell>
                  <TableCell className="text-center">0%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="prose prose-sm max-w-none text-foreground">
            <p>
              Among the organisations planning a pay review in 2025, two are currently uncertain about the outcome as they need to assess affordability. One organisation intends to follow the NJC award, while two others are considering pay increases of 1.7% and 2% respectively; however, these are also subject to change considering the increase in employer's NI contributions.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Factors Influencing Pay Review */}
      <Card>
        <CardHeader>
          <CardTitle>Factors Influencing Pay Review in 2025</CardTitle>
          <CardDescription>
            Affordability driven by rising Living Wage requirements and increased employer NI contributions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <ChartContainer
            title="Graph 1: Factors Influencing 2025 Pay Review"
            data={factorsData}
            type="bar"
            description="Main factors influencing the size of next pay review"
            allowTypeToggle={true}
            height={350}
          />

          <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-l-primary">
            <h4 className="font-semibold text-foreground mb-3">Key Findings</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">67%</Badge>
                <span>Out of nine organisations, six (67%) noted <strong>affordability</strong>, coinciding with the increase in employer's NI and the increase in the Living Wage</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">Top</Badge>
                <span>The most prominent factor was <strong>affordability</strong> (driven by rising Living Wage requirements and the increase in employer's NI contributions)</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">Other</Badge>
                <span>Other factors included alignment with <strong>NJC salary scales</strong> and insights from <strong>benchmarking</strong></span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Unconsolidated Payments */}
      <Card>
        <CardHeader>
          <CardTitle>Unconsolidated Payments</CardTitle>
          <CardDescription>
            77.8% of participants will not provide a non-consolidated award in 2025
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none text-foreground mb-6">
            <p>
              Seven out of nine participants (77.8%) stated they would not provide a non-consolidated award in 2025. Of the remaining two, one commented it was unlikely while the other indicated they were undecided (though were potentially considering discontinuing PRP and potentially replacing it with non-consolidated pay awards for high performers). These findings are similar to the previous report for 2022/2023, where 75% of participants did not offer a non-consolidated award.
            </p>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-100 border-b-2 border-blue-200 hover:bg-blue-100">
                  <TableHead className="font-bold text-primary border-r border-blue-200">2025 Unconsolidated Award</TableHead>
                  <TableHead className="font-bold text-primary text-center border-r border-blue-200">Total Answered (9)</TableHead>
                  <TableHead className="font-bold text-primary text-center border-r border-blue-200">Operate Both Inside & Outside London (6)</TableHead>
                  <TableHead className="font-bold text-primary text-center border-r border-blue-200">Only Inside Greater London (2)</TableHead>
                  <TableHead className="font-bold text-primary text-center">Only Outside Greater London (1)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium bg-gray-50 border-r border-gray-200">Yes</TableCell>
                  <TableCell className="text-center border-r border-gray-200">0%</TableCell>
                  <TableCell className="text-center border-r border-gray-200">0%</TableCell>
                  <TableCell className="text-center border-r border-gray-200">0%</TableCell>
                  <TableCell className="text-center">0%</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium bg-gray-50 border-r border-gray-200">No</TableCell>
                  <TableCell className="text-center border-r border-gray-200">77.8%</TableCell>
                  <TableCell className="text-center border-r border-gray-200">83.3%</TableCell>
                  <TableCell className="text-center border-r border-gray-200">50%</TableCell>
                  <TableCell className="text-center">100%</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium bg-gray-50 border-r border-gray-200">Undecided</TableCell>
                  <TableCell className="text-center border-r border-gray-200">22.2%</TableCell>
                  <TableCell className="text-center border-r border-gray-200">16.7%</TableCell>
                  <TableCell className="text-center border-r border-gray-200">50%</TableCell>
                  <TableCell className="text-center">0%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Overtime, Sleep-in Rates, and On-Call Allowances */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-chart-3 rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">1.3 Overtime, Sleep-in Rates, and On-Call Allowances</h2>
        </div>

        {/* Overtime Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Weekday Overtime Rates</CardTitle>
              <CardDescription>
                78% of organisations pay standard rates for weekday overtime
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                title="Graph 2: 2024 Weekday Overtime Rates"
                data={weekdayOvertimeData}
                type="pie"
                description="Balance of responses regarding weekday overtime rates"
                allowTypeToggle={true}
                height={300}
              />
              <div className="mt-4 prose prose-sm text-muted-foreground">
                <p>
                  Seven organisations (78%) do not offer any enhanced overtime pay, instead paying the standard or basic hourly rate. In contrast, two organisations (22%) provide an enhanced rate for weekday overtime, with one offering "time and a half," and another specifying rates of £14.86 per hour in London and £12.74 per hour outside London.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weekend Overtime Rates</CardTitle>
              <CardDescription>
                67% of organisations pay standard rates for weekend overtime
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                title="Graph 3: 2024 Weekend Overtime Rates"
                data={weekendOvertimeData}
                type="pie"
                description="Balance of responses for weekend overtime compensation"
                allowTypeToggle={true}
                height={300}
              />
              <div className="mt-4 prose prose-sm text-muted-foreground">
                <p>
                  Six organisations (67%) either do not offer any weekend overtime premium or pay the same as the basic hourly rate. Three organisations (33%) provide an enhanced rate for weekend overtime. This ranged from overtime paid at the flat rate to an enhanced rate of 1.2 times the usual FTE rate, and up to "double time."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sleep-in Rates */}
        <Card>
          <CardHeader>
            <CardTitle>Sleep-in Rates</CardTitle>
            <CardDescription>
              Variation in sleep-in allowances across participating organisations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none text-foreground mb-6">
              <p>
                Beyond overtime rates, our survey also explored sleep-in allowances paid to employees. Of the nine organisations surveyed, three reported having an increased rate for sleep-in shifts and provided further insights:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Organisation 1</h4>
                <p className="text-lg font-bold text-primary">0.2x normal hourly rate</p>
                <p className="text-xs text-muted-foreground mt-1">Per sleep-in shift</p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Organisation 2</h4>
                <p className="text-lg font-bold text-primary">£30.24</p>
                <p className="text-xs text-muted-foreground mt-1">Flat rate per shift</p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Organisation 3</h4>
                <p className="text-lg font-bold text-primary">£61.50</p>
                <p className="text-xs text-muted-foreground mt-1">Flat rate per shift</p>
              </div>
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-800">
                These figures highlight the variation in sleep-in allowance rates, reflecting differing organisational approaches to compensating employees for this type of work. However, most organisations did not report offering enhanced rates or specific allowances for sleep-in shifts, which suggests there is still limited adoption for this across the survey sample.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* On-Call Allowances */}
        <Card>
          <CardHeader>
            <CardTitle>On-Call Allowances</CardTitle>
            <CardDescription>
              50% of organisations offer structured on-call rates ranging from £20 to £80
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-sm max-w-none text-foreground">
              <p>
                Our survey revealed a wide range of practices regarding out-of-hours allowances. While four organisations (50%) reported offering no additional payments, others provided structured on-call rates, particularly for management staff.
              </p>
            </div>

            <ChartContainer
              title="Graph 4: 2024 On-Call Allowance"
              data={onCallData}
              type="bar"
              description="Range of on-call allowance rates from £20 to £80"
              allowTypeToggle={true}
              height={350}
            />

            <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-l-primary">
              <h4 className="font-semibold text-foreground mb-3">Examples of On-Call Allowances</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Payments of £20 per night (£40 for weekends and bank holidays, rising to £80 for Christmas Day and New Year's Day)</li>
                <li>• £32 for weekdays and £64 for weekends plus hourly rates for callouts</li>
                <li>• £30 per on-call shift</li>
              </ul>
            </div>

            <div className="prose prose-sm text-muted-foreground">
              <p>
                Bank holiday and emergency work were also compensated by some organisations with enhanced rates, such as double pay (x2.0) plus two days in lieu, or x1.5 for the first four hours and x2.0 thereafter. Some arrangements, such as TOIL or allowances under TUPE terms, were also mentioned. These findings highlight significant variation in how organisations approach out-of-hours compensation and demonstrate a diversity of operational priorities and policies.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Core Benefits Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-chart-4 rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">2. Core Benefits</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Wellbeing Benefits Overview
            </CardTitle>
            <CardDescription>
              78% of organisations provide comprehensive wellbeing support including EAP and counselling
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none text-foreground">
              <p>
                We asked participants what wellbeing benefits their organisations currently offer. Seven of nine (78%) were able to respond with varying degrees of detail. Of those who responded, all provide some form of access to Employee Assistance Programmes (EAP), which is often paired with counselling services, wellbeing days, and access to reflective practice.
              </p>
              <p className="mt-4">
                Some organisations offer additional support such as private health insurance, health cashback schemes, and life assurance. Financial wellbeing tools are also prominent, including salary advances and affordable loans. Other notable benefits include occupational health services, wellbeing toolkits, workplace supporter schemes, and access to discounts on gym memberships. Six out of nine organisations also offer retail discount vouchers as part of their benefits package.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Healthcare Benefits */}
        <Card>
          <CardHeader>
            <CardTitle>Healthcare Benefits</CardTitle>
            <CardDescription>
              75% of staff receive healthcare benefits including medical insurance and health cash plans
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-sm max-w-none text-foreground">
              <p>
                Eight participants responded to the question of whether they offer healthcare benefits to staff, six of which stating that they do. With respect to these healthcare benefits, four organisations provide some form of medical insurance. Other benefits provided amongst organisations include free eye tests, and health cash plans for all employees.
              </p>
            </div>

            <ChartContainer
              title="Graph 5: 2024 Healthcare Benefits"
              data={healthcareData}
              type="pie"
              description="Percentage of staff receiving healthcare benefits"
              allowTypeToggle={true}
              height={300}
            />
          </CardContent>
        </Card>

        {/* Maternity/Paternity Leave */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Umbrella className="h-5 w-5 text-primary" />
              Maternity and Paternity Leave
            </CardTitle>
            <CardDescription>
              Enhanced provisions beyond statutory requirements vary across organisations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none text-foreground mb-6">
              <p>
                The responses regarding maternity and paternity leave policies varied across our sample. Five of nine were able to outline the details of their organisation's policies.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Maternity Leave Examples</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border bg-card">
                    <Badge variant="outline" className="mb-2">Standard Enhanced</Badge>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 13 weeks full pay</li>
                      <li>• 13 weeks half pay</li>
                      <li>• 13 weeks Statutory Maternity Pay (SMP)</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg border bg-card">
                    <Badge variant="outline" className="mb-2">More Generous</Badge>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 16 weeks full pay</li>
                      <li>• 24 weeks half pay</li>
                      <li>• 12 weeks unpaid leave</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Paternity Leave Examples</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border bg-card">
                    <Badge variant="outline" className="mb-2">Full Pay</Badge>
                    <p className="text-sm text-muted-foreground">Two weeks full pay</p>
                  </div>
                  <div className="p-4 rounded-lg border bg-card">
                    <Badge variant="outline" className="mb-2">Mixed</Badge>
                    <p className="text-sm text-muted-foreground">Full pay for first week and Statutory Paternity Pay (SPP) for second week</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-l-primary">
                <p className="text-sm text-muted-foreground">
                  <strong>Summary:</strong> While statutory provisions form the baseline, some organisations offer enhanced maternity and paternity pay to provide additional financial support during parental leave. One organisation also offers enhanced pay (40% of average weekly earnings) during weeks 7 to 26 of ordinary leave, on top of SMP, provided employees meet eligibility criteria and commit to returning to work for at least three months.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reviewing Benefits */}
        <Card>
          <CardHeader>
            <CardTitle>Reviewing Benefits</CardTitle>
            <CardDescription>
              22% of organisations plan to review benefits over the next 12 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none text-foreground">
              <p>
                When asking participants if they are planning on reviewing benefits over the next 12 months only two of nine (22%) commented that they would. Of these, one commented that they are always reviewing benefits as part of their ongoing wellbeing consideration, while the other will be specifically assessing their maternity/paternity and family friendly leave schemes. This organisation is also considering reviewing their healthcare benefits package.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Holiday Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-primary rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">2.1 Holiday</h2>
        </div>

        {/* Starting Annual Leave */}
        <Card>
          <CardHeader>
            <CardTitle>Starting Annual Leave Entitlement</CardTitle>
            <CardDescription>
              25 days remains the most common starting allowance (56% of organisations)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-sm max-w-none text-foreground">
              <p>
                In this year's survey, we examined the starting annual leave entitlement provided by the nine participating organisations, excluding the eight days of statutory bank holiday entitlement.
              </p>
            </div>

            <ChartContainer
              title="Graph 6: 2024 Basic Holiday Allowance"
              data={basicHolidayData}
              type="pie"
              description="Starting annual leave entitlement across organisations"
              allowTypeToggle={true}
              height={300}
            />

            <div className="prose prose-sm text-muted-foreground">
              <p>
                The responses show that 25 days remains the most common starting allowance, which is offered by six organisations. Two organisations offer 28 days, and one organisation provides 29 days. Compared with the previous year's survey, the range of holiday entitlements has remained consistent, with 25 days still the most frequently reported starting allowance.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Maximum Annual Leave */}
        <Card>
          <CardHeader>
            <CardTitle>Maximum Annual Leave Entitlement</CardTitle>
            <CardDescription>
              30 days is the most common maximum (45% of organisations)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-sm max-w-none text-foreground">
              <p>
                Of the nine organisations surveyed, only two (22%) provide a fixed holiday allowance with no increases for tenure, offering 25 and 29 days respectively. The remaining seven organisations (78%) offer some form of service-based progression, where holiday entitlement increases incrementally over time.
              </p>
            </div>

            <ChartContainer
              title="Graph 7: 2024 Maximum Holiday Entitlement"
              data={maxHolidayData}
              type="pie"
              description="Maximum annual leave entitlement based on service"
              allowTypeToggle={true}
              height={300}
            />

            <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-l-primary">
              <h4 className="font-semibold text-foreground mb-2">Progression Examples</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Two organisations increase leave by one day per year for the first five years of service</li>
                <li>• One reaches 30 days after ten years of service</li>
                <li>• One allows employees to accrue an additional day each April until 30 days are reached after at least 4.5 years</li>
                <li>• One organisation provides 31 days effective from the April following an employee's fifth year of service</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Additional Holiday Allowance */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Holiday Benefits</CardTitle>
            <CardDescription>
              22% of organisations provide extra holiday allowances
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <ChartContainer
              title="Graph 8: 2024 Additional Holiday Benefits"
              data={additionalHolidayData}
              type="pie"
              description="Percentage of organisations offering additional holiday"
              allowTypeToggle={true}
              height={300}
            />

            <div className="prose prose-sm text-muted-foreground">
              <p>
                The majority (78%) reported that they do not offer additional holiday arrangements. Two organisations (22%) indicated they provide extra holiday benefits: one offers staff a day off for their birthday, while the other grants additional leave for long service milestones (awarding one extra day in the 10th, 20th, and 30th years of service). These additional days are not consolidated into the standard annual leave entitlement: they are only granted in the relevant milestone year.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Buying/Selling Annual Leave */}
        <Card>
          <CardHeader>
            <CardTitle>Buying and Selling Annual Leave</CardTitle>
            <CardDescription>
              44% of organisations now offer buy and sell policies - almost double the 25% from 2022/23
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <ChartContainer
              title="Graph 9: 2024 Buying & Selling Annual Leave"
              data={buySellData}
              type="pie"
              description="Organisations allowing staff to buy/sell annual leave"
              allowTypeToggle={true}
              height={300}
            />

            <div className="prose prose-sm max-w-none text-foreground">
              <p>
                Of the organisations that provide this benefit, two allow employees to buy or sell up to five days of leave annually, with pro-rata arrangements for part-time staff. One organisation offers a more flexible policy, permitting employees to sell one week of leave per year and purchase one, two, or three weeks. Additionally, one organisation does not currently offer this policy but plans to implement it in the next leave year. Another organisation provides an alternative option, allowing employees to carry over up to five unused days into the following year.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
              <p className="text-sm text-green-800">
                <strong>Trend Alert:</strong> Almost half of the organisations within this sample now provide buy and sell policies. This indicates a significant increase compared to previous years. In the 2022/2023 report, only 25% of organisations offered such policies: this has almost doubled to 44% this year. This trend is further supported by the fact that some organisations are planning to implement these policies in the near future, which suggests flexible holiday options may become a more prominent feature of employee benefits.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
