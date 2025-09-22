import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ChartContainer from "@/components/ChartContainer";
import KPICard from "@/components/KPICard";
import { benefitsSummary } from "@shared/sampleData";
import { Calendar, Heart, Umbrella, Users, Baby } from "lucide-react";

export default function Benefits() {
  const benefitsData = [
    { name: 'Healthcare Benefits', value: 67 },
    { name: 'Buy/Sell Leave', value: 44 },
    { name: 'Enhanced Maternity', value: 33 },
    { name: 'Life Assurance', value: 78 },
    { name: 'EAP Programs', value: 89 }
  ];

  const holidayData = [
    { name: '20-24 days', value: 22 },
    { name: '25 days', value: 56 },
    { name: '26-29 days', value: 17 },
    { name: '30+ days', value: 5 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Core Benefits</h1>
        <p className="text-muted-foreground">
          Comprehensive overview of benefits packages across housing associations
        </p>
      </div>

      {/* Benefits Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Starting Annual Leave"
          value={benefitsSummary.holiday_start_days}
          description="Most common starting entitlement"
          tooltip="25 days is the most common starting annual leave entitlement"
        />
        
        <KPICard
          title="Maximum Annual Leave"
          value={benefitsSummary.holiday_max_days}
          description="Typical maximum entitlement"
          tooltip="30 days is the typical maximum annual leave after service progression"
        />
        
        <KPICard
          title="Buy/Sell Leave"
          value={44}
          format="percentage"
          description="Organizations offering flexibility"
          tooltip="44% of organizations offer buy/sell leave arrangements"
        />
        
        <KPICard
          title="Healthcare Benefits"
          value={67}
          format="percentage"
          description="Organizations providing healthcare"
          tooltip="67% provide healthcare benefits including cash plans, PMI, and eye tests"
        />
      </div>

      {/* Benefits Breakdown Tabs */}
      <Tabs defaultValue="holiday" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="holiday" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Holiday
          </TabsTrigger>
          <TabsTrigger value="pension" className="flex items-center gap-2">
            <Umbrella className="h-4 w-4" />
            Pension
          </TabsTrigger>
          <TabsTrigger value="sickness" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Sickness
          </TabsTrigger>
          <TabsTrigger value="wellbeing" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Wellbeing
          </TabsTrigger>
          <TabsTrigger value="family" className="flex items-center gap-2">
            <Baby className="h-4 w-4" />
            Family
          </TabsTrigger>
        </TabsList>

        <TabsContent value="holiday" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Holiday Entitlements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Starting Entitlement</span>
                      <Badge variant="secondary">25 days (most common)</Badge>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Maximum Entitlement</span>
                      <Badge variant="secondary">30 days (typical)</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Buy/Sell Arrangements</span>
                      <Badge variant="outline">44% offer</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <ChartContainer
              title="Holiday Entitlement Distribution"
              data={holidayData}
              type="pie"
              description="Distribution of starting holiday entitlements"
              height={250}
            />
          </div>
        </TabsContent>

        <TabsContent value="pension" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pension Arrangements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    100% DC Pensions
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    All organizations offer defined contribution pensions
                  </span>
                </div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="matching">
                    <AccordionTrigger>Employer Matching</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Standard matching up to 6% employee contribution</li>
                        <li>• Some organizations offer enhanced matching up to 7.5-8%</li>
                        <li>• Auto-enrollment at minimum statutory rates (3% employer, 5% employee)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="providers">
                    <AccordionTrigger>Pension Providers</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Mix of major pension providers including NEST, Aviva, Legal & General</li>
                        <li>• Some organizations offer choice of funds and investment options</li>
                        <li>• Annual pension reviews and employee education sessions common</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sickness" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sickness Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <div className="text-2xl font-bold text-sidebar-primary">6 weeks</div>
                    <div className="text-sm text-muted-foreground">Median full pay</div>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <div className="text-2xl font-bold text-sidebar-primary">6 weeks</div>
                    <div className="text-sm text-muted-foreground">Median half pay</div>
                  </div>
                </div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="entitlements">
                    <AccordionTrigger>Typical Entitlements</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Statutory sick pay minimum for all employees</li>
                        <li>• Enhanced schemes typically offer 6 weeks full pay, 6 weeks half pay</li>
                        <li>• Maximum often increases to 13 + 13 weeks after length of service</li>
                        <li>• Return-to-work support and occupational health referrals common</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wellbeing" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Healthcare & Wellbeing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Health Cash Plans</span>
                    <Badge variant="secondary">Common</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Private Medical Insurance</span>
                    <Badge variant="secondary">Selective</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Eye Care</span>
                    <Badge variant="secondary">Widespread</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Life Assurance</span>
                    <Badge variant="secondary">78%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Critical Illness</span>
                    <Badge variant="outline">Some orgs</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <ChartContainer
              title="Benefits Adoption"
              data={benefitsData}
              type="bar"
              description="Percentage of organizations offering each benefit"
              height={250}
            />
          </div>
        </TabsContent>

        <TabsContent value="family" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Family-Friendly Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="maternity">
                  <AccordionTrigger>Maternity & Paternity</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Enhanced maternity leave offered by some organizations</li>
                      <li>• Paternity leave typically follows statutory minimums</li>
                      <li>• Shared parental leave arrangements increasingly available</li>
                      <li>• Return-to-work support including flexible hours and phased returns</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="flexible">
                  <AccordionTrigger>Flexible Working</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Home working policies established post-pandemic</li>
                      <li>• Flexible hours and compressed working weeks available</li>
                      <li>• Job sharing arrangements for suitable roles</li>
                      <li>• Term-time working in some organizations</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}