import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "./ParticlesBackground";
import { toast } from "sonner";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    const cvUrl = "/Mogamat_Smith_CV.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Mogamat_Smith_CV.pdf";
    link.target = "_blank";
    link.click();

    toast.success("Downloading CV...");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full"
    >
      <ParticlesBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="text-primary relative inline-block">
              Mogamat Smith
              {/* <motion.span
                className="absolute -bottom-4 left-0 w-full h-1 bg-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              /> */}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Crafting beautiful digital experiences with modern technologies
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {/* <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white dark:hover:text-white w-40 sm:w-auto bg-background/80 backdrop-blur-sm"
              onClick={handleDownloadCV}
            >
              <Download className="w-4 h-4 mr-1" />
              Download CV
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button> */}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
        >
          {/* <button
            onClick={scrollToAbout}
            className="text-primary hover:text-primary/80 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={32} />
          </button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
