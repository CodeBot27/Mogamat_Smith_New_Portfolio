import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Code2, Users, Award, Coffee } from "lucide-react";

const stats = [
  {
    icon: Code2,
    value: 20,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: 10,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: 4,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Code2,
    value: 1000,
    suffix: "+",
    label: "Errors Endured",
  },
];

const CountUp = ({ end, duration = 2, inView }: { end: number; duration?: number; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return <span>{count}</span>;
};

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-12 md:py-20 bg-primary/5 border-y border-primary/10 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-3 md:mb-4 inline-flex p-3 md:p-4 rounded-full bg-primary/10">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-2">
                <CountUp end={stat.value} inView={inView} />
                {stat.suffix}
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
