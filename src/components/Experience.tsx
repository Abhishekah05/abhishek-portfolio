import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="h-screen py-12 sm:py-20 px-4 sm:px-6 relative overflow-y-auto snap-start snap-always flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10 w-full" ref={ref}>
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
              <Sparkles className="h-5 w-5 sm:h-8 sm:w-8 text-secondary" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent px-2">
              Experience
            </h2>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="hidden sm:block"
            >
              <Sparkles className="h-5 w-5 sm:h-8 sm:w-8 text-primary" />
            </motion.div>
          </div>
          <div className="w-20 sm:w-24 h-1.5 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="perspective-card"
          >
            <Card className="border-primary/20 hover:border-primary/50 transition-all glass-card hover:shadow-neon relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity"
                initial={false}
              />
              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <motion.div 
                      className="p-4 rounded-xl bg-gradient-primary"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Briefcase className="h-7 w-7 text-primary-foreground" />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Frontend Developer</h3>
                      <p className="text-xl text-primary font-semibold">YesMinds Global Solution Pvt Ltd</p>
                      <p className="text-muted-foreground">Mysore, Karnataka</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground glass-card px-4 py-2 rounded-lg">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">March 2024 - Present</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {[
                    "Developed responsive web applications using React.js, modern hooks, and JSX to enhance user experience",
                    "Integrated RESTful APIs to fetch and display dynamic data, collaborating closely with backend teams",
                    "Built modular, reusable components using React Hooks, Context API, and Redux Toolkit for state management",
                    "Improved UI consistency by 15% by implementing Material-UI and custom CSS, reducing styling discrepancies",
                    "Optimized application state management to improve performance and maintainability"
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <motion.div 
                        className="mt-2 w-2.5 h-2.5 rounded-full bg-gradient-primary flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                      />
                      <p className="text-foreground/90 group-hover/item:text-foreground transition-colors">
                        {point.split("React.js").map((part, i) => 
                          i === 0 ? part : <><span key={i} className="font-semibold text-primary">React.js</span>{part}</>
                        )}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.9 }}
                  className="flex flex-wrap gap-2"
                >
                  {["React.js", "Material-UI", "Redux Toolkit", "REST APIs", "React Hooks"].map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1 + index * 0.05 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all border border-primary/20">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
