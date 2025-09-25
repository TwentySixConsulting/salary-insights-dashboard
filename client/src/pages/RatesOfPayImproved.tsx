import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { roleRates } from "@shared/sampleData";
import { Search, Info, Download, MapPin, Users, BarChart3 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Group roles by category for better organisation
const roleCategories = {
  "Entry Level": ["Support Worker", "Relief Support Worker", "Night Worker", "Night Assistant/Concierge", "Cook/Chef"],
  "Specialist Support": ["Support Worker - Specialist", "Activities Worker/Coordinator", "Specialist Advice Workers", "Resettlement Worker", "IDVA/IDVSA", "Navigator"],
  "Administrative": ["Housing Management Assistant", "Service Co-ordinator"],
  "Management": ["Deputy/Assistant Scheme Manager", "Scheme Manager", "Service Manager", "Operations Manager", "Senior Manager"],
  "Executive": ["Deputy Chief Executive", "Chief Executive"]
};

// Job grouping type definition
type JobGrouping = {
  title: string;
  description: string;
  detail?: string;
};

// Job groupings with descriptions from SSHR report
const jobGroupingDefinitions: Record<string, JobGrouping[]> = {
  "Entry Level Roles": [
    {
      title: "Entry level: Typically called Assistant or Trainee",
      description: "All support-based entry level roles sit in here."
    },
    {
      title: "Night Assistant/Concierge", 
      description: "All straight-forward night roles sit in here."
    },
    {
      title: "Cook/Chef",
      description: "We have grouped together all Cooks/Chefs here."
    }
  ],
  "Front-Line Support Roles": [
    {
      title: "Support/Project Worker (Main Grade)",
      description: "Regardless of job title, all front-line support-based worker roles (except Housing) sit in here. This includes all specialisms that sat within the main front line grade for each participant.",
      detail: "For example, it includes both floating and project-based support. We looked at each sub-category of role (e.g., mental health) to see whether we could see groupings with noticeable pay differentials that we could pull out – where roles were paid at a higher salary, they were placed into the job grouping below."
    },
    {
      title: "Night Worker",
      description: "All support-based Night roles sit in here."
    },
    {
      title: "Senior Support/Specialist/Complex Needs Worker",
      description: "All senior/complex support-based roles sit in this grouping."
    },
    {
      title: "Outreach Worker",
      description: "All roles with Outreach Worker in their job title are placed in here."
    }
  ],
  "Housing & Specialist Services": [
    {
      title: "Housing Advice/Tenancy Sustainment/Housing Support Worker",
      description: "Within this group, we put all support/advice worker housing-related roles."
    },
    {
      title: "Supported Housing Officer",
      description: "This grouping contains all Housing/Neighbourhood Officer roles."
    },
    {
      title: "Specialist Advice Workers (e.g., Employment, Welfare Rights, Housing First)",
      description: "Higher level specialist advice workers are placed here."
    },
    {
      title: "Housing Management Assistant",
      description: "All Assistant level housing roles are placed here."
    },
    {
      title: "Resettlement Workers",
      description: "We also found a cluster of Resettlement Workers and they are grouped together here. Any Senior Resettlement Workers were excluded."
    },
    {
      title: "IDVA/IDVSA",
      description: "All roles specialising in IDVA/IDVSA are placed here."
    },
    {
      title: "Navigator",
      description: "All Navigator roles are placed here."
    }
  ],
  "Coordination & Administrative": [
    {
      title: "Service Co-ordinator",
      description: "This grouping includes all roles that are Co-ordinators of front-line services. We excluded all Head Office co-ordinators (e.g., HR Co-ordinator)."
    },
    {
      title: "Activities Worker/Co-ordinator",
      description: "All Activities Workers and Co-ordinators are placed here."
    },
    {
      title: "Admin Worker/Customer Services",
      description: "All service-based Admin/Assistant or Customer Service roles are placed here."
    },
    {
      title: "Maintenance Worker/Officer",
      description: "Any roles related to maintenance, at Worker or Officer level, are placed here."
    }
  ],
  "Management Roles": [
    {
      title: "Deputy Manager/Team Leader/Lead",
      description: "All Team Leader and Deputy Managers are placed in this grade, as well as Leads where they sit above Senior/Complex Workers in an organisation's pay grades."
    },
    {
      title: "Project/Service Manager",
      description: "All roles that manage a project or service are placed here, regardless of service size/complexity."
    },
    {
      title: "Area/Operations Manager",
      description: "All roles that sit above Service Managers in the grading structure and below 'Head of' are placed here."
    }
  ]
};

const formatCurrency = (amount: number | undefined) => {
  if (!amount) return "—";
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const getGeographyBadgeVariant = (geography: string) => {
  switch (geography) {
    case "Inside London":
      return "default";
    case "Outside London":
      return "secondary";
    case "Total":
      return "outline";
    default:
      return "outline";
  }
};

export default function RatesOfPayImproved() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"role" | "median" | "average">("role");
  const [jobGroupingsSearch, setJobGroupingsSearch] = useState("");

  // Filter job groupings based on search
  const filteredJobGroupings = useMemo(() => {
    if (!jobGroupingsSearch) return jobGroupingDefinitions;
    
    const filtered: Record<string, JobGrouping[]> = {};
    Object.entries(jobGroupingDefinitions).forEach(([category, roles]) => {
      const matchingRoles = roles.filter(role => 
        role.title.toLowerCase().includes(jobGroupingsSearch.toLowerCase()) ||
        role.description.toLowerCase().includes(jobGroupingsSearch.toLowerCase()) ||
        (role.detail && role.detail.toLowerCase().includes(jobGroupingsSearch.toLowerCase()))
      );
      if (matchingRoles.length > 0) {
        filtered[category] = matchingRoles;
      }
    });
    return filtered;
  }, [jobGroupingsSearch]);

  // Get unique regions for filtering
  const regions = useMemo(() => {
    const uniqueRegions = Array.from(new Set(roleRates.map(rate => rate.geography)));
    return uniqueRegions.filter(region => region !== "Total");
  }, []);

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = roleRates.filter(rate => {
      const matchesSearch = rate.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = selectedRegion === "all" || rate.geography === selectedRegion || (selectedRegion === "total" && rate.geography === "Total");
      
      let matchesCategory = selectedCategory === "all";
      if (!matchesCategory) {
        matchesCategory = roleCategories[selectedCategory as keyof typeof roleCategories]?.includes(rate.role) || false;
      }
      
      return matchesSearch && matchesRegion && matchesCategory;
    });

    // Sort the filtered data
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "median":
          return (b.Median || 0) - (a.Median || 0);
        case "average":
          return (b.Average || 0) - (a.Average || 0);
        case "role":
        default:
          return a.role.localeCompare(b.role);
      }
    });

    return filtered;
  }, [searchTerm, selectedRegion, selectedCategory, sortBy]);

  // Export functionality
  const handleExportCSV = () => {
    const headers = ["Role", "Geography", "Sample Size", "Lower Quartile (£)", "Median (£)", "Upper Quartile (£)", "Average (£)"];
    const csvContent = [
      headers.join(","),
      ...filteredAndSortedData.map(rate => [
        `"${rate.role}"`,
        `"${rate.geography}"`,
        rate.sample_size || "",
        rate.LQ || "",
        rate.Median || "",
        rate.UQ || "",
        rate.Average || ""
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `salary-data-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      {/* Professional Header */}
      <div className="bg-gradient-to-br from-primary/15 via-chart-2/10 to-chart-4/15 rounded-xl p-8 border border-chart-2/30 shadow-xl" data-testid="rates-header">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-gradient-to-br from-chart-2 to-chart-5 p-3 rounded-lg shadow-md">
            <BarChart3 className="h-10 w-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground tracking-tight bg-gradient-to-r from-primary to-chart-4 bg-clip-text text-transparent">Rates of Pay for Key Roles</h1>
            <p className="text-xl text-chart-4 mt-2 font-medium">
              Comprehensive salary benchmarking across housing association front-line roles
            </p>
          </div>
        </div>
      </div>

      {/* BRIEF INTRODUCTION */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-gradient-to-b from-chart-2 to-chart-5 rounded-full shadow-sm"></div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-chart-4 bg-clip-text text-transparent">6. Rates of Pay for Key Roles</h2>
        </div>
        
        <div className="bg-gradient-to-br from-card to-chart-2/5 border border-chart-2/20 rounded-xl p-6 shadow-lg hover-elevate">
          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            <p className="mb-4">
              We asked participants to submit all their front-line roles, up to and including Area Manager or equivalent, to establish the most useful common job groupings. The data below represents 21 key roles that were reasonably common across all nine participating housing associations.
            </p>
            
            <div className="bg-gradient-to-r from-chart-2/10 to-chart-4/10 rounded-lg p-4 border-l-4 border-l-chart-2 shadow-sm">
              <h4 className="font-semibold text-foreground mb-2">Data Overview</h4>
              <p className="text-sm">
                Where sample size is six or greater, we provide Lower, Median and Upper Quartiles. For smaller samples, we calculated averages to provide meaningful insight. Geographic data is separated between London and outside London areas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* INTERACTIVE SALARY DATA - MAIN CONTENT */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-gradient-to-b from-chart-2 to-chart-5 rounded-full shadow-sm"></div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-chart-4 to-chart-2 bg-clip-text text-transparent">Interactive Salary Data Analysis</h2>
        </div>

        {/* Search and Filter Controls */}
        <Card className="bg-gradient-to-br from-card to-chart-2/5 border-chart-2/20 shadow-lg hover-elevate">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-chart-2 to-chart-4 p-1.5 rounded-md">
                  <Search className="h-4 w-4 text-white" />
                </div>
                <span className="bg-gradient-to-r from-chart-4 to-chart-2 bg-clip-text text-transparent font-semibold">Search & Filter Options</span>
              </div>
              <Button 
                onClick={handleExportCSV} 
                variant="outline" 
                size="sm"
                className="flex items-center gap-2"
                data-testid="button-export-csv"
              >
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Search Roles</label>
                <Input
                  placeholder="Search for job roles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                  data-testid="input-search-roles"
                />
              </div>

              {/* Region Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Region</label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger data-testid="select-region">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="total">Total (All Areas)</SelectItem>
                    {regions.map(region => (
                      <SelectItem key={region} value={region}>{region}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Category Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Role Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger data-testid="select-category">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {Object.keys(roleCategories).map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort Options */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Sort By</label>
                <Select value={sortBy} onValueChange={(value: "role" | "median" | "average") => setSortBy(value)}>
                  <SelectTrigger data-testid="select-sort">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="role">Role Name (A-Z)</SelectItem>
                    <SelectItem value="median">Median Salary (High-Low)</SelectItem>
                    <SelectItem value="average">Average Salary (High-Low)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Filter Summary */}
            {(searchTerm || selectedRegion !== "all" || selectedCategory !== "all") && (
              <div className="mt-4 p-3 bg-gradient-to-r from-chart-2/10 to-chart-4/10 rounded-lg border border-chart-2/20">
                <p className="text-sm font-medium mb-1 text-chart-4">Active Filters:</p>
                <div className="flex flex-wrap gap-1">
                  {searchTerm && <Badge variant="outline" className="bg-gradient-to-r from-chart-2/20 to-chart-4/20 border-chart-2/30">Search: "{searchTerm}"</Badge>}
                  {selectedRegion !== "all" && <Badge variant="outline" className="bg-gradient-to-r from-chart-4/20 to-chart-5/20 border-chart-4/30">Region: {selectedRegion}</Badge>}
                  {selectedCategory !== "all" && <Badge variant="outline" className="bg-gradient-to-r from-chart-3/20 to-primary/20 border-chart-3/30">Category: {selectedCategory}</Badge>}
                </div>
                <p className="text-xs text-chart-4 mt-2 font-medium">
                  Showing {filteredAndSortedData.length} results
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Salary Quartiles Glossary */}
        <Card className="bg-gradient-to-br from-card to-chart-4/5 border-chart-4/20 shadow-lg hover-elevate">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="bg-gradient-to-r from-chart-4 to-chart-2 p-1.5 rounded-md">
                <Info className="h-4 w-4 text-white" />
              </div>
              <span className="bg-gradient-to-r from-chart-4 to-chart-2 bg-clip-text text-transparent font-semibold">Salary Quartiles Glossary</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="p-3 rounded-lg border border-chart-2/30 bg-gradient-to-br from-card to-chart-2/10 cursor-help hover-elevate">
                      <div className="font-medium text-chart-2">LQ (Lower Quartile)</div>
                      <p className="text-muted-foreground">25th percentile</p>
                      <p className="text-xs mt-1">25% of salaries fall below this amount</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>The salary below which 25% of workers earn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="p-3 rounded-lg border border-chart-4/30 bg-gradient-to-br from-card to-chart-4/10 cursor-help hover-elevate">
                      <div className="font-medium text-chart-4">Median</div>
                      <p className="text-muted-foreground">50th percentile</p>
                      <p className="text-xs mt-1">Middle value - 50% above, 50% below</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>The middle salary value in the dataset</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="p-3 rounded-lg border border-chart-5/30 bg-gradient-to-br from-card to-chart-5/10 cursor-help hover-elevate">
                      <div className="font-medium text-chart-5">UQ (Upper Quartile)</div>
                      <p className="text-muted-foreground">75th percentile</p>
                      <p className="text-xs mt-1">75% of salaries fall below this amount</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>The salary below which 75% of workers earn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="p-3 rounded-lg border border-primary/30 bg-gradient-to-br from-card to-primary/10 cursor-help hover-elevate">
                      <div className="font-medium text-primary">Average</div>
                      <p className="text-muted-foreground">Mean salary</p>
                      <p className="text-xs mt-1">Arithmetic mean of all salary values</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>The calculated average of all salaries in the sample</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardContent>
        </Card>

        {/* Main Salary Data Table */}
        <Card className="bg-gradient-to-br from-card to-chart-2/5 border-chart-2/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-chart-2 to-chart-4 p-1.5 rounded-md">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <span className="bg-gradient-to-r from-chart-4 to-chart-2 bg-clip-text text-transparent font-semibold">Salary Data by Role and Geography</span>
              </div>
              <Badge variant="outline" className="text-xs bg-gradient-to-r from-chart-2/20 to-chart-4/20 border-chart-2/30 text-chart-4 font-medium">
                {filteredAndSortedData.length} roles shown
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Role</TableHead>
                    <TableHead className="w-[150px]">Geography</TableHead>
                    <TableHead className="w-[100px] text-center">Sample Size</TableHead>
                    <TableHead className="w-[120px] text-right">Lower Quartile</TableHead>
                    <TableHead className="w-[120px] text-right">Median</TableHead>
                    <TableHead className="w-[120px] text-right">Upper Quartile</TableHead>
                    <TableHead className="w-[120px] text-right">Average</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAndSortedData.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        No roles found matching your search criteria
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredAndSortedData.map((rate, index) => (
                      <TableRow key={`${rate.role}-${rate.geography}-${index}`} className="hover:bg-muted/50">
                        <TableCell className="font-medium">
                          <div className="space-y-1">
                            <div className="text-sm">{rate.role}</div>
                            {/* Add category badge if filtering by category */}
                            {selectedCategory === "all" && (
                              <div>
                                {Object.entries(roleCategories).map(([category, roles]) => {
                                  if (roles.includes(rate.role)) {
                                    return (
                                      <Badge key={category} variant="secondary" className="text-xs bg-gradient-to-r from-chart-3/20 to-chart-4/20 border-chart-3/30">
                                        {category}
                                      </Badge>
                                    );
                                  }
                                  return null;
                                })}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={getGeographyBadgeVariant(rate.geography)} 
                            className={`text-xs ${
                              rate.geography === "Inside London" 
                                ? "bg-gradient-to-r from-chart-2 to-chart-4 text-white border-chart-2" 
                                : rate.geography === "Outside London" 
                                ? "bg-gradient-to-r from-chart-4 to-chart-5 text-white border-chart-4" 
                                : "bg-gradient-to-r from-chart-3 to-primary text-white border-chart-3"
                            }`}
                          >
                            <MapPin className="h-3 w-3 mr-1" />
                            {rate.geography}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          {rate.sample_size ? (
                            <Badge variant="outline" className="text-xs bg-gradient-to-r from-muted to-chart-3/20 border-chart-3/30">
                              {rate.sample_size}
                            </Badge>
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm text-chart-2 font-medium">
                          {formatCurrency(rate.LQ)}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm font-bold text-chart-4">
                          {formatCurrency(rate.Median)}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm text-chart-5 font-medium">
                          {formatCurrency(rate.UQ)}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm text-primary font-medium">
                          {formatCurrency(rate.Average)}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Data Source Information */}
        <Card className="bg-gradient-to-br from-muted/50 to-chart-3/20 border-chart-3/20 shadow-md">
          <CardContent className="pt-6">
            <div className="text-sm text-muted-foreground">
              <p className="font-medium mb-2">Data Source & Methodology</p>
              <ul className="space-y-1 text-xs">
                <li>• Sample includes 9 housing associations and supported housing providers</li>
                <li>• Turnover range: £4.3m–£70m, median headcount: 600 employees</li>
                <li>• Geography mix: 2 London-only, 1 South East-only, 6 both London and outside</li>
                <li>• Working week: majority 37.5 hours, some 39-40 hours, some variable 35-39 hours</li>
                <li>• Salary figures include basic pay excluding overtime, bonuses, and benefits</li>
                <li>• All amounts shown in British Pounds (£) as annual salaries</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* DETAILED METHODOLOGY AND JOB GROUPINGS - APPENDIX SECTION */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-gradient-to-b from-chart-3 to-chart-5 rounded-full shadow-sm"></div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-chart-3 to-chart-5 bg-clip-text text-transparent">Detailed Methodology & Job Groupings</h2>
        </div>

        {/* Methodology Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-gradient-to-b from-chart-2 to-chart-4 rounded-full shadow-sm"></div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-chart-2 to-chart-4 bg-clip-text text-transparent">Methodology</h3>
          </div>
          
          <div className="bg-gradient-to-br from-card to-chart-2/5 border border-chart-2/20 rounded-xl p-8 shadow-lg hover-elevate">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <p className="mb-6">
                To place roles into the correct job group, we used a combination of job title and grade/salary. We were able to use grade/salary as an indicator as we had sufficient roles from each organisation to reconstruct (to some extent) their grading structure (i.e., for each organisation we could identify which roles were more senior based on salary).
              </p>
              
              <p className="mb-6">
                Within a job grouping, to avoid skewing the data, where the salary was the same, we only used one example role from each organisation. However, where there were roles with different salaries, we used an example of each salary.
              </p>
              
              <p className="mb-6">
                In order to ensure sufficient data within a job grouping, we have had to cluster together roles that might be considered at slightly different levels. This is particularly the case for the Manager grouping, which encompasses managers of single projects and managers of multiple/large projects.
              </p>
              
              <p className="mb-6">
                Finally, we have pulled out a few areas in which there were not that many entries, but which we thought might be useful to participants. Because of the small sample size, we are only able to provide mean averages, which are provided in case participants might find them useful.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-gradient-to-br from-chart-2/10 to-chart-2/20 rounded-lg p-6 border-l-4 border-l-chart-2 shadow-sm hover-elevate">
                  <h4 className="font-semibold text-foreground mb-2">Data Calculation Approach</h4>
                  <p className="text-sm">
                    Where the sample size is six or greater, we have been able to produce Lower, Median and Upper Quartiles; where smaller, we calculated an average of the data – rather than using quartiles – to provide more meaningful insight.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-chart-3/10 to-chart-3/20 rounded-lg p-6 border-l-4 border-l-chart-3 shadow-sm hover-elevate">
                  <h4 className="font-semibold text-foreground mb-2">Wider Market Context</h4>
                  <p className="text-sm">
                    This year we have also included the "Wider Market" benchmarking results for each job grouping. This is to provide further insights into the market range for specific roles, allowing comparisons between our small sample and broader trends across the UK.
                  </p>
                </div>
              </div>
              
              <p className="mb-4">
                The wider market data was gathered using our established benchmarking practices, leveraging our comprehensive and up-to-date UK salary database to provide accurate and relevant market insights.
              </p>
            </div>
          </div>
        </div>

        {/* Job Groupings Definition - Organized by Category */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-gradient-to-b from-chart-4 to-chart-5 rounded-full shadow-sm"></div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-chart-4 to-chart-5 bg-clip-text text-transparent">Job Groupings</h3>
          </div>

          {/* Search for Job Groupings */}
          <Card className="bg-gradient-to-br from-card to-chart-4/5 border-chart-4/20 shadow-lg hover-elevate">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="bg-gradient-to-r from-chart-4 to-chart-5 p-1.5 rounded-md">
                  <Search className="h-4 w-4 text-white" />
                </div>
                <span className="bg-gradient-to-r from-chart-4 to-chart-5 bg-clip-text text-transparent font-semibold">Search Job Groupings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="Search job titles or descriptions..."
                value={jobGroupingsSearch}
                onChange={(e) => setJobGroupingsSearch(e.target.value)}
                className="w-full"
                data-testid="input-search-job-groupings"
              />
              {jobGroupingsSearch && (
                <p className="text-sm text-muted-foreground mt-2">
                  Found {Object.values(filteredJobGroupings).flat().length} matching job groupings
                </p>
              )}
            </CardContent>
          </Card>
          
          {/* Organized Job Groupings */}
          <div className="space-y-8">
            {Object.entries(filteredJobGroupings).map(([category, roles]) => (
              <div key={category} className="bg-gradient-to-br from-card to-chart-4/5 border border-chart-4/20 rounded-xl p-6 shadow-lg hover-elevate">
                <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <div className="w-1 h-5 bg-gradient-to-b from-chart-2 to-chart-4 rounded-full shadow-sm"></div>
                  <span className="bg-gradient-to-r from-chart-2 to-chart-4 bg-clip-text text-transparent">{category}</span>
                </h4>
                
                <div className="grid gap-4">
                  {roles.map((role, index) => (
                    <div key={index} className="border border-chart-2/20 rounded-lg p-4 bg-gradient-to-br from-card to-chart-2/5 hover-elevate transition-all duration-200">
                      <h5 className="font-semibold text-foreground mb-2 text-base">
                        {role.title}
                      </h5>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {role.description}
                      </p>
                      {role.detail && (
                        <p className="text-muted-foreground text-xs mt-2 leading-relaxed border-l-2 border-l-muted pl-3">
                          {role.detail}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {Object.keys(filteredJobGroupings).length === 0 && jobGroupingsSearch && (
            <div className="bg-card border border-card-border rounded-xl p-8 text-center shadow-md">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h4 className="text-lg font-medium text-foreground mb-2">No matching job groupings found</h4>
              <p className="text-muted-foreground">
                Try searching with different keywords or clear your search to see all job groupings.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}