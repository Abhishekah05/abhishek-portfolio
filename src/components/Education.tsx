import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Basaveshwar Science College, Bagalkot",
    year: "2019 - 2021",
  },
  {
    degree: "Pre-University Education",
    institution: "Shri GMK PU College, Badami",
    year: "2017 - 2018",
  },
  {
    degree: "Karnataka Secondary Education",
    institution: "Shri Swami Vivekananda High School, Badami",
    year: "2015 - 2016",
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="h-screen py-12 sm:py-20 px-4 sm:px-6 relative overflow-y-auto snap-start snap-always flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
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
              <Sparkles className="h-5 w-5 sm:h-8 sm:w-8 text-accent" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent px-2">
              Education
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

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="perspective-card"
            >
              <Card className="border-primary/20 hover:border-primary/50 transition-all glass-card hover:shadow-neon group">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="p-4 rounded-xl bg-gradient-primary flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <GraduationCap className="h-7 w-7 text-primary-foreground" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground md:flex-shrink-0 glass-card px-4 py-2 rounded-lg">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{edu.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
