import KPICard from "@/components/KPICard";
import ChartContainer from "@/components/ChartContainer";
import { summaryMetrics, kpiData } from "@shared/sampleData";

export default function Overview() {
  const overviewChartData = [
    { name: 'Pay Rise Range', value: 7.1, description: '2.1% to 7.1%+' },
    { name: 'Healthcare Benefits', value: 67 },
    { name: 'Living Wage Adoption', value: 89 },
    { name: 'Weekend Standard Rate', value: 67 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Overview</h1>
        <p className="text-muted-foreground">
          Key metrics and summary insights from the SSHR Pay Benchmark Group Report (2024/25)
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Pay Rise Implementation"
          value={100}
          format="percentage"
          description="All participants implemented 2024 pay rise"
          tooltip="All 9 organisations in the survey implemented pay increases ranging from 2.1% to 7.1%+"
        />
        
        <KPICard
          title="2025 Consolidated Increase"
          value={summaryMetrics.consolidated_2025_pct}
          format="percentage"
          description="Plan consolidated increase in 2025"
          change={{ value: 5.2, type: 'positive' }}
          tooltip="55.6% plan a consolidated increase in 2025 (22.2% undecided)"
        />
        
        <KPICard
          title="Healthcare Benefits"
          value={summaryMetrics.healthcare_benefits_pct}
          format="percentage"
          description="Organisations offering healthcare benefits"
          tooltip="67% offer healthcare benefits including cash plans, PMI, eye tests"
        />
        
        <KPICard
          title="Common Annual Leave Start"
          value={summaryMetrics.common_holiday_start}
          description="Most common starting annual leave days"
          tooltip="25 days is the most common starting annual leave entitlement, with 30 days typical cap"
        />
        
        <KPICard
          title="Weekend Overtime"
          value={summaryMetrics.weekend_overtime_standard_pct}
          format="percentage"
          description="Pay standard rates for weekend work"
          tooltip="67% pay standard rates for weekend overtime; 33% enhanced rates"
        />
        
        <KPICard
          title="On-Call Allowances"
          value={summaryMetrics.on_call_allowance_pct}
          format="percentage"
          description="Offer structured on-call allowances"
          tooltip="50% offer structured on-call allowances ranging from £20–£80 per shift"
        />
        
        <KPICard
          title="Global Turnover Decline"
          value={summaryMetrics.turnover_decline_pct}
          format="percentage"
          description="Organizations reporting turnover decline"
          change={{ value: -8.3, type: 'positive' }}
          tooltip="All organisations reported decline in global turnover vs last year"
        />
        
        <KPICard
          title="NLW Impact"
          value={summaryMetrics.nlw_impact_pct}
          format="percentage"
          description="Will be impacted by NLW rise to £12.21"
          tooltip="44% will be impacted by National Living Wage rise to £12.21"
        />
        
        <KPICard
          title="Living Wage Adoption"
          value={summaryMetrics.living_wage_adoption_pct}
          format="percentage"
          description="Adopted or plan to adopt RLW/LLW"
          change={{ value: 12.5, type: 'positive' }}
          tooltip="89% have adopted or plan to adopt Real or London Living Wage"
        />
        
        <KPICard
          title="Conflict Index Range"
          value={summaryMetrics.conflict_index_range}
          description="Annual conflict index range"
          tooltip="Annual conflict index largely ranges between 3-8% across organisations"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer
          title="Key Benefits Adoption"
          data={overviewChartData}
          type="bar"
          description="Percentage of organisations offering key benefits and policies"
          allowTypeToggle={true}
        />
        
        <ChartContainer
          title="KPI Trends"
          data={kpiData.map(kpi => ({
            name: kpi.year,
            'Sickness LTR': kpi.sickness_ltr_pct,
            'Global Turnover': kpi.turnover_global_pct,
            'Voluntary Turnover': kpi.turnover_voluntary_pct
          }))}
          type="line"
          multiSeries={true}
          seriesKeys={['Sickness LTR', 'Global Turnover', 'Voluntary Turnover']}
          description="Year-over-year trends in key performance indicators"
          allowTypeToggle={true}
        />
      </div>
    </div>
  );
}