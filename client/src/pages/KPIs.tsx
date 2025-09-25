import ChartContainer from "@/components/ChartContainer";
import KPICard from "@/components/KPICard";
import { kpiData } from "@shared/sampleData";

export default function KPIs() {
  // Transform KPI data for charts
  const sicknessData = kpiData.map(kpi => ({ name: kpi.year, value: kpi.sickness_ltr_pct || 0 }));
  const turnoverData = [
    { name: '2023', value: 18.5, 'Global Turnover': 18.5, 'Voluntary Turnover': 12.3 },
    { name: '2024', value: 15.2, 'Global Turnover': 15.2, 'Voluntary Turnover': 10.8 }
  ];
  const conflictData = [
    { name: '0-3%', value: 11 },
    { name: '3-5%', value: 33 },
    { name: '5-8%', value: 44 },
    { name: '8%+', value: 12 }
  ];
  const agencySpendData = [
    { name: '2022/23', value: 3.2 },
    { name: '2023/24', value: 2.8 }
  ];

  return (
    <div className="space-y-8">
      {/* Professional Header */}
      <div className="bg-gradient-to-r from-primary/10 to-chart-3/10 rounded-lg p-6 border" data-testid="kpis-header">
        <h1 className="text-3xl font-bold text-foreground mb-3">Key Performance Indicators</h1>
        <p className="text-lg text-muted-foreground">
          Performance metrics and trends across participating housing associations
        </p>
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Current Sickness LTR"
          value={3.8}
          format="percentage"
          description="Long-term sickness rate (2024)"
          change={{ value: -0.4, type: 'positive' }}
          tooltip="Long-term sickness rate decreased from 4.2% in 2023 to 3.8% in 2024"
        />
        
        <KPICard
          title="Global Turnover Rate"
          value={15.2}
          format="percentage"
          description="Total employee turnover (2024)"
          change={{ value: -3.3, type: 'positive' }}
          tooltip="All organizations reported decline in global turnover vs previous year"
        />
        
        <KPICard
          title="Voluntary Turnover"
          value={10.8}
          format="percentage"
          description="Voluntary employee departures (2024)"
          change={{ value: -1.5, type: 'positive' }}
          tooltip="Voluntary turnover decreased from 12.3% in 2023 to 10.8% in 2024"
        />
        
        <KPICard
          title="Agency Spend"
          value={2.8}
          format="percentage"
          description="% of payroll spent on agency (2023/24)"
          change={{ value: -0.4, type: 'positive' }}
          tooltip="Percentage of payroll spent on agency staff decreased from 3.2% to 2.8%"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer
          title="Sickness LTR Trends"
          data={sicknessData}
          type="line"
          description="Long-term sickness rates year-over-year"
          allowTypeToggle={true}
        />
        
        <ChartContainer
          title="Turnover Comparison"
          data={turnoverData}
          type="bar"
          multiSeries={true}
          seriesKeys={['Global Turnover', 'Voluntary Turnover']}
          description="Global vs voluntary turnover rates"
          allowTypeToggle={true}
        />
        
        <ChartContainer
          title="Conflict Index Distribution"
          data={conflictData}
          type="pie"
          description="Distribution of conflict index percentages"
          allowTypeToggle={true}
        />
        
        <ChartContainer
          title="Agency Spend Trend"
          data={agencySpendData}
          type="line"
          description="Agency spending as percentage of payroll"
          allowTypeToggle={true}
        />
      </div>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border border-card-border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-3 text-sidebar-primary">Key Trends</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>All organizations reported improved turnover rates year-over-year</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Sickness absence rates continue to decline across the sector</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Conflict index varies significantly but most organizations maintain 3-8% range</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>Agency spending reduced as organizations improved retention</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-card border border-card-border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-3 text-sidebar-primary">Benchmarking Notes</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-yellow-500 mt-1">•</span>
              <span>LTR: Long-term sickness absence lasting more than 4 weeks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500 mt-1">•</span>
              <span>Global turnover includes both voluntary and involuntary departures</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500 mt-1">•</span>
              <span>Conflict index measures workplace disputes and grievances</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500 mt-1">•</span>
              <span>Agency spend includes temporary and contract staffing costs</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}