import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from '../AppSidebar';

export default function AppSidebarExample() {
  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-96 w-full border border-border rounded-md overflow-hidden">
        <AppSidebar />
        <div className="flex-1 p-4 bg-background">
          <div className="text-sm text-muted-foreground">
            This is the main content area. The sidebar navigation will allow users to move between different sections of the salary survey dashboard.
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}