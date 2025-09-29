import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChartContainer from "@/components/ChartContainer";
import KPICard from "@/components/KPICard";
import { detailedPayFrameworks } from "@shared/sampleData";
import { BarChart3, Building, Users, MapPin } from "lucide-react";

export default function PayFrameworks() {
  const frameworkData = detailedPayFrameworks.map(framework => ({
    name: framework.framework_type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()),
    value: framework.prevalence_pct,
    london: framework.by_location.london_pct,
    outside_london: framework.by_location.outside_london_pct
  }));

  const locationData = [
    { name: 'London', value: 100, paySpine: 60, broadBanded: 15, jobFamilies: 15, marketRanges: 10 },
    { name: 'Outside London', value: 100, paySpine: 30, broadBanded: 30, jobFamilies: 25, marketRanges: 15 }
  ];

  const sizeData = [
    { name: '<250 Employees', value: 100, paySpine: 35, broadBanded: 30, jobFamilies: 20, marketRanges: 15 },
    { name: '250+ Employees', value: 100, paySpine: 55, broadBanded: 15, jobFamilies: 25, marketRanges: 5 }
  ];

  return (
    <div className="space-y-8">
      {/* Professional Header */}
      <div className="bg-primary/5 rounded-xl p-8 border border-primary/20 shadow-xl" data-testid="frameworks-header">
        <div className="flex items-center gap-4 mb-4">
          <BarChart3 className="h-10 w-10 text-primary" />
          <div>
            <h1 className="text-4xl font-bold text-primary tracking-tight">Pay Frameworks</h1>
            <p className="text-xl text-foreground mt-2">
              Analysis of pay structures and frameworks across housing associations
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
            <h2 className="text-2xl font-bold text-foreground">Pay Structure Overview</h2>
          </div>
          
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <p className="mb-6">
                In this section we look at the types of pay structures and pay progression found amongst participants. In addition to geography, we have also analysed the data by headcount, as smaller organisations often have different frameworks than larger organisations.
              </p>
              
              <p className="mb-6">
                Firstly, we asked how respondents would describe their pay structure. Responses were varied as participants could choose from multiple answers. The most common of which was a pay spine and a broad-banded structure, with overlap for market testing, job families and benchmarking. The breakdown can be seen below.
              </p>
            </div>
          </div>
        </div>

        {/* Complete Pay Structure Breakdown Tables - Text Based */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-chart-2 rounded-full"></div>
            <h2 className="text-2xl font-bold text-foreground">Breakdown of Pay Structure According to Organisational Location</h2>
          </div>
          
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border p-4 text-left font-semibold">Framework Type</th>
                      <th className="border border-border p-4 text-center font-semibold">Total Answered (9)</th>
                      <th className="border border-border p-4 text-center font-semibold">Operate Both Inside & Outside London (6)</th>
                      <th className="border border-border p-4 text-center font-semibold">Only Inside Greater London (2)</th>
                      <th className="border border-border p-4 text-center font-semibold">Only Outside Greater London (1)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-4 font-medium">Narrow graded</td>
                      <td className="border border-border p-4 text-center">1</td>
                      <td className="border border-border p-4 text-center">1</td>
                      <td className="border border-border p-4 text-center">0</td>
                      <td className="border border-border p-4 text-center">0</td>
                    </tr>
                    <tr className="bg-muted/25">
                      <td className="border border-border p-4 font-medium">Broad-banded</td>
                      <td className="border border-border p-4 text-center">3</td>
                      <td className="border border-border p-4 text-center">1</td>
                      <td className="border border-border p-4 text-center">1</td>
                      <td className="border border-border p-4 text-center">1</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4 font-medium">Job family</td>
                      <td className="border border-border p-4 text-center">2</td>
                      <td className="border border-border p-4 text-center">1</td>
                      <td className="border border-border p-4 text-center">0</td>
                      <td className="border border-border p-4 text-center">1</td>
                    </tr>
                    <tr className="bg-muted/25">
                      <td className="border border-border p-4 font-medium">Pay spine</td>
                      <td className="border border-border p-4 text-center">4</td>
                      <td className="border border-border p-4 text-center">3</td>
                      <td className="border border-border p-4 text-center">1</td>
                      <td className="border border-border p-4 text-center">0</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4 font-medium">Market spot salaries/ranges</td>
                      <td className="border border-border p-4 text-center">3</td>
                      <td className="border border-border p-4 text-center">2</td>
                      <td className="border border-border p-4 text-center">0</td>
                      <td className="border border-border p-4 text-center">1</td>
                    </tr>
                    <tr className="bg-muted/25">
                      <td className="border border-border p-4 font-medium">Other</td>
                      <td className="border border-border p-4 text-center">1</td>
                      <td className="border border-border p-4 text-center">1</td>
                      <td className="border border-border p-4 text-center">0</td>
                      <td className="border border-border p-4 text-center">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mb-4 text-sm italic">Note: respondents could choose more than one answer.</p>
            </div>
          </div>
        </div>

        {/* Pay Structure by Organisational Size */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-chart-3 rounded-full"></div>
            <h2 className="text-2xl font-bold text-foreground">Breakdown of Pay Structure According to Organisational Size</h2>
          </div>
          
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border p-4 text-left font-semibold">Framework Type</th>
                      <th className="border border-border p-4 text-center font-semibold">Total Answered (9)</th>
                      <th className="border border-border p-4 text-center font-semibold">&lt;250 Employees (3)</th>
                      <th className="border border-border p-4 text-center font-semibold">250&lt; Employees (6)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-4 font-medium">Narrow graded</td>
                      <td className="border border-border p-4 text-center">1</td>
                      <td className="border border-border p-4 text-center">0</td>
                      <td className="border border-border p-4 text-center">1</td>
                    </tr>
                    <tr className="bg-muted/25">
                      <td className="border border-border p-4 font-medium">Broad-banded</td>
                      <td className="border border-border p-4 text-center">3</td>
                      <td className="border border-border p-4 text-center">2</td>
                      <td className="border border-border p-4 text-center">1</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4 font-medium">Job family</td>
                      <td className="border border-border p-4 text-center">2</td>
                      <td className="border border-border p-4 text-center">1</td>
                      <td className="border border-border p-4 text-center">1</td>
                    </tr>
                    <tr className="bg-muted/25">
                      <td className="border border-border p-4 font-medium">Pay spine</td>
                      <td className="border border-border p-4 text-center">4</td>
                      <td className="border border-border p-4 text-center">0</td>
                      <td className="border border-border p-4 text-center">4</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4 font-medium">Market spot salaries/ranges</td>
                      <td className="border border-border p-4 text-center">3</td>
                      <td className="border border-border p-4 text-center">2</td>
                      <td className="border border-border p-4 text-center">1</td>
                    </tr>
                    <tr className="bg-muted/25">
                      <td className="border border-border p-4 font-medium">Other</td>
                      <td className="border border-border p-4 text-center">1</td>
                      <td className="border border-border p-4 text-center">0</td>
                      <td className="border border-border p-4 text-center">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mb-6">
                With the caveat that the sample size is relatively small, we can still break down these answers by location and organisational size. Pay spine and market-based pay structures are more popular among organisations operating or based within Greater London and with organisations that have larger headcounts.
              </p>
            </div>
          </div>
        </div>

        {/* Pay Structure Against the Market */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-chart-4 rounded-full"></div>
            <h2 className="text-2xl font-bold text-foreground">Pay Structure Against the Market</h2>
          </div>
          
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <p className="mb-6">
                Six of nine participants were able to provide an estimation for where their organisation aims to set pay against the market. Four of these respondents had the median as the target, one organisation set the housing sector at the median but all other sectors at the lower quartile, while the final organisation aims for the upper quartile for front-line roles and the median for leadership and specialist roles.
              </p>
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

        {/* Framework Statistics KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Pay Spine"
            value={44}
            format="percentage"
            description="Most common structure"
            tooltip="44% of organizations use pay spine frameworks"
          />
          
          <KPICard
            title="Broad-Banded"
            value={33}
            format="percentage" 
            description="Flexible pay ranges"
            tooltip="33% use broad-banded structures for role flexibility"
          />
          
          <KPICard
            title="Job Families"
            value={22}
            format="percentage"
            description="Specialist groupings"
            tooltip="22% organize roles into job families with career pathways"
          />
          
          <KPICard
            title="Market Ranges"
            value={33}
            format="percentage"
            description="Market-driven approach"
            tooltip="33% use market spot salaries and ranges"
          />
        </div>

        {/* Framework Analysis Charts */}
        <Tabs defaultValue="structure" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="structure" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Structure Types
            </TabsTrigger>
            <TabsTrigger value="location" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              By Location
            </TabsTrigger>
            <TabsTrigger value="size" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              By Size
            </TabsTrigger>
          </TabsList>

          <TabsContent value="structure" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartContainer
                title="Framework Prevalence"
                data={frameworkData}
                type="bar"
                description="Distribution of pay framework types across organisations"
                height={300}
              />
              
              <Card>
                <CardHeader>
                  <CardTitle>Framework Characteristics</CardTitle>
                  <CardDescription>Key features of each framework type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {detailedPayFrameworks.map((framework, index) => (
                      <div key={framework.framework_type} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium capitalize">
                            {framework.framework_type.replace('_', ' ')}
                          </h4>
                          <Badge variant={
                            framework.market_positioning === 'above' ? 'default' :
                            framework.market_positioning === 'at' ? 'secondary' : 
                            'outline'
                          }>
                            {framework.market_positioning === 'above' ? 'Above Market' :
                             framework.market_positioning === 'at' ? 'At Market' :
                             framework.market_positioning === 'mixed' ? 'Mixed Position' : 'Below Market'}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {framework.characteristics.map((char, charIndex) => (
                            <Badge key={charIndex} variant="outline" className="text-xs">
                              {char}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="location" className="space-y-6">
            <ChartContainer
              title="Framework Distribution by Geographic Location"
              data={locationData}
              type="bar"
              multiSeries={true}
              seriesKeys={['paySpine', 'broadBanded', 'jobFamilies', 'marketRanges']}
              description="How different pay frameworks are adopted across geographic regions"
              height={400}
            />
          </TabsContent>

          <TabsContent value="size" className="space-y-6">
            <ChartContainer
              title="Framework Distribution by Organizational Size"
              data={sizeData}
              type="bar"
              multiSeries={true}
              seriesKeys={['paySpine', 'broadBanded', 'jobFamilies', 'marketRanges']}
              description="How organizational size influences pay framework adoption"
              height={350}
            />
          </TabsContent>
        </Tabs>

        {/* Market Positioning Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Market Positioning Summary</CardTitle>
            <CardDescription>How organisations position their pay against market benchmarks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-primary/5 rounded-xl border">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-sm font-medium text-foreground">Organizations</div>
                <div className="text-xs text-muted-foreground mt-1">Target Market Median</div>
              </div>
              
              <div className="text-center p-6 bg-chart-2/10 rounded-xl border">
                <div className="text-3xl font-bold text-chart-2 mb-2">1</div>
                <div className="text-sm font-medium text-foreground">Organization</div>
                <div className="text-xs text-muted-foreground mt-1">Mixed Approach (Housing median, Other sectors LQ)</div>
              </div>
              
              <div className="text-center p-6 bg-chart-3/10 rounded-xl border">
                <div className="text-3xl font-bold text-chart-3 mb-2">1</div>
                <div className="text-sm font-medium text-foreground">Organization</div>
                <div className="text-xs text-muted-foreground mt-1">UQ front-line, Median leadership</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}