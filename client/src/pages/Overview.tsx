import KPICard from "@/components/KPICard";
import { summaryMetrics } from "@shared/sampleData";

export default function Overview() {

  return (
    <div className="space-y-8">
      {/* Premium Report Title Header */}
      <div className="relative overflow-hidden animated-gradient rounded-3xl p-12 shadow-premium-2xl hover-glow-primary" data-testid="report-title-header">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg text-gradient-rainbow">
            Supported Housing HR Network
          </h1>
          <h2 className="text-4xl font-bold text-white/95 mb-4 drop-shadow-md">
            Pay Benchmarking Group
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-white/60"></div>
            <p className="text-2xl text-white/90 font-medium">December 2024</p>
            <div className="w-12 h-0.5 bg-white/60"></div>
          </div>
          <p className="text-lg text-white/80 italic backdrop-blur-sm bg-white/10 rounded-full px-6 py-2 inline-block">
            Confidential Report for Participants
          </p>
        </div>
        <div className="absolute top-8 right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-8 left-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      </div>

      {/* About the Participants */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6" data-testid="section-about-participants">
          <div className="w-2 h-10 bg-gradient-to-b from-chart-1 to-chart-4 rounded-full shadow-premium glow-primary"></div>
          <h2 className="text-3xl font-bold text-gradient-primary">About the Participants</h2>
        </div>
        
        <div className="bg-card-premium border-gradient-primary rounded-2xl p-8 shadow-premium hover-glow-primary">
          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            <p className="mb-4">
              The 2024/25 Supported Housing HR Network survey includes nine participating organisations from across the supported housing sector, encompassing both homelessness and care organisations.
            </p>
            
            <p className="mb-4">
              Across the nine participating organisations, annual turnover ranges from £4.3 million to £70 million. Two organisations operate exclusively within Greater London, one operates solely in the South East (excluding London), and the remaining six have operations both inside and outside Greater London. In terms of headcount, the number of employees varies from 62 to 1800, with a median of 600.
            </p>
            
            <p>
              In terms of working week, four organisations operate on a 37.5-hour week for all staff, one organisation operates exclusively on a 39-hour week, while another has a standard 40-hour week. The remaining three organisations have varying working hours depending on staff roles, ranging from 35 to 39 hours per week.
            </p>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6" data-testid="section-about-us">
          <div className="w-2 h-10 bg-gradient-to-b from-chart-2 to-chart-5 rounded-full shadow-premium glow-accent"></div>
          <h2 className="text-3xl font-bold text-gradient-accent">About Us</h2>
        </div>
        
        <div className="bg-card-premium border-gradient-accent rounded-2xl p-8 shadow-premium hover-glow-accent">
          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            <p className="mb-4">
              TwentySix is a specialist reward consultancy, which works closely with a large number of social housing groups, community support, social care and homelessness charities. Our team consists of senior reward consultants, supported by specially trained analysts. We have a track record of delivering outstanding reward projects and have built our business almost entirely on our clients recommending us to other organisations.
            </p>
            
            <p>
              TwentySix would like to thank all those who took the time to complete this survey. We hope that you find the data useful in planning for the future and that it ensures you are able to continue to support your clients and beneficiaries.
            </p>
          </div>
        </div>
      </div>

      {/* Summary of Findings */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6" data-testid="section-summary-findings">
          <div className="w-2 h-10 bg-gradient-to-b from-chart-3 to-chart-7 rounded-full shadow-premium glow-success"></div>
          <h2 className="text-3xl font-bold text-gradient-rainbow">Summary of Findings</h2>
        </div>
        
        <div className="bg-card-premium border-gradient-primary rounded-2xl p-8 shadow-premium hover-glow-primary">
          <p className="text-lg text-muted-foreground mb-6">Below we summarise some of the key findings from this report:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-l-primary hover-elevate transition-all duration-200">
                <p className="text-sm font-medium text-foreground">All participants reported implementing a pay rise in 2024: the highest proportion of pay rises compared to previous years.</p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-l-primary hover-elevate transition-all duration-200">
                <p className="text-sm font-medium text-foreground">Pay increases ranged between 2% and over 7%, with frontline and lower-paid roles prioritised due to Living Wage commitments.</p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-l-primary hover-elevate transition-all duration-200">
                <p className="text-sm font-medium text-foreground">56% of organisations plan to give a consolidated pay increase in 2025. 22% remain undecided, citing affordability concerns, particularly due to rising Living Wage requirements and increased National Insurance contributions.</p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-l-primary hover-elevate transition-all duration-200">
                <p className="text-sm font-medium text-foreground">67% of organisations pay standard rates for weekend overtime, 33% offer enhanced rates.</p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-l-primary hover-elevate transition-all duration-200">
                <p className="text-sm font-medium text-foreground">50% of organisations offer structured on-call allowances with rates ranging between £20 and £80 per shift.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-chart-2/10 rounded-lg p-6 border-l-4 border-l-chart-2 hover-elevate transition-all duration-200">
                <p className="text-sm font-medium text-foreground">25 days remains the most common starting annual leave entitlement. Maximum entitlements typically increase with service, with 30 days being the most common cap.</p>
              </div>
              
              <div className="bg-chart-2/10 rounded-lg p-6 border-l-4 border-l-chart-2 hover-elevate transition-all duration-200">
                <p className="text-sm font-medium text-foreground">44% of participants offer policies to buy and sell annual leave; this is nearly double the 25% from the previous SHHR survey in 2022/23.</p>
              </div>
              
              <div className="bg-chart-2/10 rounded-lg p-6 border-l-4 border-l-chart-2 hover-elevate transition-all duration-200">
                <p className="text-sm font-medium text-foreground">67% offer healthcare benefits, which includes health cash plans, private medical insurance, and free eye tests. Life assurance and critical illness cover are also provided by some organisations.</p>
              </div>
              
              <div className="bg-chart-2/10 rounded-lg p-6 border-l-4 border-l-chart-2 hover-elevate transition-all duration-200">
                <p className="text-sm font-medium text-foreground">All reporting organisations experienced a decline in global turnover compared to last year.</p>
              </div>
              
              <div className="bg-chart-2/10 rounded-lg p-6 border-l-4 border-l-chart-2 hover-elevate transition-all duration-200">
                <p className="text-sm font-medium text-foreground">Annual conflict indices largely sat between 3% and 8%.</p>
              </div>
              
              <div className="bg-chart-2/10 rounded-lg p-6 border-l-4 border-l-chart-2 hover-elevate transition-all duration-200">
                <p className="text-sm font-medium text-foreground">44% of organisations indicated they would be impacted by the NLW increase to £12.21.</p>
              </div>
              
              <div className="bg-chart-2/10 rounded-lg p-6 border-l-4 border-l-chart-2 hover-elevate transition-all duration-200">
                <p className="text-sm font-medium text-foreground">89% of participants have either adopted, or are planning to adopt, the real Living Wage or London Living Wage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Summary and Key Metrics */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4" data-testid="section-pay-compensation">
          <div className="w-1 h-8 bg-chart-4 rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">Key Metrics Overview</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard
            title="Pay Rise Implementation"
            value={100}
            format="percentage"
            description="All participants implemented 2024 pay rise"
            tooltip="All 9 organisations in the survey implemented pay increases ranging from 2% to 7%+"
          />
          
          <KPICard
            title="2025 Consolidated Increase"
            value={summaryMetrics.consolidated_2025_pct}
            format="percentage"
            description="Plan consolidated increase in 2025"
            change={{ value: 5.2, type: 'positive' }}
            tooltip="56% plan a consolidated increase in 2025 (22% undecided)"
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
        </div>
      </div>

    </div>
  );
}