import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Layout, GitBranch, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Web Technologies",
    icon: Layout,
    skills: ["React.js", "Material UI", "JSX", "Responsive Design"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Languages",
    icon: Code,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Tools & Platforms",
    icon: GitBranch,
    skills: ["GitHub", "Visual Studio", "Odoo", "Git"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["VS Code", "Postman", "Chrome DevTools", "npm"],
    gradient: "from-orange-500 to-red-500"
  },
];

const coreTechnologies = [
  "Component-Based Architecture",
  "State Management (Redux Toolkit)",
  "REST API Integration",
  "Performance Optimization",
  "Cross-Browser Compatibility",
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="h-screen py-12 sm:py-20 px-4 sm:px-6 relative overflow-y-auto snap-start snap-always flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
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
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="hidden sm:block"
            >
              <Sparkles className="h-5 w-5 sm:h-8 sm:w-8 text-accent" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent px-2">
              Skills & Expertise
            </h2>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="hidden sm:block"
            >
              <Sparkles className="h-5 w-5 sm:h-8 sm:w-8 text-primary" />
            </motion.div>
          </div>
          <div className="w-20 sm:w-24 h-1.5 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="perspective-card"
            >
              <Card className="border-primary/50 hover:border-primary transition-all glass-card shadow-neon h-full group">
                <CardContent className="p-6">
                  <motion.div 
                    className="flex items-center gap-3 mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} relative`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity blur-xl"
                        style={{ background: `linear-gradient(135deg, ${category.gradient})` }}
                      />
                    </motion.div>
                    <h3 className="font-bold text-lg text-primary">
                      {category.title}
                    </h3>
                  </motion.div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 + idx * 0.05 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-primary/20 text-primary hover:bg-primary/30 transition-all border border-primary/30 hover:border-primary/50"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card className="border-primary/30 glass-card relative overflow-hidden group">
            <motion.div
              className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity"
              animate={{
                background: [
                  "linear-gradient(135deg, hsl(195, 100%, 50%), hsl(280, 100%, 65%))",
                  "linear-gradient(225deg, hsl(280, 100%, 65%), hsl(330, 100%, 60%))",
                  "linear-gradient(315deg, hsl(330, 100%, 60%), hsl(195, 100%, 50%))",
                  "linear-gradient(135deg, hsl(195, 100%, 50%), hsl(280, 100%, 65%))",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <CardContent className="p-8 md:p-12 relative z-10">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-primary bg-clip-text text-transparent"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Frontend Development Expertise
              </motion.h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {coreTechnologies.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + idx * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.15, rotate: [0, 5, -5, 0] }}
                  >
                    <Badge
                      className="bg-gradient-primary text-primary-foreground px-6 py-3 text-base font-semibold hover:opacity-90 transition-all shadow-neon border-0"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
