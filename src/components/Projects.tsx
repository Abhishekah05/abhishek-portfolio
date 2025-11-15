import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Briefcase, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "TowDepo",
    type: "E-Commerce Web Application",
    description: "Feature-rich e-commerce platform with product categories, wishlist, and account management. Implemented guest-to-authorized user flow resulting in 18% increase in conversions.",
    highlights: [
      "Built with React.js and Material-UI for consistent UI",
      "Redux for persistent state management",
      "Location-based inventory system",
      "Integrated Razorpay payment gateway",
      "Admin interface for store management",
    ],
    technologies: ["React.js", "Material-UI", "Redux", "Razorpay API"],
    isOffice: true,
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    title: "Traction",
    type: "Custom Towing Service Platform (USA)",
    description: "Comprehensive web platform streamlining towing operations for US-based service providers with advanced communication and management features.",
    highlights: [
      "Notification module for targeted dispatcher messaging",
      "Dynamic feedback form with 50% improved response collection",
      "SMS module reducing communication time by 40%",
      "Role-based user management system",
      "Scalable backend API integration",
    ],
    technologies: ["React.js", "Material-UI", "REST APIs", "Role Management"],
    isOffice: true,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Loan Calculator",
    type: "Financial Web Application",
    description: "Modern loan calculator with EMI calculation, amortization schedule, and real-time currency conversion using live exchange rates.",
    highlights: [
      "EMI calculation with amortization schedule",
      "Live currency conversion (160+ currencies)",
      "Light/Dark mode with Material UI theming",
      "Responsive design for all devices",
      "Custom React hooks for logic abstraction",
    ],
    technologies: ["React.js", "Material-UI", "ExchangeRate API", "React Context"],
    github: "https://github.com/Abhishekah05/Loan-Calculator.git",
    demo: "https://loan-calculator-five-gamma.vercel.app/",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    title: "SpaceX Dashboard",
    type: "Data Visualization Platform",
    description: "Interactive dashboard displaying SpaceX launch data with filtering capabilities and detailed mission information.",
    highlights: [
      "Browse and filter SpaceX launches (upcoming/past)",
      "Detailed launch information in modal dialogs",
      "Loading states and error handling",
      "Mobile-responsive custom design",
      "Theme toggle (light/dark mode)",
    ],
    technologies: ["React.js", "Material-UI", "SpaceX API", "Axios"],
    github: "https://github.com/Abhishekah05/SpaceX-Dashboard",
    demo: "https://space-x-dashboard-gold.vercel.app/",
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Towing Forward AI",
    type: "Static Landing Page",
    description: "Responsive landing page showcasing AI-powered missed call conversion for towing businesses with interactive audio demo.",
    highlights: [
      "Clean, modern responsive design",
      "Interactive voice demo with play/pause controls",
      "Performance metrics display",
      "Business value proposition sections",
      "Optimized static deployment",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/Abhishekah05/TowingForward",
    demo: "https://towingforward-com.vercel.app/",
    gradient: "from-yellow-500 to-orange-600"
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="h-screen py-12 sm:py-20 px-4 sm:px-6 relative overflow-y-auto snap-start snap-always flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="hidden sm:block"
            >
              <Sparkles className="h-5 w-5 sm:h-8 sm:w-8 text-primary" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent px-2">
              Featured Projects
            </h2>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="hidden sm:block"
            >
              <Sparkles className="h-5 w-5 sm:h-8 sm:w-8 text-secondary" />
            </motion.div>
          </div>
          <div className="w-20 sm:w-24 h-1.5 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="perspective-card h-full"
            >
              <Card className="h-full border-primary/20 hover:border-primary/50 transition-all glass-card hover:shadow-neon flex flex-col relative overflow-hidden group">
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={false}
                />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <CardTitle className="text-2xl md:text-3xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </motion.div>
                    {project.isOffice && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                      >
                        <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-neon`}>
                          <Briefcase className="h-3 w-3 mr-1" />
                          Office
                        </Badge>
                      </motion.div>
                    )}
                  </div>
                  <CardDescription className="text-base font-medium text-primary">
                    {project.type}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col relative z-10">
                  <p className="text-foreground/90 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-3 text-sm text-primary">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + index * 0.1 + idx * 0.05 }}
                          className="flex items-start gap-2 text-sm group/item"
                        >
                          <motion.div 
                            className="mt-1.5 w-2 h-2 rounded-full bg-gradient-primary flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                            {highlight}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.5 + index * 0.1 + idx * 0.05 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all border border-primary/20"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {!project.isOffice && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex gap-3 mt-auto"
                    >
                      {project.github && (
                        <Button
                          variant="outline"
                          className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white shadow-neon transition-all hover:scale-105 border-0`}
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
