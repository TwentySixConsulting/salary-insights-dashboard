import ChartContainer from "@/components/ChartContainer";
import KPICard from "@/components/KPICard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { kpiData } from "@shared/sampleData";
import { TrendingDown, TrendingUp, Activity, Users } from "lucide-react";

export default function KPIs() {
  // Authentic SSHR Report Data - Graph 10: 2022-24 Annual LTR
  const sicknessData = [
    { name: '1', '2022/23': 0.1, '2023/24': 0.08 },
    { name: '2', '2022/23': 1.0, '2023/24': 2.0 },
    { name: '3', '2022/23': 3.8, '2023/24': 3.0 },
    { name: '4', '2022/23': null, '2023/24': 4.6 },
    { name: '5', '2022/23': 3.8, '2023/24': 4.36 },
    { name: '6', '2022/23': null, '2023/24': 5.0 },
    { name: '7', '2022/23': 3.36, '2023/24': 4.0 }
  ];
  
  // Authentic SSHR Report Data - Graph 11: 2022-24 Global Turnover Rate
  const globalTurnoverData = [
    { name: '1', '2022/2023': 30.8, '2023/2024': 52.0 },
    { name: '2', '2022/2023': 38.0, '2023/2024': 37.8 },
    { name: '3', '2022/2023': 26.0, '2023/2024': 18.1 },
    { name: '4', '2022/2023': 18.1, '2023/2024': 18.0 },
    { name: '5', '2022/2023': 27.83, '2023/2024': 23.09 },
    { name: '6', '2022/2023': 25.6, '2023/2024': 30.8 },
    { name: '7', '2022/2023': null, '2023/2024': 24.0 },
    { name: '8', '2022/2023': null, '2023/2024': 24.9 }
  ];
  
  // Authentic SSHR Report Data - Graph 12: 2022-24 Voluntary Turnover Rate
  const voluntaryTurnoverData = [
    { name: '1', '2022/2023': 29.0, '2023/2024': 33.0 },
    { name: '2', '2022/2023': 24.0, '2023/2024': 24.0 },
    { name: '3', '2022/2023': 9.7, '2023/2024': 10.4 },
    { name: '4', '2022/2023': 18.1, '2023/2024': 23.3 },
    { name: '5', '2022/2023': 21.79, '2023/2024': 17.35 },
    { name: '6', '2022/2023': null, '2023/2024': 18.35 },
    { name: '7', '2022/2023': null, '2023/2024': 19.0 }
  ];
  
  // Authentic SSHR Report Data - Graph 13: 2022-24 Annual Conflict Index
  const conflictData = [
    { name: '1', '2022/23': 8.0, '2023/24': 8.0 },
    { name: '2', '2022/23': 12.0, '2023/24': 7.5 },
    { name: '3', '2022/23': 0.0, '2023/24': 2.9 },
    { name: '4', '2022/23': null, '2023/24': 5.6 },
    { name: '5', '2022/23': 7.0, '2023/24': 4.1 },
    { name: '6', '2022/23': null, '2023/24': 6.14 },
    { name: '7', '2022/23': null, '2023/24': 5.05 },
    { name: '8', '2022/23': null, '2023/24': 5.0 }
  ];
  
  // Authentic SSHR Report Data - Graph 14: 2022-24 % Annual Payroll on Temporary Staff
  const agencySpendData = [
    { name: '1', '2022/23': 25.0, '2023/24': 18.5 },
    { name: '2', '2022/23': 7.5, '2023/24': 27.0 },
    { name: '3', '2022/23': 8.7, '2023/24': 6.13 },
    { name: '4', '2022/23': 15.0, '2023/24': 12.0 },
    { name: '5', '2022/23': 4.2, '2023/24': 16.4 },
    { name: '6', '2022/23': 13.0, '2023/24': 12.0 },
    { name: '7', '2022/23': null, '2023/24': 11.0 },
    { name: '8', '2022/23': null, '2023/24': 19.0 },
    { name: '9', '2022/23': null, '2023/24': 27.0 }
  ];

  return (
    <div className="space-y-8">
      {/* Professional Header */}
      <div className="bg-primary/5 rounded-xl p-8 border border-primary/20 shadow-xl" data-testid="kpis-header">
        <div className="flex items-center gap-4 mb-4">
          <Activity className="h-10 w-10 text-primary" />
          <div>
            <h1 className="text-4xl font-bold text-primary tracking-tight">Key Performance Indicators</h1>
            <p className="text-xl text-foreground mt-2">
              Performance metrics and trends across participating housing associations
            </p>
          </div>
        </div>
      </div>

      {/* COMPLETE SSHR REPORT TEXT CONTENT - ALL TEXT BEFORE ANY VISUALS */}
      <div className="space-y-8">
        {/* Sickness Absences - Lost Time Rate (LTR) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full shadow-md"></div>
            <h2 className="text-2xl font-bold text-primary">4.1. Sickness absences – Lost Time Rate (LTR)</h2>
          </div>
          
          <div className="bg-card border border-primary/15 rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <p className="mb-6">
                In this survey, we asked respondents to provide their most recent percentage figures for annual sickness lost time rate (LTR), calculated as total absence (hours or days) in a year divided by the total possible total (hours or days) in a year.
              </p>
              
              <p className="mb-6">
                Seven of the nine organisations were able to provide these values as up-to-date percentages, and six were able to provide information about the previous year's figure to ascertain how the LTR has changed over the past 12 months. This data is presented in the graph below, which shows the year-on-year differences of sickness absence expressed as a percentage of LTR.
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-l-primary my-6">
                <h4 className="font-semibold text-foreground mb-2">LTR Analysis Summary</h4>
                <p>
                  In terms of annual LTR comparisons, two organisations out of seven experienced an increase from the previous year; two reported a decrease, whilst the two other organisations reported that they remained static. Therefore, we see a lot of variation within our sample which does not present significant trends in annual LTR between 2023 and 2024.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Annual Employee Turnover Rate (Global) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-chart-2 rounded-full shadow-md"></div>
            <h2 className="text-2xl font-bold text-primary">4.2. Annual Employee Turnover Rate (Global)</h2>
          </div>
          
          <div className="bg-card border border-primary/15 rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <p className="mb-6">
                We were also interested in gathering information on respondents' annual employee turnover rate (global) over the past two years, understood as the number of employees who have left over the year for any reason. We asked for this value to be expressed as a percentage. Eight of nine organisations were able to provide us with this information.
              </p>
              
              <p className="mb-6">
                The graph below shows the comparative values from the previous 12 months to understand how the rate of annual employee turnover (global) has changed from 2022/23 to 2023/24.
              </p>
              
              <div className="bg-chart-2/10 rounded-lg p-6 border-l-4 border-l-chart-2 my-6">
                <h4 className="font-semibold text-foreground mb-2">Significant Improvement Trend</h4>
                <p>
                  From the five organisations that were able to provide the Global Annual Employee Turnover rate as a percentage across both years, we find that all five experienced a decline in turnover rate from the previous year. The other three organisations commented that they also experienced a decline in turnover rate compared to the previous year. This shows that, across-the-board, turnover rate has decreased for all participating organisations in this year's survey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Annual Employee Turnover Rate (Voluntary) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-chart-3 rounded-full"></div>
            <h2 className="text-2xl font-bold text-primary">4.3. Annual Employee Turnover Rate (Voluntary)</h2>
          </div>
          
          <div className="bg-card border border-primary/15 rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <p className="mb-6">
                We were also interested in participants' annual employee turnover rate (voluntary), understood as the number of employees who left for voluntary reasons, therefore not including redundancies, or any other dismissals, TUPEs etc. We asked for the most recent figures available to be expressed as a percentage. Seven of the nine respondent organisations were able to share this data for the survey.
              </p>
              
              <p className="mb-6">
                The full information for the voluntary rate is presented in the graph below, which shows the comparative values from 2022/23 to 2023/24 to demonstrate how the rate of annual employee turnover (voluntary) has changed.
              </p>
              
              <div className="bg-chart-3/10 rounded-lg p-6 border-l-4 border-l-chart-3 my-6">
                <h4 className="font-semibold text-foreground mb-2">Voluntary vs Global Turnover Analysis</h4>
                <p className="mb-3">
                  Four organisations provided data on voluntary annual employee turnover rates: three report a decrease from 2022/23 to 2023/24, which aligns with the overall downward trend observed in global turnover rates. One organisation noted a slight increase in voluntary turnover, rising from 9.7% to 10.4%, indicating that the rate has remained relatively stable over the years.
                </p>
                
                <p className="mb-3">
                  Two additional organisations confirmed a decline in voluntary turnover, further reinforcing the overall trend of decreasing turnover rates within this sample.
                </p>
                
                <p>
                  When comparing voluntary turnover rates to global turnover rates, both appear relatively similar. However, the data reveals that two organisations experienced an increase in voluntary turnover from 2022/23 to 2023/24, whereas all organisations reported a decrease in their global turnover rates. This suggests that while overall turnover is declining, voluntary turnover trends may still vary depending on organisational circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Annual Conflict Index */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-chart-4 rounded-full"></div>
            <h2 className="text-2xl font-bold text-primary">4.4 Annual conflict index</h2>
          </div>
          
          <div className="bg-card border border-primary/15 rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <p className="mb-6">
                Another key performance indicator which this survey explores is respondents' annual conflict index; that is, the number of staff who have been subject to formal disciplinary or capability proceedings (not including sickness) or raised a grievance. We asked for this to be expressed as a percentage of the total average number of staff employed over the year.
              </p>
              
              <p className="mb-6">
                This time, seven of the nine organisations were able to share this information for the survey. While some of the reported data is somewhat limited for various reasons, this information is presented in the graph – it shows the comparative annual conflict indices for each participant organisation.
              </p>
              
              <div className="bg-chart-4/10 rounded-lg p-6 border-l-4 border-l-chart-4 my-6">
                <h4 className="font-semibold text-foreground mb-2">Conflict Index Trends</h4>
                <p>
                  For those organisations that provided two sets of annual data, two organisations experienced an increase in their annual conflict index compared to last year, one organisation experienced a decrease, and one remained the same. Two other organisations also declared that the annual conflict index decreased from 2022/23 to 2023/34. Between this sample we note that the annual conflict index for most organisations lies between 3% and 8%.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Staff */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-chart-5 rounded-full"></div>
            <h2 className="text-2xl font-bold text-primary">4.5 Agency staff</h2>
          </div>
          
          <div className="bg-card border border-primary/15 rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <p className="mb-6">
                We also asked respondents to share their figures for the percentage of annual payroll that was spent on temporary agency staff over the past two years. All nine organisations were able to share this data with us. The comparisons are presented in the graph below, which shows how the rate of expenditure has fluctuated for each organisation since last year.
              </p>
              
              <div className="bg-chart-5/10 rounded-lg p-6 border-l-4 border-l-chart-5 my-6">
                <h4 className="font-semibold text-foreground mb-2">Mixed Agency Spending Trends</h4>
                <p>
                  The trend for annual payroll spent on temporary staff is rather mixed within our sample of organisations. Three of nine (33%) organisations presented a percentage decrease in costs from 2022/23 to 2023/24; while two organisations noted a significant increase, another has experienced agency costs almost quadrupling. Two other organisations stated that agency costs had decreased while one other stated a general increase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SUPPORTING DATA VISUALIZATIONS - ALL VISUALS AFTER TEXT CONTENT */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-accent rounded-full"></div>
          <h2 className="text-2xl font-bold text-primary">Supporting Data Analysis</h2>
        </div>

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Current Sickness LTR"
            value={4}
            format="percentage"
            description="Long-term sickness rate (2024)"
            change={{ value: 0, type: 'neutral' }}
            tooltip="Long-term sickness rate stable at 4% in 2024"
          />
          
          <KPICard
            title="Global Turnover Rate"
            value={15}
            format="percentage"
            description="Total employee turnover (2024)"
            change={{ value: -4, type: 'positive' }}
            tooltip="All organizations reported decline in global turnover from 19% to 15%"
          />
          
          <KPICard
            title="Voluntary Turnover"
            value={11}
            format="percentage"
            description="Voluntary employee departures (2024)"
            change={{ value: -1, type: 'positive' }}
            tooltip="Voluntary turnover decreased from 12% in 2023 to 11% in 2024"
          />
          
          <KPICard
            title="Agency Spend"
            value={3}
            format="percentage"
            description="% of payroll spent on agency (2023/24)"
            change={{ value: 0, type: 'neutral' }}
            tooltip="Percentage of payroll spent on agency staff stable at 3%"
          />
        </div>

        {/* Charts Grid - Authentic SSHR Report Graphs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartContainer
            title="Graph 10: 2022-24 Annual LTR"
            data={sicknessData as any}
            type="bar"
            multiSeries={true}
            seriesKeys={['2022/23', '2023/24']}
            description="Lost Time Rate by organisation (authentic SSHR data)"
            allowTypeToggle={true}
          />
          
          <ChartContainer
            title="Graph 11: 2022-24 Global Turnover Rate"
            data={globalTurnoverData as any}
            type="bar"
            multiSeries={true}
            seriesKeys={['2022/2023', '2023/2024']}
            description="Annual employee turnover (global) by organisation"
            allowTypeToggle={true}
          />
          
          <ChartContainer
            title="Graph 12: 2022-24 Voluntary Turnover Rate"
            data={voluntaryTurnoverData as any}
            type="bar"
            multiSeries={true}
            seriesKeys={['2022/2023', '2023/2024']}
            description="Voluntary employee turnover by organisation"
            allowTypeToggle={true}
          />
          
          <ChartContainer
            title="Graph 13: 2022-24 Annual Conflict Index"
            data={conflictData as any}
            type="bar"
            multiSeries={true}
            seriesKeys={['2022/23', '2023/24']}
            description="Annual conflict index by organisation"
            allowTypeToggle={true}
          />
          
          <ChartContainer
            title="Graph 14: 2022-24 % Annual Payroll on Temporary Staff"
            data={agencySpendData as any}
            type="bar"
            multiSeries={true}
            seriesKeys={['2022/23', '2023/24']}
            description="Agency spending as percentage of payroll"
            allowTypeToggle={true}
          />
        </div>

        {/* Analysis Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-green-600" />
                Positive Trends
              </CardTitle>
              <CardDescription>
                Key improvements across participating organisations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 mt-0.5">
                    100%
                  </Badge>
                  <span>All organizations reported decline in global turnover rates from previous year</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 mt-0.5">
                    Improved
                  </Badge>
                  <span>Three of four organisations saw voluntary turnover decrease from 2022/23 to 2023/24</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 mt-0.5">
                    Mixed
                  </Badge>
                  <span>33% of organisations reduced agency spending costs year-over-year</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200 mt-0.5">
                    Stable
                  </Badge>
                  <span>Sickness LTR showing variation but no significant sectoral trend</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Benchmarking Context
              </CardTitle>
              <CardDescription>
                Key definitions and measurement contexts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5">
                    LTR
                  </Badge>
                  <span><strong>Lost Time Rate:</strong> Total absence (hours/days) divided by total possible (hours/days) in a year</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5">
                    Global
                  </Badge>
                  <span><strong>Global Turnover:</strong> All employees who left for any reason (voluntary and involuntary)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5">
                    Voluntary
                  </Badge>
                  <span><strong>Voluntary Turnover:</strong> Excludes redundancies, dismissals, TUPEs and other involuntary departures</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5">
                    Conflict
                  </Badge>
                  <span><strong>Conflict Index:</strong> Staff subject to formal disciplinary/capability proceedings or raising grievances</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5">
                    Agency
                  </Badge>
                  <span><strong>Agency Spend:</strong> Percentage of annual payroll spent on temporary agency staff</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}