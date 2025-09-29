import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { jobTables, type JobTable } from "@shared/sampleData";
import { Search, Info, Download, BarChart3, FileText } from "lucide-react";
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
const JobTableComponent = ({ job }: { job: JobTable }) => {
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
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px] font-semibold">Geography</TableHead>
                <TableHead className="w-[120px] text-center font-semibold">Sample Size</TableHead>
                <TableHead className="w-[120px] text-right font-semibold">LQ</TableHead>
                <TableHead className="w-[120px] text-right font-semibold">Median</TableHead>
                <TableHead className="w-[120px] text-right font-semibold">UQ</TableHead>
                <TableHead className="w-[120px] text-right font-semibold">Average</TableHead>
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
                  <TableCell className="font-medium">
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
    </Card>
  );
};

export default function RatesOfPaySSHR() {
  const [searchTerm, setSearchTerm] = useState("");

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

      {/* Introduction Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-primary rounded-full shadow-md"></div>
          <h2 className="text-2xl font-bold text-primary">6. Rates of Pay for Key Roles</h2>
        </div>
        
        <div className="bg-card border border-primary/15 rounded-xl p-6 shadow-xl hover-elevate">
          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            <p className="mb-4">
              We asked participants to submit all their front-line roles, up to and including Area Manager or equivalent, to establish the most useful common job groupings. The data below represents 21 key roles that were reasonably common across all nine participating housing associations.
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
            <div className="mt-4 p-3 bg-gradient-to-r from-chart-2/10 to-chart-4/10 rounded-lg border border-chart-2/20">
              <p className="text-sm font-medium mb-1 text-chart-4">Search Results:</p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="bg-gradient-to-r from-chart-2/20 to-chart-4/20 border-chart-2/30">
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
                <JobTableComponent job={job} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}