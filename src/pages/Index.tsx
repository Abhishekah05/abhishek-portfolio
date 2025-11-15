import { SidebarProvider } from "@/components/ui/sidebar";
import { PortfolioSidebar } from "@/components/PortfolioSidebar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full">
        <PortfolioSidebar />
        <main className="flex-1 overflow-y-auto snap-y snap-mandatory h-screen">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
