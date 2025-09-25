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
    <div className="space-y-8">
      {/* Professional Header */}
      <div className="bg-gradient-to-r from-primary/10 to-chart-5/10 rounded-xl p-8 border border-primary/20 shadow-lg" data-testid="benefits-header">
        <h1 className="text-4xl font-bold text-foreground mb-4 tracking-tight">Core Benefits</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive overview of benefits packages across housing associations
        </p>
      </div>

      {/* Introduction */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-primary rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">Benefits Overview</h2>
        </div>
        
        <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            <p className="mb-4">
              We were interested in finding out whether organisations had recently reviewed any of their benefits or wider terms and conditions, as well as whether they were planning to do so in the near future.
            </p>
            
            <p className="mb-4">
              We asked participants what wellbeing benefits their organisations currently offer. Seven of nine (78%) were able to respond with varying degrees of detail. Of those who responded, all provide some form of access to Employee Assistance Programmes (EAP), which is often paired with counselling services, wellbeing days, and access to reflective practice.
            </p>
            
            <p className="mb-4">
              Some organisations offer additional support such as private health insurance, health cashback schemes, and life assurance. Financial wellbeing tools are also prominent, including salary advances and affordable loans. Other notable benefits include occupational health services, wellbeing toolkits, workplace supporter schemes, and access to discounts on gym memberships. Six out of nine organisations also offer retail discount vouchers as part of their benefits package.
            </p>
            
            <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-l-primary my-6">
              <h4 className="font-semibold text-foreground mb-2">Healthcare Benefits</h4>
              <p className="mb-3">
                Eight participants responded to the question of whether they offer healthcare benefits to staff, six of which stating that they do. With respect to these healthcare benefits, four organisations provide some form of medical insurance. Other benefits provided amongst organisations include free eye tests, and health cash plans for all employees.
              </p>
            </div>
            
            <div className="bg-chart-2/10 rounded-lg p-6 border-l-4 border-l-chart-2 my-6">
              <h4 className="font-semibold text-foreground mb-2">Additional Benefits</h4>
              <p className="mb-3">
                Five out of the nine respondents (56%) also offer some form of flexible working beyond the statutory requirements. This varies from one organisation having a fully agile working policy (which allows staff to have choice about where, when and how work takes place) to other organisations offering hybrid working systems that allows staff to work remotely for up to three days a week.
              </p>
              
              <p>
                When asking participants if they are planning on reviewing benefits over the next 12 months only two of nine (22%) commented that they would. Of these, one commented that they are always reviewing benefits as part of their ongoing wellbeing consideration, while the other will be specifically assessing their maternity/paternity and family friendly leave schemes.
              </p>
            </div>
          </div>
        </div>
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

        <TabsContent value="holiday" className="space-y-6">
          {/* Holiday Section - Text First */}
          <div className="space-y-6">
            <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
              <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
                <h3 className="text-xl font-bold text-foreground mb-4">Starting Annual Leave Entitlement</h3>
                <p className="mb-4">
                  In this year's survey, we examined the starting annual leave entitlement provided by the nine participating organisations, excluding the eight days of statutory bank holiday entitlement.
                </p>
                
                <p className="mb-4">
                  The responses show that 25 days remains the most common starting allowance, which is offered by six organisations. Two organisations offer 28 days, and one organisation provides 29 days.
                </p>
                
                <p className="mb-6">
                  Compared with the previous year's survey – where eight organisations participated – the range of holiday entitlements has remained consistent, with 25 days still the most frequently reported starting allowance. This year, however, there is slightly more diversity with the introduction of milestone leave policies by one organisation and the inclusion of 26 days by another.
                </p>
                
                <h3 className="text-xl font-bold text-foreground mb-4">Maximum Annual Leave Entitlement</h3>
                <p className="mb-4">
                  We also examined whether organisations offer increases in annual leave entitlement based on length of service. Of the nine organisations surveyed, only two (22%) provide a fixed holiday allowance with no increases for tenure, offering 25 and 29 days respectively. The remaining seven organisations (78%) offer some form of service-based progression, where holiday entitlement increases incrementally over time.
                </p>
                
                <p className="mb-4">
                  These responses reveal that five organisations provide a maximum of 30 days annual leave, with most using incremental increases over a set period to reach this entitlement.
                </p>
                
                <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-l-primary my-6">
                  <h4 className="font-semibold text-foreground mb-2">Service Progression Examples</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Two organisations increase leave by one day per year for the first five years of service</li>
                    <li>Another reaches 30 days after ten years of service</li>
                    <li>One organisation allows employees to accrue an additional day each April, starting the April after passing probation, until 30 days are reached after at least 4.5 years of service</li>
                    <li>One organisation offers up to 28 days; service-based progression adds one day per year until the cap is reached</li>
                    <li>Another provides 31 days of leave, effective from the April following an employee's fifth year of service</li>
                  </ul>
                </div>
                
                <p className="mb-6">
                  Compared to the 2023/24 SHHR Report, where 65% of organisations offered a maximum of 30 days, this year's results show the continued prevalence of 30 days as the most common cap, although there is greater variety in how and when organisations implement progression policies. These findings underscore a trend towards rewarding employee loyalty with additional annual leave.
                </p>
                
                <h3 className="text-xl font-bold text-foreground mb-4">Additional Holiday Allowance</h3>
                <p className="mb-4">
                  In addition to general holiday entitlement, we also asked organisations whether they provide any extra holiday allowances for staff. The majority (78%) reported that they do not offer additional holiday arrangements.
                </p>
                
                <p className="mb-6">
                  Two organisations (22%) indicated they provide extra holiday benefits: one offers staff a day off for their birthday, while the other grants additional leave for long service milestones (awarding one extra day in the 10th, 20th, and 30th years of service). These additional days are not consolidated into the standard annual leave entitlement: they are only granted in the relevant milestone year.
                </p>
                
                <h3 className="text-xl font-bold text-foreground mb-4">Buying/Selling Annual Leave</h3>
                <p className="mb-4">
                  To complete our understanding of participants' holiday benefits, we also gathered information on policies for buying and selling annual leave. This year's responses show that 44% of organisations surveyed offer some form of buy and sell policy, while the remaining 56% do not.
                </p>
                
                <p className="mb-4">
                  Of the organisations that provide this benefit, two allow employees to buy or sell up to five days of leave annually, with pro-rata arrangements for part-time staff. One organisation offers a more flexible policy, permitting employees to sell one week of leave per year and purchase one, two, or three weeks. Additionally, one organisation does not currently offer this policy but plans to implement it in the next leave year.
                </p>
                
                <div className="bg-chart-2/10 rounded-lg p-6 border-l-4 border-l-chart-2">
                  <h4 className="font-semibold text-foreground mb-2">Significant Growth Trend</h4>
                  <p>
                    We found that almost half of the organisations within this sample now provide buy and sell policies. This indicates a significant increase in the provision of flexible holiday arrangements compared to previous years. In the 2022/2023 report, only 25% of organisations offered such policies: this has almost doubled to 44% this year. This trend is further supported by the fact that some organisations are planning to implement these policies in the near future, which suggests flexible holiday options may become a more prominent feature of employee benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Holiday Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Holiday Entitlements Summary</CardTitle>
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

        <TabsContent value="pension" className="space-y-6">
          {/* Pension Section - Text First */}
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <h3 className="text-xl font-bold text-foreground mb-4">Pension Contributions</h3>
              <p className="mb-4">
                As in the two previous SHHR reports, all participating organisations in this group offered Defined Contribution pension schemes. However, the contribution rates and policies varied significantly.
              </p>
              
              <p className="mb-6">
                While many align with the standard 8% joint contribution (3% employer, 5% employee), several organisations provide enhanced flexibility and matching schemes. For example, one organisation matches employee contributions up to 7.5%, while another offers up to 8% with a minimum employee contribution of 4%. Some schemes include stepped increases, such as raising employer contributions from 3% to 6% after probation, or tailored arrangements for senior management, matching contributions up to 6%. These findings highlight growing efforts to incentivise employee savings through enhanced contributions.
              </p>
            </div>
          </div>
          
          {/* Pension Summary Card */}
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
                    <AccordionTrigger>Enhanced Employer Matching</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm">
                        <li>• One organisation matches employee contributions up to 7.5%</li>
                        <li>• Another offers up to 8% with a minimum employee contribution of 4%</li>
                        <li>• Some include stepped increases (3% to 6% after probation)</li>
                        <li>• Tailored arrangements for senior management (matching up to 6%)</li>
                        <li>• Standard 8% joint contribution (3% employer, 5% employee) common</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="providers">
                    <AccordionTrigger>Pension Providers & Features</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Mix of major pension providers including NEST, Aviva, Legal & General</li>
                        <li>• Some organizations offer choice of funds and investment options</li>
                        <li>• Annual pension reviews and employee education sessions common</li>
                        <li>• Growing efforts to incentivise employee savings through enhanced contributions</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sickness" className="space-y-6">
          {/* Sickness Section - Text First */}
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <h3 className="text-xl font-bold text-foreground mb-4">Sickness Arrangements</h3>
              <p className="mb-4">
                We explored sick pay arrangements across all participating organisations, focusing on what new employees receive upon joining, whether they are offered Statutory Sick Pay (SSP) or Occupational Sick Pay (OSP), and how entitlements increase with continuous service. All nine organisations provided details of their policies.
              </p>
              
              <p className="mb-4">
                This year, five organisations (56%) reported providing SSP during their probationary periods, which typically lasts between three and six months. Once probation is successfully completed, these organisations transition to offering OSP, with entitlements increasing based on length of service. The remaining four organisations (44%) offer some level of OSP immediately upon joining, though the amount varies.
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-l-primary my-6">
                <h4 className="font-semibold text-foreground mb-2">Probationary Period Arrangements</h4>
                <p className="mb-3">
                  During probation, some organisations provide between five and ten days of full pay, while others specify rolling entitlements, such as 78 hours of full pay during the first nine months.
                </p>
              </div>
              
              <p className="mb-4">
                Post-probation, OSP entitlements in the first year of service generally range between two and four weeks of full pay, sometimes supplemented by half pay. As length of service increases, entitlements grow incrementally, with several organisations offering up to 13 weeks of full pay and 13 weeks of half pay after two or more years of continuous service. One organisation offers a stepped increase over five years, with entitlements reaching eight weeks of full pay and eight weeks of half pay.
              </p>
              
              <div className="bg-chart-2/10 rounded-lg p-6 border-l-4 border-l-chart-2 my-6">
                <h4 className="font-semibold text-foreground mb-2">Median for OSP</h4>
                <p className="mb-3">
                  The median for full pay arrangements in Occupational Sick Pay (OSP) is now six weeks, while the median for half pay arrangements is six weeks as well. The mean average for full pay is 7.9 weeks, and the mean for half pay is 7.8 weeks, reflecting slightly more variability in individual arrangements compared to the median.
                </p>
                
                <p>
                  The average length of service required to qualify for maximum OSP entitlements is two years, with many organisations offering incremental increases tied to tenure. Maximum OSP entitlements typically peak at 13 weeks of full pay and 13 weeks of half pay after at least two years of continuous service, with some organisations adopting rolling 12-month calculations to determine eligibility.
                </p>
              </div>
              
              <p className="mb-4">
                If we compare this to the data in our previous report, the trends remain broadly consistent. In the previous report, 50% of organisations provided OSP immediately upon joining, whilst the other half started with SSP and transitioned to OSP post-probation. Incremental increases based on service were also a common feature within the last report (2022/23), as they are now, demonstrating a consistent approach to rewarding employee loyalty.
              </p>
              
              <p>
                In the previous report, the median for both full pay and half pay arrangements under Occupational Sick Pay (OSP) was 12 weeks, with the mean average for both also identical at 9.6 weeks.
              </p>
            </div>
          </div>
          
          {/* Sickness Summary Card */}
          <Card>
            <CardHeader>
              <CardTitle>Sickness Benefits Summary</CardTitle>
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
                    <AccordionTrigger>Detailed Entitlements</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm">
                        <li>• 56% provide SSP during probation (3-6 months), then transition to OSP</li>
                        <li>• 44% offer some OSP immediately upon joining</li>
                        <li>• First year: typically 2-4 weeks full pay, sometimes with half pay supplement</li>
                        <li>• Maximum entitlements: 13 weeks full pay + 13 weeks half pay after 2+ years</li>
                        <li>• Mean average: 7.9 weeks full pay, 7.8 weeks half pay</li>
                        <li>• Rolling 12-month calculations common for eligibility</li>
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

        <TabsContent value="family" className="space-y-6">
          {/* Family Section - Text First */}
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <h3 className="text-xl font-bold text-foreground mb-4">Maternity/Paternity Leave</h3>
              <p className="mb-4">
                The responses regarding maternity and paternity leave policies varied across our sample. Five of nine were able to outline the details of their organisation's policies:
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-l-primary my-6">
                <h4 className="font-semibold text-foreground mb-2">Maternity Leave Examples</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>One organisation offers 13 weeks full pay, followed by 13 weeks half pay and 13 weeks Statutory Maternity Pay (SMP)</li>
                  <li>Another provides a more generous entitlement of 16 weeks full pay, 24 weeks half pay, and 12 weeks unpaid leave</li>
                  <li>One organisation offers enhanced pay (40% of average weekly earnings) during weeks seven to 26 of ordinary leave, on top of SMP, provided employees meet eligibility criteria and commit to returning to work for at least three months</li>
                </ul>
              </div>
              
              <div className="bg-chart-2/10 rounded-lg p-6 border-l-4 border-l-chart-2 my-6">
                <h4 className="font-semibold text-foreground mb-2">Paternity Leave Examples</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>One organisation provides two weeks full pay</li>
                  <li>Another offers full pay for the first week and Statutory Paternity Pay (SPP) for the second week</li>
                  <li>One of the organisations also aligned similar policies for parental leave and adoption</li>
                </ul>
              </div>
              
              <p className="mb-6">
                Overall, while statutory provisions form the baseline, some organisations offer enhanced maternity and paternity pay to provide additional financial support during parental leave.
              </p>
            </div>
          </div>
          
          {/* Family Summary Card */}
          <Card>
            <CardHeader>
              <CardTitle>Family-Friendly Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="maternity">
                  <AccordionTrigger>Enhanced Maternity & Paternity</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Most generous: 16 weeks full pay, 24 weeks half pay, 12 weeks unpaid</li>
                      <li>• Common: 13 weeks full pay, 13 weeks half pay, then SMP</li>
                      <li>• Enhanced rates: 40% of average weekly earnings on top of SMP</li>
                      <li>• Paternity: typically 2 weeks full pay or 1 week full + 1 week SPP</li>
                      <li>• Some organisations align adoption policies with maternity/paternity</li>
                      <li>• Return-to-work commitments often required (minimum 3 months)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="flexible">
                  <AccordionTrigger>Flexible Working Arrangements</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li>• 56% offer flexible working beyond statutory requirements</li>
                      <li>• Fully agile working policies (choice of where, when, how work takes place)</li>
                      <li>• Hybrid working systems (up to 3 days remote per week)</li>
                      <li>• Home working policies established post-pandemic</li>
                      <li>• Flexible hours and compressed working weeks available</li>
                      <li>• Job sharing arrangements for suitable roles</li>
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