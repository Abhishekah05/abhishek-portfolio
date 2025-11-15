import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="h-screen py-12 sm:py-20 px-4 sm:px-6 relative snap-start snap-always flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
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
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="hidden sm:block"
            >
              <Sparkles className="h-5 w-5 sm:h-8 sm:w-8 text-primary" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent px-2">
              Get In Touch
            </h2>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="hidden sm:block"
            >
              <Sparkles className="h-5 w-5 sm:h-8 sm:w-8 text-accent" />
            </motion.div>
          </div>
          <div className="w-20 sm:w-24 h-1.5 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="border-primary/30 glass-card hover:shadow-neon transition-all relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity"
                initial={false}
              />
              <CardContent className="p-8 md:p-12 relative z-10">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-center text-lg md:text-xl text-foreground/90 mb-10 leading-relaxed"
                >
                  I'm always excited to connect with fellow developers, potential collaborators, and innovative teams. 
                  Let's create something <span className="font-bold text-primary">extraordinary</span> together!
                </motion.p>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {[
                    { icon: Mail, label: "Email", value: "abhishekah510@gmail.com", href: "mailto:abhishekah510@gmail.com" },
                    { icon: MapPin, label: "Location", value: "Mysore, Karnataka", href: null },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center gap-4 p-5 rounded-xl glass-card hover:bg-muted/50 transition-all border border-primary/10 hover:border-primary/30 group/item">
                        <motion.div 
                          className="p-3 rounded-lg bg-gradient-primary"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <item.icon className="h-6 w-6 text-primary-foreground" />
                        </motion.div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                          {item.href ? (
                            <a 
                              href={item.href}
                              className="font-medium text-foreground hover:text-primary transition-colors group-hover/item:text-primary"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-medium text-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-4 justify-center"
                >
                  {[
                    { icon: Mail, label: "Send Email", href: "mailto:abhishekah510@gmail.com", gradient: "from-blue-500 to-cyan-500" },
                    { icon: Github, label: "GitHub", href: "https://github.com/Abhishekah05", gradient: "from-purple-500 to-pink-500" },
                    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-hiremath-8a8661212", gradient: "from-green-500 to-emerald-500" },
                  ].map((button, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1 + index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${button.gradient} hover:opacity-90 text-white shadow-neon border-0 transition-all`}
                        asChild
                      >
                        <a href={button.href} target="_blank" rel="noopener noreferrer">
                          <button.icon className="mr-2 h-5 w-5" />
                          {button.label}
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.3 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground">
              © 2024 Abhishek Hiremath. Built with <span className="text-primary">React.js</span>, <span className="text-primary">Three.js</span> & <span className="text-primary">Framer Motion</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
