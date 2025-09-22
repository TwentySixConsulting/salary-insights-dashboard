import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import ThemeToggle from "@/components/ThemeToggle";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FilterPanel from "@/components/FilterPanel";
import { Building2 } from "lucide-react";
import { useState } from "react";

// Page imports
import Overview from "@/pages/Overview";
import RatesOfPay from "@/pages/RatesOfPay";
import KPIs from "@/pages/KPIs";
import Benefits from "@/pages/Benefits";
import NotFound from "@/pages/not-found";

// Sample data
import { organisations } from "@shared/sampleData";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Overview} />
      <Route path="/reflections" component={() => (
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Reflections on Pay</h1>
          <p className="text-muted-foreground">Market overview and pay forecasts - Coming Soon</p>
        </div>
      )} />
      <Route path="/benefits" component={Benefits} />
      <Route path="/frameworks" component={() => (
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Pay Frameworks</h1>
          <p className="text-muted-foreground">Framework types and prevalence analysis - Coming Soon</p>
        </div>
      )} />
      <Route path="/kpis" component={KPIs} />
      <Route path="/wages" component={() => (
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">National Minimum Wage & Living Wage</h1>
          <p className="text-muted-foreground">Living wage impact and policy analysis - Coming Soon</p>
        </div>
      )} />
      <Route path="/rates" component={RatesOfPay} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedOrgs, setSelectedOrgs] = useState<string[]>([]);
  const [currentOrg, setCurrentOrg] = useState<string>("all");

  const handleResetFilters = () => {
    console.log('Global filters reset');
    setSelectedRegions([]);
    setSelectedOrgs([]);
    setCurrentOrg("all");
  };

  // Custom sidebar width for the dashboard
  const sidebarStyle = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider style={sidebarStyle as React.CSSProperties}>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
              {/* Top Header */}
              <header className="flex items-center justify-between p-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex items-center gap-4">
                  <SidebarTrigger data-testid="button-sidebar-toggle" />
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-sidebar-primary" />
                    <h1 className="font-semibold text-lg">Salary Survey Dashboard</h1>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Organisation Selector */}
                  <Select value={currentOrg} onValueChange={setCurrentOrg}>
                    <SelectTrigger className="w-64" data-testid="select-current-organisation">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Organisations</SelectItem>
                      {organisations.map(org => (
                        <SelectItem key={org.id} value={org.id}>
                          {org.name}
                          <span className="ml-2 text-xs text-muted-foreground">
                            ({org.region})
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <ThemeToggle />
                </div>
              </header>

              {/* Main Content Area */}
              <div className="flex flex-1 overflow-hidden">
                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-6">
                  <Router />
                </main>
                
                {/* Right Sidebar - Filters */}
                <aside className="w-80 border-l border-border bg-background/50 backdrop-blur p-4 overflow-y-auto">
                  <FilterPanel
                    organisations={organisations}
                    selectedRegions={selectedRegions}
                    selectedOrgs={selectedOrgs}
                    onRegionChange={setSelectedRegions}
                    onOrgChange={setSelectedOrgs}
                    onReset={handleResetFilters}
                  />
                  
                  {/* Filter Status */}
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <h3 className="font-medium text-sm mb-2">Current Filters</h3>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div>Organisation: {currentOrg === "all" ? "All" : organisations.find(o => o.id === currentOrg)?.name || "Unknown"}</div>
                      <div>Regions: {selectedRegions.length > 0 ? selectedRegions.join(", ") : "None"}</div>
                      <div>Selected Orgs: {selectedOrgs.length}</div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;