import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Next.js", level: 88 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 83 },
      { name: "PHP", level: 88 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 93 },
      { name: "Netlify & Vercel", level: 95 },
      { name: "Photoshop", level: 77 },
      { name: "Figma", level: 85 },
    ],
  },
];

const CircularProgress = ({ percentage, name, delay }: { percentage: number; name: string; delay: number }) => {
  const [progress, setProgress] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, percentage, delay]);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="relative group"
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="transform -rotate-90 w-32 h-32">
          {/* Background circle */}
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-muted/20"
          />
          {/* Progress circle */}
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="text-primary transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-heading font-bold">{progress}%</span>
        </div>
      </div>
      <p className="text-center mt-3 font-medium group-hover:text-primary transition-colors">{name}</p>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden w-full">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern technologies and frameworks with a passion for continuous learning
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-8 text-center">
                <span className="relative inline-block">
                  {category.category}
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-primary/50"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: categoryIndex * 0.2 + 0.3, duration: 0.6 }}
                  />
                </span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-items-center">
                {category.skills.map((skill, skillIndex) => (
                  <CircularProgress
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.level}
                    delay={categoryIndex * 200 + skillIndex * 100}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 bg-card/50 backdrop-blur border border-primary/20 rounded-2xl">
            <p className="text-lg md:text-xl font-heading">
              Always learning and exploring{" "}
              <span className="text-primary font-bold">new technologies</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
