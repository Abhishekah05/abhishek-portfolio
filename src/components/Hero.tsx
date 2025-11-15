import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 relative overflow-hidden snap-start snap-always">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      <div className="absolute inset-0 opacity-20 sm:opacity-40 animate-pulse" style={{ background: 'var(--gradient-mesh)' }} />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-28 h-28 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-primary p-1 shadow-neon relative group">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              <motion.span 
                className="text-4xl sm:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                AH
              </motion.span>
            </div>
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0, 217, 255, 0.3)",
                  "0 0 60px rgba(0, 217, 255, 0.6)",
                  "0 0 20px rgba(0, 217, 255, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="hidden sm:block"
            >
              <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
            </motion.div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent text-glow px-2">
              Abhishek Hiremath
            </h1>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="hidden sm:block"
            >
              <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-secondary" />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary mb-4 sm:mb-6 font-semibold px-4"
        >
          Frontend Developer & UI Architect
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Transforming ideas into <span className="text-primary font-semibold">immersive digital experiences</span> with React.js, 
          cutting-edge animations, and pixel-perfect design. 
          <br className="hidden sm:block" />
          <span className="sm:inline block mt-1 sm:mt-0">Building the future, one component at a time.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 px-4"
        >
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-neon transition-all hover:scale-110 relative group overflow-hidden w-full sm:w-auto"
            onClick={() => scrollToSection('#projects')}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative z-10">Explore My Work</span>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 backdrop-blur-sm glass-card w-full sm:w-auto"
            onClick={() => scrollToSection('#contact')}
          >
            <Mail className="mr-2 h-4 w-4" />
            Let's Connect
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-4 justify-center"
        >
          {[
            { icon: Github, href: "https://github.com/Abhishekah05", delay: 0 },
            { icon: Linkedin, href: "https://www.linkedin.com/in/abhishek-hiremath-8a8661212", delay: 0.1 },
            { icon: Mail, href: "mailto:abhishekah510@gmail.com", delay: 0.2 },
          ].map(({ icon: Icon, href, delay }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + delay }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full glass-card hover:bg-primary/20 hover:text-primary transition-all border border-primary/20 hover:border-primary hover:shadow-neon"
                asChild
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
