import { Link, useLocation } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  TrendingUp,
  Award,
  Grid,
  Target,
  Coins,
  Table,
  Home,
  Building2
} from "lucide-react";

const navigationItems = [
  {
    title: "Overview",
    url: "/",
    icon: Home,
    description: "Summary metrics and key insights"
  },
  {
    title: "Reflections on Pay",
    url: "/reflections",
    icon: TrendingUp,
    description: "Market overview and forecasts"
  },
  {
    title: "Core Benefits",
    url: "/benefits",
    icon: Award,
    description: "Holiday, pension, and wellbeing"
  },
  {
    title: "Pay Frameworks",
    url: "/frameworks",
    icon: Grid,
    description: "Framework types and prevalence"
  },
  {
    title: "KPIs",
    url: "/kpis",
    icon: Target,
    description: "Performance indicators and trends"
  },
  {
    title: "National Minimum Wage",
    url: "/wages",
    icon: Coins,
    description: "Living wage impact and policies"
  },
  {
    title: "Rates of Pay",
    url: "/rates",
    icon: Table,
    description: "Comprehensive salary data table"
  }
];

export default function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-sidebar-primary" />
          <div>
            <h2 className="font-semibold text-sidebar-foreground text-sm">
              Salary Survey Insights
            </h2>
            <p className="text-xs text-sidebar-foreground/70">
              Housing Associations Dashboard
            </p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Sections</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const isActive = location === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild
                      className={`${isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground' : ''}`}
                    >
                      <Link href={item.url} data-testid={`nav-link-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <item.icon className="h-4 w-4" />
                        <div className="flex flex-col items-start">
                          <span className="font-medium">{item.title}</span>
                          <span className="text-xs text-sidebar-foreground/60">
                            {item.description}
                          </span>
                        </div>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="text-xs text-sidebar-foreground/60">
          <p className="font-medium mb-1">SSHR Pay Benchmark Group Report</p>
          <p>TwentySix Consulting (2024/25)</p>
          <Badge variant="outline" className="mt-2 text-xs border-sidebar-border">
            9 Organisations
          </Badge>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}