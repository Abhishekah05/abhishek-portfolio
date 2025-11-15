import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Zap, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with modern best practices and design patterns.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "Modern Design",
    description: "Creating beautiful, responsive interfaces with Material-UI and custom CSS.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing application performance and state management for better UX.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Leveraging cutting-edge technologies to build next-gen web experiences.",
    color: "from-green-500 to-emerald-500"
  }
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="h-screen py-12 sm:py-20 px-4 sm:px-6 relative overflow-y-auto snap-start snap-always flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 sm:w-24 h-1.5 bg-gradient-primary mx-auto mb-8 sm:mb-16 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-start mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed relative backdrop-blur-sm p-4 sm:p-6 rounded-2xl glass-card">
                I'm a passionate Frontend Developer with over <span className="font-bold text-primary text-glow">1.9 years of experience</span> crafting 
                digital experiences that users love. Specializing in <span className="font-bold text-primary">React.js</span> and <span className="font-bold text-primary">Material UI</span>, 
                I transform complex problems into elegant, user-friendly solutions.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-secondary/20 opacity-20 blur-3xl rounded-full" />
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed relative backdrop-blur-sm p-6 rounded-2xl glass-card">
                My expertise spans RESTful API integration, advanced state management with <span className="font-bold text-secondary">Redux Toolkit</span>, 
                and creating performant, scalable applications. I've delivered projects that improved UI consistency by 
                <span className="font-bold text-accent"> 15%</span> and boosted user engagement significantly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/20 opacity-20 blur-3xl rounded-full" />
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed relative backdrop-blur-sm p-6 rounded-2xl glass-card">
                Currently innovating at <span className="font-bold text-accent">YesMinds Global Solution Pvt Ltd</span>, 
                I'm driven by the challenge of pushing boundaries and creating web experiences that are not just functional, 
                but truly memorable.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="perspective-card"
              >
                <Card className="h-full border-primary/20 hover:border-primary/50 transition-all glass-card hover:shadow-neon group">
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <motion.div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} inline-block`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <feature.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ 
                          background: `linear-gradient(135deg, ${feature.color})`,
                          filter: "blur(20px)",
                          zIndex: -1
                        }}
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "1.9+", label: "Years Experience" },
            { value: "15%", label: "UI Improvement" },
            { value: "18%", label: "Conversion Boost" },
            { value: "5+", label: "Major Projects" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-center p-6 rounded-2xl glass-card border border-primary/20 hover:border-primary/50 transition-all hover:shadow-neon"
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
