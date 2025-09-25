import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import ThemeToggle from "@/components/ThemeToggle";
import twentySixLogo from "@assets/Blue Logotype with Logo (1)_1758798870725.png";

// Page imports
import Overview from "@/pages/Overview";
import ReflectionsOnPay from "@/pages/ReflectionsOnPay";
import RatesOfPayImproved from "@/pages/RatesOfPayImproved";
import KPIs from "@/pages/KPIs";
import Benefits from "@/pages/Benefits";
import PayFrameworks from "@/pages/PayFrameworks";
import NotFound from "@/pages/not-found";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Overview} />
      <Route path="/reflections" component={ReflectionsOnPay} />
      <Route path="/benefits" component={Benefits} />
      <Route path="/frameworks" component={PayFrameworks} />
      <Route path="/kpis" component={KPIs} />
      <Route path="/wages" component={() => (
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">National Minimum Wage & Living Wage</h1>
          <p className="text-muted-foreground">Living wage impact and policy analysis - Coming Soon</p>
        </div>
      )} />
      <Route path="/rates" component={RatesOfPayImproved} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {

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
              <header className="flex items-center justify-between p-6 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
                <div className="flex items-center gap-4">
                  <SidebarTrigger data-testid="button-sidebar-toggle" />
                  <div className="flex items-center gap-3">
                    <img src={twentySixLogo} alt="TwentySix Consulting" className="h-8 w-auto" />
                    <h1 className="font-semibold text-lg text-foreground">Salary Survey Dashboard</h1>
                  </div>
                </div>
                
                <ThemeToggle />
              </header>

              {/* Main Content Area */}
              <main className="flex-1 overflow-y-auto p-8 bg-background">
                <Router />
              </main>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;