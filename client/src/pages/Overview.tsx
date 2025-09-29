import KPICard from "@/components/KPICard";
import { summaryMetrics } from "@shared/sampleData";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Gift, 
  Layout, 
  BarChart3, 
  PoundSterling, 
  Users,
  ArrowRight 
} from "lucide-react";

export default function Overview() {
  const [, setLocation] = useLocation();

  const navigateToSection = (path: string) => {
    setLocation(path);
  };

  const navigationSections = [
    {
      title: "Reflections on Pay",
      description: "Analysis of pay trends, forecasts, and market drivers",
      path: "/reflections",
      icon: TrendingUp,
      colors: "from-primary to-chart-4",
      bgGradient: "from-primary/10 to-chart-4/10",
      borderColor: "border-primary/30"
    },
    {
      title: "Core Benefits",
      description: "Comprehensive benefits analysis and comparisons",
      path: "/benefits", 
      icon: Gift,
      colors: "from-chart-2 to-chart-5",
      bgGradient: "from-chart-2/10 to-chart-5/10",
      borderColor: "border-chart-2/30"
    },
    {
      title: "Pay Frameworks",
      description: "Salary structures and grading frameworks",
      path: "/frameworks",
      icon: Layout,
      colors: "from-chart-3 to-primary",
      bgGradient: "from-chart-3/10 to-primary/10", 
      borderColor: "border-chart-3/30"
    },
    {
      title: "Key Performance Indicators",
      description: "Workforce metrics and performance data",
      path: "/kpis",
      icon: BarChart3,
      colors: "from-chart-4 to-chart-2",
      bgGradient: "from-chart-4/10 to-chart-2/10",
      borderColor: "border-chart-4/30"
    },
    {
      title: "National Living Wage",
      description: "Impact analysis and compliance insights",
      path: "/wages",
      icon: PoundSterling,
      colors: "from-chart-5 to-chart-3",
      bgGradient: "from-chart-5/10 to-chart-3/10",
      borderColor: "border-chart-5/30"
    },
    {
      title: "Rates of Pay",
      description: "Comprehensive salary benchmarking data",
      path: "/rates",
      icon: Users,
      colors: "from-chart-2 to-primary",
      bgGradient: "from-chart-2/10 to-primary/10",
      borderColor: "border-chart-2/30"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Report Title Header */}
      <div className="bg-gradient-to-r from-primary/10 to-chart-1/10 rounded-xl p-8 border border-primary/20 shadow-lg" data-testid="report-title-header">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">Supported Housing HR Network</h1>
          <h2 className="text-3xl font-semibold text-primary mb-3">Pay Benchmarking Group</h2>
          <p className="text-xl text-muted-foreground mb-2">December 2024</p>
          <p className="text-sm text-muted-foreground italic">Confidential Report for Participants</p>
        </div>
      </div>

      {/* Dashboard Navigation */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6" data-testid="section-dashboard-navigation">
          <div className="w-1 h-8 bg-gradient-to-b from-chart-2 to-chart-4 rounded-full shadow-sm"></div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-chart-2 to-chart-4 bg-clip-text text-transparent">Explore Dashboard Sections</h2>
        </div>
        
        <Card className="bg-gradient-to-br from-card to-chart-2/5 border-chart-2/20 shadow-xl">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Navigate to detailed analyses and insights across all areas of the salary benchmarking report
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {navigationSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <Button
                    key={section.path}
                    onClick={() => navigateToSection(section.path)}
                    variant="ghost"
                    className={`
                      group relative h-auto p-6 bg-gradient-to-br ${section.bgGradient} 
                      ${section.borderColor} border-2 rounded-xl shadow-lg hover-elevate 
                      transition-all duration-300 text-left
                    `}
                    data-testid={`button-navigate-${section.path.substring(1)}`}
                  >
                    <div className="flex flex-col items-start space-y-4 w-full">
                      <div className={`
                        bg-gradient-to-r ${section.colors} p-3 rounded-lg shadow-md 
                        group-hover:scale-110 transition-transform duration-200
                      `}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="space-y-2 flex-1">
                        <h3 className={`
                          font-bold text-lg bg-gradient-to-r ${section.colors} 
                          bg-clip-text text-transparent group-hover:scale-105 
                          transition-transform duration-200
                        `}>
                          {section.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {section.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between w-full pt-2">
                        <span className="text-xs font-medium text-chart-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          View Details
                        </span>
                        <ArrowRight className="h-4 w-4 text-chart-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Click any section above to access detailed analysis and interactive data
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* About the Participants */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4" data-testid="section-about-participants">
          <div className="w-1 h-8 bg-primary rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">About the Participants</h2>
        </div>
        
        <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
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
        <div className="flex items-center gap-3 mb-4" data-testid="section-about-us">
          <div className="w-1 h-8 bg-chart-2 rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">About Us</h2>
        </div>
        
        <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
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
        <div className="flex items-center gap-3 mb-4" data-testid="section-summary-findings">
          <div className="w-1 h-8 bg-chart-3 rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">Summary of Findings</h2>
        </div>
        
        <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
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