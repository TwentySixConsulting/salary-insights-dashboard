import KPICard from "@/components/KPICard";
import ChartContainer from "@/components/ChartContainer";
import { summaryMetrics, kpiData } from "@shared/sampleData";

export default function Overview() {
  // Categorised chart data for better structure
  const payTrendsData = [
    { name: '2024 Pay Awards Range', value: 7.1, description: '2.1% to 7.1%+' },
    { name: 'Living Wage Adoption', value: 89, description: '89% adopted or planning adoption' }
  ];

  const benefitsData = [
    { name: 'Healthcare Benefits', value: 67, description: '67% offering health benefits' },
    { name: 'Holiday Buy/Sell', value: 44, description: '44% offer holiday trading' },
    { name: 'On-Call Allowances', value: 50, description: '50% structured allowances' }
  ];

  const workforceData = [
    { name: 'Weekend Standard Rate', value: 67, description: '67% pay standard weekend rates' },
    { name: 'Global Turnover Decline', value: 100, description: 'All organisations reported decline' }
  ];

  return (
    <div className="space-y-8">
      {/* Executive Summary Header */}
      <div className="bg-gradient-to-r from-primary/10 to-chart-1/10 rounded-lg p-6 border" data-testid="executive-summary-header">
        <h1 className="text-3xl font-bold text-foreground mb-3">Executive Summary</h1>
        <p className="text-lg text-muted-foreground mb-4">
          SSHR Pay Benchmark Group Report (2024/25) - Housing Association Sector Analysis
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-background/80 rounded-lg p-4 border" data-testid="card-survey-scope">
            <h3 className="font-semibold text-primary mb-1">Survey Scope</h3>
            <p className="text-sm text-muted-foreground">9 participating housing associations across England</p>
          </div>
          <div className="bg-background/80 rounded-lg p-4 border" data-testid="card-pay-awards-2024">
            <h3 className="font-semibold text-primary mb-1">Pay Awards 2024</h3>
            <p className="text-sm text-muted-foreground">100% implemented increases ranging 2.1% to 7.1%+</p>
          </div>
          <div className="bg-background/80 rounded-lg p-4 border" data-testid="card-2025-outlook">
            <h3 className="font-semibold text-primary mb-1">2025 Outlook</h3>
            <p className="text-sm text-muted-foreground">55.6% planning consolidated increases amid affordability pressures</p>
          </div>
        </div>
      </div>

      {/* Pay & Compensation Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4" data-testid="section-pay-compensation">
          <div className="w-1 h-8 bg-primary rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">Pay & Compensation Metrics</h2>
        </div>
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
            title="Living Wage Adoption"
            value={summaryMetrics.living_wage_adoption_pct}
            format="percentage"
            description="Adopted or plan to adopt RLW/LLW"
            change={{ value: 12.5, type: 'positive' }}
            tooltip="89% have adopted or plan to adopt Real or London Living Wage"
          />
          
          <KPICard
            title="NLW Impact"
            value={summaryMetrics.nlw_impact_pct}
            format="percentage"
            description="Will be impacted by NLW rise to £12.21"
            tooltip="44% will be impacted by National Living Wage rise to £12.21"
          />
        </div>
      </div>

      {/* Benefits & Policies Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4" data-testid="section-benefits-policies">
          <div className="w-1 h-8 bg-chart-2 rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">Benefits & Employment Policies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
        </div>
      </div>

      {/* Workforce Performance Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4" data-testid="section-workforce-performance">
          <div className="w-1 h-8 bg-chart-3 rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">Workforce Performance Indicators</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <KPICard
            title="Global Turnover Decline"
            value={summaryMetrics.turnover_decline_pct}
            format="percentage"
            description="Organisations reporting turnover decline"
            change={{ value: -8.3, type: 'positive' }}
            tooltip="All organisations reported decline in global turnover vs last year"
          />
          
          <KPICard
            title="Conflict Index Range"
            value={summaryMetrics.conflict_index_range}
            description="Annual conflict index range"
            tooltip="Annual conflict index largely ranges between 3-8% across organisations"
          />
        ]
        </div>
      </div>

      {/* Data Visualisation Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4" data-testid="section-sector-analysis">
          <div className="w-1 h-8 bg-chart-4 rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">Sector Analysis & Trends</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartContainer
            title="Pay Award Trends"
            data={payTrendsData}
            type="bar"
            description="2024 pay implementation and living wage adoption rates"
            allowTypeToggle={true}
          />
          
          <ChartContainer
            title="Benefits Provision"
            data={benefitsData}
            type="bar"
            description="Percentage of organisations offering key employee benefits"
            allowTypeToggle={true}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartContainer
            title="Workforce Management"
            data={workforceData}
            type="bar"
            description="Workforce policies and turnover trends across the sector"
            allowTypeToggle={true}
          />
          
          <ChartContainer
            title="KPI Performance Trends"
            data={kpiData.map(kpi => ({
              name: kpi.year,
              value: kpi.turnover_global_pct || 0,
              'Sickness LTR': kpi.sickness_ltr_pct,
              'Global Turnover': kpi.turnover_global_pct,
              'Voluntary Turnover': kpi.turnover_voluntary_pct
            }))}
            type="line"
            multiSeries={true}
            seriesKeys={['Sickness LTR', 'Global Turnover', 'Voluntary Turnover']}
            description="Year-over-year trends in key performance indicators (2023-2024)"
            allowTypeToggle={true}
          />
        </div>
      </div>
    </div>
  );
}