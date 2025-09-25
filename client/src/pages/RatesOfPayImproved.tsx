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
      <div className="bg-gradient-to-r from-primary/10 to-chart-3/10 rounded-xl p-8 border border-primary/20 shadow-lg" data-testid="rates-header">
        <div className="flex items-center gap-4 mb-4">
          <BarChart3 className="h-10 w-10 text-primary" />
          <div>
            <h1 className="text-4xl font-bold text-foreground tracking-tight">Rates of Pay for Key Roles</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Comprehensive salary benchmarking across housing association front-line roles
            </p>
          </div>
        </div>
      </div>

      {/* COMPLETE SSHR REPORT TEXT CONTENT - ALL TEXT BEFORE ANY DATA TABLES */}
      <div className="space-y-8">
        {/* Explanation of Job Groupings */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold text-foreground">6. Rates of Pay for Key Roles</h2>
          </div>
          
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <h3 className="text-xl font-semibold text-foreground mb-4">Explanation of Job Groupings</h3>
              
              <p className="mb-6">
                We asked participants to submit all their front-line roles, up to and including Area Manager or equivalent, so that we could work out the most useful common job groupings.
              </p>
              
              <p className="mb-6">
                As we expected, participants have a diverse group of services and therefore roles differ considerably across the benchmarking club. To collate a set of data that was most useful to participants we analysed all the role data we received and identified 21 roles that were reasonably common across participants.
              </p>
              
              <p className="mb-6">
                These roles are listed below, each with a short explanation of the types of roles we have placed into each group. As the benchmarking club is relatively small (nine participants), we had to keep the job groupings relatively broad, in order to: a) preserve anonymity and b) to ensure sufficient data to calculate mean or median averages.
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-l-primary my-6">
                <h4 className="font-semibold text-foreground mb-2">Geographic Considerations</h4>
                <p>
                  This was particularly important as participants are spread across London and outside London, and we wanted to be able to separate out these two sets of data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-chart-2 rounded-full"></div>
            <h2 className="text-2xl font-bold text-foreground">Methodology</h2>
          </div>
          
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
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
                <div className="bg-chart-2/10 rounded-lg p-6 border-l-4 border-l-chart-2">
                  <h4 className="font-semibold text-foreground mb-2">Data Calculation Approach</h4>
                  <p className="text-sm">
                    Where the sample size is six or greater, we have been able to produce Lower, Median and Upper Quartiles; where smaller, we calculated an average of the data – rather than using quartiles – to provide more meaningful insight.
                  </p>
                </div>
                
                <div className="bg-chart-3/10 rounded-lg p-6 border-l-4 border-l-chart-3">
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

        {/* Job Groupings Definition */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-chart-4 rounded-full"></div>
            <h2 className="text-2xl font-bold text-foreground">Job Groupings</h2>
          </div>
          
          <div className="bg-card border border-card-border rounded-xl p-8 shadow-md">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Entry level: Typically called Assistant or Trainee</h4>
                  <p className="text-muted-foreground">
                    All support-based entry level roles sit in here.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Night Assistant/Concierge</h4>
                  <p className="text-muted-foreground">
                    All straight-forward night roles sit in here.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Support/Project Worker (Main Grade)</h4>
                  <p className="text-muted-foreground mb-3">
                    Regardless of job title, all front-line support-based worker roles (except Housing) sit in here. This includes all specialisms that sat within the main front line grade for each participant.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    For example, it includes both floating and project-based support. We looked at each sub-category of role (e.g., mental health) to see whether we could see groupings with noticeable pay differentials that we could pull out – where roles were paid at a higher salary, they were placed into the job grouping below.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Night Worker</h4>
                  <p className="text-muted-foreground">
                    All support-based Night roles sit in here.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Senior Support/Specialist/Complex Needs Worker</h4>
                  <p className="text-muted-foreground">
                    All senior/complex support-based roles sit in this grouping.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Housing Advice/Tenancy Sustainment/Housing Support Worker</h4>
                  <p className="text-muted-foreground">
                    Within this group, we put all support/advice worker housing-related roles.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Supported Housing Officer</h4>
                  <p className="text-muted-foreground">
                    This grouping contains all Housing/Neighbourhood Officer roles.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Outreach Worker</h4>
                  <p className="text-muted-foreground">
                    All roles with Outreach Worker in their job title are placed in here.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Service Co-ordinator</h4>
                  <p className="text-muted-foreground">
                    This grouping includes all roles that are Co-ordinators of front-line services. We excluded all Head Office co-ordinators (e.g., HR Co-ordinator).
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Deputy Manager/Team Leader/Lead</h4>
                  <p className="text-muted-foreground">
                    All Team Leader and Deputy Managers are placed in this grade, as well as Leads where they sit above Senior/Complex Workers in an organisation's pay grades.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Project/Service Manager</h4>
                  <p className="text-muted-foreground">
                    All roles that manage a project or service are placed here, regardless of service size/complexity.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Area/Operations Manager</h4>
                  <p className="text-muted-foreground">
                    All roles that sit above Service Managers in the grading structure and below 'Head of' are placed here.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Admin Worker/Customer Services</h4>
                  <p className="text-muted-foreground">
                    All service-based Admin/Assistant or Customer Service roles are placed here.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Maintenance Worker/Officer</h4>
                  <p className="text-muted-foreground">
                    Any roles related to maintenance, at Worker or Officer level, are placed here.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Activities Worker/Co-ordinator</h4>
                  <p className="text-muted-foreground">
                    All Activities Workers and Co-ordinators are placed here.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Cook/Chef</h4>
                  <p className="text-muted-foreground">
                    We have grouped together all Cooks/Chefs here.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Specialist Advice Workers (e.g., Employment, Welfare Rights, Housing First)</h4>
                  <p className="text-muted-foreground">
                    Higher level specialist advice workers are placed here.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Housing Management Assistant</h4>
                  <p className="text-muted-foreground">
                    All Assistant level housing roles are placed here.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Resettlement Workers</h4>
                  <p className="text-muted-foreground">
                    We also found a cluster of Resettlement Workers and they are grouped together here. Any Senior Resettlement Workers were excluded.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">IDVA/IDVSA</h4>
                  <p className="text-muted-foreground">
                    All roles specialising in IDVA/IDVSA are placed here.
                  </p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Navigator</h4>
                  <p className="text-muted-foreground">
                    All Navigator roles are placed here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SUPPORTING DATA ANALYSIS TOOLS - ALL INTERACTIVE ELEMENTS AFTER TEXT CONTENT */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-chart-5 rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">Interactive Salary Data Analysis</h2>
        </div>

        {/* Search and Filter Controls */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                Search & Filter Options
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
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium mb-1">Active Filters:</p>
                <div className="flex flex-wrap gap-1">
                  {searchTerm && <Badge variant="outline">Search: "{searchTerm}"</Badge>}
                  {selectedRegion !== "all" && <Badge variant="outline">Region: {selectedRegion}</Badge>}
                  {selectedCategory !== "all" && <Badge variant="outline">Category: {selectedCategory}</Badge>}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Showing {filteredAndSortedData.length} results
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Salary Quartiles Glossary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Info className="h-5 w-5 text-primary" />
              Salary Quartiles Glossary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="p-3 rounded-lg border cursor-help">
                      <div className="font-medium text-primary">LQ (Lower Quartile)</div>
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
                    <div className="p-3 rounded-lg border cursor-help">
                      <div className="font-medium text-primary">Median</div>
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
                    <div className="p-3 rounded-lg border cursor-help">
                      <div className="font-medium text-primary">UQ (Upper Quartile)</div>
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
                    <div className="p-3 rounded-lg border cursor-help">
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
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Salary Data by Role and Geography
              </div>
              <Badge variant="outline" className="text-xs">
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
                                      <Badge key={category} variant="secondary" className="text-xs">
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
                          <Badge variant={getGeographyBadgeVariant(rate.geography)} className="text-xs">
                            <MapPin className="h-3 w-3 mr-1" />
                            {rate.geography}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          {rate.sample_size ? (
                            <Badge variant="outline" className="text-xs">
                              {rate.sample_size}
                            </Badge>
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm">
                          {formatCurrency(rate.LQ)}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm font-medium">
                          {formatCurrency(rate.Median)}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm">
                          {formatCurrency(rate.UQ)}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm">
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
        <Card>
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
    </div>
  );
}