import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { jobTables, type JobTable } from "@shared/sampleData";
import { Search, Info, Download, BarChart3, FileText, Eye, EyeOff, ChevronDown, ChevronUp } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const formatCurrency = (amount: number | undefined) => {
  if (!amount) return "N/A";
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const formatSampleSize = (size: number | undefined) => {
  if (!size) return "N/A";
  return size.toString();
};

// Individual Job Table Component matching SSHR report format exactly
const JobTableComponent = ({ job, showTable = true }: { job: JobTable; showTable?: boolean }) => {
  return (
    <Card className="bg-card border-primary/15 shadow-xl hover-elevate">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-md shadow-md">
            <FileText className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary">{job.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 font-normal">
              {job.description}
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      {showTable && (
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/10 border-b-2 border-primary/20">
                  <TableHead className="w-[200px] font-bold text-primary bg-primary/15 border-r border-primary/20">Geography</TableHead>
                  <TableHead className="w-[120px] text-center font-bold text-primary">Sample Size</TableHead>
                  <TableHead className="w-[120px] text-right font-bold text-primary">LQ</TableHead>
                  <TableHead className="w-[120px] text-right font-bold text-primary">Median</TableHead>
                  <TableHead className="w-[120px] text-right font-bold text-primary">UQ</TableHead>
                  <TableHead className="w-[120px] text-right font-bold text-primary">Average</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {job.data.map((row, index) => (
                  <TableRow 
                    key={`${job.id}-${row.geography}-${index}`} 
                    className={`hover:bg-muted/50 ${
                      row.geography === 'Total' ? 'bg-primary/5 font-medium' : ''
                    }`}
                  >
                    <TableCell className="font-bold bg-primary/5 border-r border-primary/10">
                      {row.geography}
                    </TableCell>
                    <TableCell className="text-center">
                      {formatSampleSize(row.sample_size)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(row.LQ)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(row.Median)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(row.UQ)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(row.Average)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

// Expandable Job Item Component for collapsed view
const ExpandableJobItem = ({ job, isExpanded, onToggle }: { 
  job: JobTable; 
  isExpanded: boolean; 
  onToggle: () => void;
}) => {
  return (
    <Card className="bg-card border-primary/15 shadow-xl hover-elevate">
      <CardHeader 
        className="cursor-pointer" 
        onClick={onToggle}
        data-testid={`expandable-job-${job.id}`}
      >
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-md shadow-md">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary">{job.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 font-normal">
                {job.description}
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-primary" />
            ) : (
              <ChevronDown className="h-5 w-5 text-primary" />
            )}
          </div>
        </CardTitle>
      </CardHeader>
      {isExpanded && (
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/10 border-b-2 border-primary/20">
                  <TableHead className="w-[200px] font-bold text-primary bg-primary/15 border-r border-primary/20">Geography</TableHead>
                  <TableHead className="w-[120px] text-center font-bold text-primary">Sample Size</TableHead>
                  <TableHead className="w-[120px] text-right font-bold text-primary">LQ</TableHead>
                  <TableHead className="w-[120px] text-right font-bold text-primary">Median</TableHead>
                  <TableHead className="w-[120px] text-right font-bold text-primary">UQ</TableHead>
                  <TableHead className="w-[120px] text-right font-bold text-primary">Average</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {job.data.map((row, index) => (
                  <TableRow 
                    key={`${job.id}-${row.geography}-${index}`} 
                    className={`hover:bg-muted/50 ${
                      row.geography === 'Total' ? 'bg-primary/5 font-medium' : ''
                    }`}
                  >
                    <TableCell className="font-bold bg-primary/5 border-r border-primary/10">
                      {row.geography}
                    </TableCell>
                    <TableCell className="text-center">
                      {formatSampleSize(row.sample_size)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(row.LQ)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(row.Median)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(row.UQ)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(row.Average)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default function RatesOfPaySSHR() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showTables, setShowTables] = useState(true);
  const [expandedJobs, setExpandedJobs] = useState<Set<string>>(new Set());

  // Filter job tables based on search term
  const filteredJobTables = useMemo(() => {
    if (!searchTerm.trim()) return jobTables;
    
    const searchLower = searchTerm.toLowerCase();
    return jobTables.filter(job => {
      // Search in title, description, and individual keywords
      const titleMatch = job.title.toLowerCase().includes(searchLower);
      const descriptionMatch = job.description.toLowerCase().includes(searchLower);
      
      // Also search for individual words to handle cases like "night assistant" matching "Night Assistant/Concierge"
      const searchWords = searchLower.split(/\s+/);
      const wordMatch = searchWords.every(word => 
        job.title.toLowerCase().includes(word) || 
        job.description.toLowerCase().includes(word)
      );
      
      return titleMatch || descriptionMatch || wordMatch;
    });
  }, [searchTerm]);

  // Export functionality for all displayed job tables
  const handleExportCSV = () => {
    const csvData: string[] = [];
    
    filteredJobTables.forEach(job => {
      csvData.push(`"${job.title}"`);
      csvData.push(`"${job.description}"`);
      csvData.push("");
      csvData.push("Geography,Sample Size,LQ (£),Median (£),UQ (£),Average (£)");
      
      job.data.forEach(row => {
        csvData.push([
          `"${row.geography}"`,
          row.sample_size || "",
          row.LQ || "",
          row.Median || "",
          row.UQ || "",
          row.Average || ""
        ].join(","));
      });
      
      csvData.push(""); // Empty line between jobs
    });

    const csvContent = csvData.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sshr-salary-rates-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const toggleJobExpansion = (jobId: string) => {
    setExpandedJobs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(jobId)) {
        newSet.delete(jobId);
      } else {
        newSet.add(jobId);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-8">
      {/* Professional Header */}
      <div className="bg-primary/5 rounded-xl p-8 border border-primary/20 shadow-xl" data-testid="rates-header">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-primary p-3 rounded-lg shadow-lg">
            <BarChart3 className="h-10 w-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary tracking-tight">Rates of Pay for Key Roles</h1>
            <p className="text-xl text-chart-4 mt-2 font-medium">
              Individual job salary tables exactly as presented in the SSHR Pay Benchmark Group Report
            </p>
          </div>
        </div>
      </div>

      {/* Job Groupings Explanation Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-primary rounded-full shadow-md"></div>
          <h2 className="text-2xl font-bold text-primary">Explanation of Job Groupings</h2>
        </div>
        
        <div className="bg-card border border-primary/15 rounded-xl p-6 shadow-xl hover-elevate">
          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            <p className="mb-4">
              We asked participants to submit all their front-line roles, up to and including Area Manager or equivalent, so that we could work out the most useful common job groupings.
            </p>
            
            <p className="mb-4">
              As we expected, participants have a diverse group of services and therefore roles differ considerably across the benchmarking club. To collate a set of data that was most useful to participants we analysed all the role data we received and identified 21 roles that were reasonably common across participants.
            </p>

            <p className="mb-4">
              These roles are listed below, each with a short explanation of the types of roles we have placed into each group. As the benchmarking club is relatively small (nine participants), we had to keep the job groupings relatively broad, in order to: a) preserve anonymity and b) to ensure sufficient data to calculate mean or median averages.
            </p>

            <p className="mb-6">
              This was particularly important as participants are spread across London and outside London, and we wanted to be able to separate out these two sets of data.
            </p>
            
            <div className="bg-chart-2/10 rounded-lg p-4 border-l-4 border-l-chart-2 shadow-md">
              <h4 className="font-semibold text-primary mb-2">Data Overview</h4>
              <p className="text-sm">
                Where sample size is six or greater, we provide Lower Quartile (LQ), Median and Upper Quartile (UQ). For smaller samples, we calculated averages to provide meaningful insight. Geographic data is separated between London and outside London areas, plus wider market benchmarks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Export Controls */}
      <Card className="bg-card border-primary/15 shadow-xl hover-elevate">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-md shadow-md">
                <Search className="h-4 w-4 text-white" />
              </div>
              <span className="text-chart-4 font-semibold">Search Job Roles</span>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                onClick={() => setShowTables(!showTables)}
                variant="outline" 
                size="sm"
                className="flex items-center gap-2"
                data-testid="button-toggle-tables"
              >
                {showTables ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showTables ? "Hide Tables" : "Show Tables"}
              </Button>
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
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search for job roles (e.g., 'night assistant', 'manager', 'support worker')"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
                data-testid="input-search-jobs"
              />
            </div>
            {searchTerm && (
              <Button 
                onClick={clearSearch}
                variant="ghost"
                size="sm"
                data-testid="button-clear-search"
              >
                Clear
              </Button>
            )}
          </div>

          {/* Search Results Summary */}
          {searchTerm && (
            <div className="mt-4 p-3 bg-chart-2/10 rounded-lg border border-chart-2/20">
              <p className="text-sm font-medium mb-1 text-chart-4">Search Results:</p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="bg-chart-2/20 border-chart-2/30">
                  "{searchTerm}" - {filteredJobTables.length} job{filteredJobTables.length !== 1 ? 's' : ''} found
                </Badge>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Salary Quartiles Glossary */}
      <Card className="bg-card border-primary/15 shadow-xl hover-elevate">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <div className="bg-chart-4 p-2 rounded-md shadow-md">
              <Info className="h-4 w-4 text-white" />
            </div>
            <span className="text-chart-4 font-semibold">Salary Data Columns Explained</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="p-3 rounded-lg border border-chart-2/30 bg-chart-2/10 shadow-md">
              <div className="font-medium text-primary">LQ (Lower Quartile)</div>
              <p className="text-muted-foreground">25th percentile</p>
              <p className="text-xs mt-1">25% of salaries fall below this amount</p>
            </div>

            <div className="p-3 rounded-lg border border-chart-4/30 bg-chart-4/10 shadow-md">
              <div className="font-medium text-primary">Median</div>
              <p className="text-muted-foreground">50th percentile</p>
              <p className="text-xs mt-1">Middle value - 50% above, 50% below</p>
            </div>

            <div className="p-3 rounded-lg border border-chart-5/30 bg-chart-5/10 shadow-md">
              <div className="font-medium text-primary">UQ (Upper Quartile)</div>
              <p className="text-muted-foreground">75th percentile</p>
              <p className="text-xs mt-1">75% of salaries fall below this amount</p>
            </div>

            <div className="p-3 rounded-lg border border-primary/30 bg-primary/10 shadow-md">
              <div className="font-medium text-primary">Average</div>
              <p className="text-muted-foreground">Mean salary</p>
              <p className="text-xs mt-1">Arithmetic mean of all salary values</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Individual Job Tables */}
      <div className="space-y-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-primary rounded-full shadow-md"></div>
            <h2 className="text-2xl font-bold text-primary">Job Role Salary Tables</h2>
          </div>
          <Badge variant="outline" className="text-xs bg-chart-2/20 border-primary/30 text-primary font-medium shadow-sm">
            {filteredJobTables.length} of {jobTables.length} jobs shown
          </Badge>
        </div>

        {filteredJobTables.length === 0 ? (
          <Card className="bg-card border-primary/15 shadow-xl">
            <CardContent className="py-12 text-center">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No jobs found</h3>
              <p className="text-muted-foreground mb-4">
                No job roles match your search term "{searchTerm}"
              </p>
              <Button onClick={clearSearch} variant="outline" data-testid="button-show-all">
                Show All Jobs
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {filteredJobTables.map((job, index) => (
              <div key={job.id} data-testid={`job-table-${job.id}`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-primary bg-primary/10 px-3 py-1 rounded-md">
                    {index + 1}.
                  </span>
                  <span className="text-sm text-muted-foreground">
                    of {filteredJobTables.length} job{filteredJobTables.length !== 1 ? 's' : ''}
                  </span>
                </div>
                {showTables ? (
                  <JobTableComponent job={job} />
                ) : (
                  <ExpandableJobItem 
                    job={job} 
                    isExpanded={expandedJobs.has(job.id)}
                    onToggle={() => toggleJobExpansion(job.id)}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Methodology Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-primary rounded-full shadow-md"></div>
          <h2 className="text-2xl font-bold text-primary">Methodology</h2>
        </div>
        
        <div className="bg-card border border-primary/15 rounded-xl p-6 shadow-xl hover-elevate">
          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            <p className="mb-4">
              To place roles into the correct job group, we used a combination of job title and grade/salary. We were able to use grade/salary as an indicator as we had sufficient roles from each organisation to reconstruct (to some extent) their grading structure (i.e., for each organisation we could identify which roles were more senior based on salary).
            </p>

            <p className="mb-4">
              Within a job grouping, to avoid skewing the data, where the salary was the same, we only used one example role from each organisation. However, where there were roles with different salaries, we used an example of each salary.
            </p>

            <p className="mb-4">
              In order to ensure sufficient data within a job grouping, we have had to cluster together roles that might be considered at slightly different levels. This is particularly the case for the Manager grouping, which encompasses managers of single projects and managers of multiple/large projects.
            </p>

            <p className="mb-4">
              Finally, we have pulled out a few areas in which there were not that many entries, but which we thought might be useful to participants. Because of the small sample size, we are only able to provide mean averages, which are provided in case participants might find them useful.
            </p>

            <p className="mb-4">
              Where the sample size is six or greater, we have been able to produce Lower, Median and Upper Quartiles; where smaller, we calculated an average of the data – rather than using quartiles – to provide more meaningful insight.
            </p>

            <p className="mb-6">
              This year we have also included the "Wider Market" benchmarking results for each job grouping. This is to provide further insights into the market range for specific roles, allowing comparisons between our small sample and broader trends across the UK. The wider market data was gathered using our established benchmarking practices, leveraging our comprehensive and up-to-date UK salary database to provide accurate and relevant market insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}