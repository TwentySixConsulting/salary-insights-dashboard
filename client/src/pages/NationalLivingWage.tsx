import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import ChartContainer from "@/components/ChartContainer";
import KPICard from "@/components/KPICard";
import { organisations } from "@shared/sampleData";
import { PoundSterling, TrendingUp, AlertTriangle, Building2, Users } from "lucide-react";

export default function NationalLivingWage() {
  // Data for visualizations
  const nlwImpactData = [
    { name: 'Affected by NLW', value: 44, organisations: 4 },
    { name: 'Not Affected', value: 56, organisations: 5 }
  ];

  const differentialImpactData = [
    { name: 'No Impact on Differential', value: 67, count: 6 },
    { name: 'Impact on Differential', value: 33, count: 3 }
  ];

  const strategiesData = [
    { strategy: 'No Strategies (RLW Employers)', count: 5, percentage: 56 },
    { strategy: 'Strategic Response Development', count: 4, percentage: 44 }
  ];

  const livingWageAdoptionData = [
    { name: 'Adopted/Planning RLW or LLW', value: 89, count: 8 },
    { name: 'Considering (Contingent)', value: 11, count: 1 }
  ];

  const wageRatesData = [
    { type: 'National Living Wage', current: 11.44, april2025: 12.21, increase: 6.7 },
    { type: 'London Living Wage', current: 13.15, april2025: 13.85, increase: 5.3 },
    { type: 'Real Living Wage', current: 12.60, description: 'Outside London rate' }
  ];

  return (
    <div className="space-y-8">
      {/* Professional Header */}
      <div className="bg-gradient-to-r from-primary/10 to-chart-3/10 rounded-xl p-8 border border-primary/20 shadow-lg" data-testid="nlw-header">
        <div className="flex items-center gap-4 mb-4">
          <PoundSterling className="h-10 w-10 text-primary" />
          <div>
            <h1 className="text-4xl font-bold text-foreground tracking-tight">National Living Wage / Real Living Wage</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Impact analysis and adoption patterns across housing associations
            </p>
          </div>
        </div>
      </div>

      {/* COMPLETE SSHR REPORT TEXT CONTENT - ALL TEXT BEFORE ANY VISUALS */}
      <div className="space-y-8">
        {/* Introduction Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold text-foreground">5. National Living Wage/Real Living Wage</h2>
          </div>
          
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <p className="mb-6">
                With the statutory National Living Wage (NLW) set to rise to £12.21 in April 2025, we are interested in reporting how participants are affected by the increase. We are also interested in the proportion of organisations that have adopted, or are planning to adopt, the voluntary Real Living Wage (RLW), and whether these are also affected by the NLW increase.
              </p>
            </div>
          </div>
        </div>

        {/* National Living Wage Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-chart-2 rounded-full"></div>
            <h2 className="text-2xl font-bold text-foreground">National Living Wage</h2>
          </div>
          
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <p className="mb-6">
                All participants were able to answer this question, though the responses were mixed.
              </p>
              
              <p className="mb-6">
                Four out of nine organisations (44%) indicated they would be impacted, while the remaining five (56%) stated they would not be affected. Organisations unaffected by the increase highlighted their commitment to paying the RLW, particularly in London. However, some organisations that reported being affected by the rise in NLW are also those which pay the RLW and noted that its planned increase would still impact them. Additional comments included concerns about the need to raise pay for higher-level roles to maintain differentiation from entry-level positions.
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-l-primary my-6">
                <h4 className="font-semibold text-foreground mb-2">Key Finding</h4>
                <p>
                  These responses suggest that, while the NLW increase may not directly impact all organisations, it still influences broader pay structures, especially for those aligning with RLW standards.
                </p>
              </div>
              
              <p className="mb-6">
                This is further explored in the following question. We asked participants if the increase in NLW had an impact on the differential between lower and higher graded staff. Six (67%) stated it had no impact, while three (33%) indicated that it had.
              </p>
              
              <p className="mb-6">
                Finally, we asked what strategies organisations were adopting in response to the increase in the NLW. Five of the organisations who are RLW employers, said that they are currently not adopting any strategies. Four organisations reported that they are exploring strategic responses; of these, several are reviewing their pay structure, with some adjusting grades above the new NLW to maintain a reasonable gap between bands.
              </p>
            </div>
          </div>
        </div>

        {/* Living Wage Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-chart-3 rounded-full"></div>
            <h2 className="text-2xl font-bold text-foreground">Living Wage</h2>
          </div>
          
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <p className="mb-6">
                Eight out of nine (89%) participants have either adopted or are planning to adopt the RLW or London Living Wage. The one organisation that has not yet adopted it is considering doing so, contingent on affordability. Amongst organisations operating or based in London, six out of eight have already adopted or are planning to implement the London Living Wage.
              </p>
              
              <div className="bg-chart-3/10 rounded-lg p-6 border-l-4 border-l-chart-3 my-6">
                <h4 className="font-semibold text-foreground mb-2">High Adoption Rate</h4>
                <p>
                  The overwhelming majority of participating housing associations (89%) demonstrate strong commitment to living wage principles, with most either having implemented or actively planning to implement Real Living Wage or London Living Wage standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Wage Impact Analysis */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-chart-4 rounded-full"></div>
            <h2 className="text-2xl font-bold text-foreground">Wage Rate Context and Impact</h2>
          </div>
          
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <p className="mb-6">
                The forthcoming 6% increase in the statutory National Living Wage to £12.21, will take the minimum salary for a 37.5-hour week to £23,809. Furthermore, almost all of our survey respondents are signed up to the London Living Wage (previously £13.15, since announced to rise to £13.85). Employers have until 1st May 2025 to implement the rates, and, for a 37.5-hour week, the new LLW represents an annual salary of £27,007.
              </p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
                <h4 className="font-semibold text-amber-800 mb-2">Strategic Considerations</h4>
                <ul className="list-disc list-inside space-y-2 text-amber-700">
                  <li>Need to maintain pay differentials between grades</li>
                  <li>Ripple effects through pay structures</li>
                  <li>Balance between statutory compliance and voluntary commitment</li>
                  <li>Regional variations (London vs outside London)</li>
                  <li>Affordability constraints for smaller organisations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SUPPORTING DATA VISUALIZATIONS - ALL VISUALS AFTER TEXT CONTENT */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-chart-5 rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">Supporting Data Analysis</h2>
        </div>

        {/* Summary KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="NLW Impact"
            value={44}
            format="percentage"
            description="Organisations affected by increase"
            tooltip="44% of organisations report being impacted by the National Living Wage increase to £12.21"
          />
          
          <KPICard
            title="RLW Adoption"
            value={89}
            format="percentage"
            description="Adopted or planning Real/London Living Wage"
            tooltip="89% have adopted or are planning to adopt Real Living Wage or London Living Wage"
          />
          
          <KPICard
            title="Pay Structure Impact"
            value={33}
            format="percentage"
            description="Differential impact on grades"
            tooltip="33% report NLW increase impacts differential between lower and higher graded staff"
          />
          
          <KPICard
            title="Strategic Response"
            value={44}
            format="percentage"
            description="Exploring strategic responses"
            tooltip="44% are exploring strategic responses including pay structure reviews"
          />
        </div>

        {/* Wage Rates Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Wage Rate Comparison 2024-2025</CardTitle>
            <CardDescription>Current rates and April 2025 increases across different wage standards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {wageRatesData.map((wage, index) => (
                <div key={wage.type} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-lg border bg-card">
                  <div>
                    <h4 className="font-medium text-sm">{wage.type}</h4>
                    <p className="text-xs text-muted-foreground">{wage.description || 'Statutory minimum'}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold">£{wage.current}</p>
                    <p className="text-xs text-muted-foreground">Current Rate</p>
                  </div>
                  {wage.april2025 && (
                    <>
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary">£{wage.april2025}</p>
                        <p className="text-xs text-muted-foreground">April 2025</p>
                      </div>
                      <div className="text-center">
                        <Badge variant={wage.increase >= 6 ? "destructive" : "secondary"}>
                          +{wage.increase}%
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">Increase</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-l-primary">
              <h4 className="font-medium mb-2">Annual Salary Impact (37.5 hour week)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>National Living Wage:</strong> £23,809 annually (April 2025)</p>
                  <p><strong>London Living Wage:</strong> £27,007 annually (April 2025)</p>
                </div>
                <div className="text-muted-foreground">
                  <p>Implementation deadline: 1st May 2025</p>
                  <p>Affects pay structures across all levels</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact Analysis Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartContainer
            title="Organisational Impact of NLW Increase"
            data={nlwImpactData}
            type="pie"
            description="Proportion of organisations affected by National Living Wage increase"
            height={300}
          />
          
          <ChartContainer
            title="Impact on Pay Differentials"
            data={differentialImpactData}
            type="pie"
            description="Whether NLW increase affects differential between grade levels"
            height={300}
          />
        </div>

        {/* Strategic Response Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Strategic Responses to NLW Increase</CardTitle>
              <CardDescription>How organisations are responding to wage policy changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {strategiesData.map((strategy, index) => (
                  <div key={strategy.strategy} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{strategy.strategy}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{strategy.count} organisations</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={index === 0 ? "secondary" : "default"}>
                        {strategy.percentage}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                <h4 className="font-medium text-sm mb-2">Strategic Response Details</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Pay structure reviews to maintain grade differentials</li>
                  <li>• Adjusting grades above NLW to preserve pay gaps</li>
                  <li>• RLW employers focusing on broader impact assessment</li>
                  <li>• Balancing statutory compliance with voluntary commitments</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Living Wage Adoption Patterns</CardTitle>
              <CardDescription>Real Living Wage and London Living Wage implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <ChartContainer
                  title="Living Wage Adoption Status"
                  data={livingWageAdoptionData}
                  type="bar"
                  description="Current adoption and planning status for Real Living Wage standards"
                  height={200}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg border">
                    <div className="text-2xl font-bold text-primary mb-1">8/9</div>
                    <div className="text-xs text-muted-foreground">Organisations committed to RLW/LLW</div>
                  </div>
                  
                  <div className="text-center p-4 bg-chart-3/10 rounded-lg border">
                    <div className="text-2xl font-bold text-chart-3 mb-1">6/8</div>
                    <div className="text-xs text-muted-foreground">London orgs adopting LLW</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Key Findings Summary
            </CardTitle>
            <CardDescription>Strategic insights from National Living Wage analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  Organisational Impact
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 56% of organisations not directly impacted due to RLW commitment</li>
                  <li>• Even RLW employers face structural pay challenges</li>
                  <li>• London-based organisations show higher adoption of premium wage standards</li>
                  <li>• Pay structure reviews needed to maintain grade differentials</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <Users className="h-4 w-4 text-chart-3" />
                  Sector Trends
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Strong commitment to living wage principles across the sector</li>
                  <li>• Proactive approach to wage policy changes</li>
                  <li>• Strategic balance between affordability and fair pay</li>
                  <li>• Regional variations in implementation approach</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-amber-800 mb-1">Looking Ahead</h4>
                  <p className="text-sm text-amber-700">
                    The 6% increase in National Living Wage represents a significant shift affecting pay structures 
                    across the housing association sector. While most organisations are committed to living wage 
                    principles, strategic planning is essential to maintain fair pay differentials and organisational sustainability.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}