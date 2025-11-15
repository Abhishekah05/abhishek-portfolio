import { Home, User, Briefcase, Code, GraduationCap, Mail, ExternalLink } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", url: "#home", icon: Home },
  { title: "About", url: "#about", icon: User },
  { title: "Experience", url: "#experience", icon: Briefcase },
  { title: "Skills", url: "#skills", icon: Code },
  { title: "Projects", url: "#projects", icon: ExternalLink },
  { title: "Education", url: "#education", icon: GraduationCap },
  { title: "Contact", url: "#contact", icon: Mail },
];

export function PortfolioSidebar() {
  const { state, isMobile } = useSidebar();
  const location = useLocation();
  
  const handleNavClick = (url: string) => {
    const element = document.querySelector(url);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Sidebar 
      className="border-r border-sidebar-border backdrop-blur-xl bg-sidebar/95" 
      collapsible={isMobile ? "offcanvas" : "icon"}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {state === "expanded" && (
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-neon animate-glow">
              AH
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-sidebar-foreground">Abhishek</span>
              <span className="text-xs text-sidebar-foreground/70">Frontend Developer</span>
            </div>
          </div>
        )}
        <SidebarTrigger className="text-sidebar-foreground hover:text-sidebar-primary transition-all hover:scale-110" />
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 text-xs uppercase tracking-wider">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-sidebar-accent hover:text-sidebar-primary transition-all duration-300 cursor-pointer group relative overflow-hidden"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <a
                      href={item.url}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.url);
                      }}
                      className="flex items-center gap-3 relative z-10"
                    >
                      <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      {state === "expanded" && <span className="group-hover:translate-x-1 transition-transform">{item.title}</span>}
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity -z-10" />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
