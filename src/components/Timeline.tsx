import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Briefcase } from "lucide-react";

const timelineData = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Leading development of enterprise applications using React, Node.js, and cloud technologies.",
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects with focus on performance and user experience.",
  },
  {
    type: "education",
    title: "Master's in Computer Science",
    company: "University Name",
    period: "2018 - 2020",
    description: "Specialized in software engineering and distributed systems.",
  },
  {
    type: "education",
    title: "Bachelor's in Computer Science",
    company: "University Name",
    period: "2014 - 2018",
    description: "Foundation in computer science fundamentals and software development.",
  },
];

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-16 md:pl-0`}>
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-full ${item.type === "work" ? "bg-primary/10" : "bg-accent/10"}`}>
                        {item.type === "work" ? (
                          <Briefcase className="w-5 h-5 text-primary" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-accent" />
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                    <p className="text-primary mb-3">{item.company}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
