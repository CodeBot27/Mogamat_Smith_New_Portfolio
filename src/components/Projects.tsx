import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Image } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mts from "@/assets/mts.png";
import brew from "@/assets/brew.png";
import todo from "@/assets/todo.png";
import lyrics from "@/assets/lyrics.png";
import skylens from "@/assets/skylens.png";
import ge from "@/assets/ge.png";

const projects = [
  {
    title: "HR Management System",
    description: "A comprehensive HR management system for employee records and payroll",
    image: mts,
    tags: ["PHP","MySQL", "Css"],
    github: "#",
    live: "https://mt-solutions.wuaze.com",
  },
  {
    title: "SkyLens Weather App",
    description: "A sleek weather application with real-time updates and forecasts",
    image: skylens,
    tags: ["TypeScript", "React", "Tailwind Css"],
    github: "#",
    live: "https://skylensms.netlify.app/",
  },
  {
    title: "Beauty By Geraldine Erasmus",
    description: "Online Nail Salon Booking System",
    image: ge,
    tags: ["React", "Css", "Formspree"],
    github: "#",
    live: "https://beauty-by-geraldine.netlify.app/",
  },
  {
    title: "Lyric Snatcher",
    description: "A web app that fetches and displays song lyrics with API integration",
    image: lyrics,
    tags: ["React", "Javascript", "API"],
    github: "#",
    live: "https://lyric-snatcher-by-msmith.netlify.app/",
  },
  {
    title: "Brew Craft E-Commerce Platform",
    description: "An e-commerce platform for a craft brewery to showcase and sell their products",
    image: brew,
    tags: ["PHP", "MySQL", "Css"],
    github: "#",
    live: "https://brewcraft.wuaze.com/",
  },
  {
    title: "To-Do List App",
    description: "A simple and intuitive to-do list application to manage daily tasks",
    image: todo,
    tags: ["React", "TypeScript", "Tailwind Css"],
    github: "#",
    live: "https://msmith-todolist.netlify.app/",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">

                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black"
                      asChild
                    >
                      <a href={project.image} target="_blank" rel="noopener noreferrer">
                        <Image className="w-4 h-4 mr-2" />
                        View Image
                      </a>
                    </Button>

                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-heading font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
