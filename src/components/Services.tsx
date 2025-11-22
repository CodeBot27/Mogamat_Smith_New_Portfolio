import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Laptop, Palette, Smartphone, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Laptop,
    title: "Web Development",
    description: "Building responsive, high-performance websites and web applications using modern frameworks and best practices.",
    features: ["React & Next.js", "TypeScript", "RESTful APIs", "Performance Optimization"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive user interfaces that provide exceptional user experiences across all devices.",
    features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications that work seamlessly on iOS and Android devices.",
    features: ["Flutter", "Progressive Web Apps", "Responsive Design", "App Store Deployment"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Architecting robust backend systems with secure APIs, databases, and cloud infrastructure.",
    features: ["Node.js", "MongoDB", "Firebase", "API Development"],
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 md:py-32 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Services <span className="text-primary">Offered</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 h-full group">
                <CardContent className="p-6 md:p-8 justify-center items-center text-center">
                  <div className="mb-4 md:mb-6 inline-flex p-3 md:p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">{service.description}</p>
                  <ul className="space-y-2 flex flex-col items-center">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm md:text-base">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
