import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "Outstanding work! The portfolio website exceeded all expectations. Professional, responsive, and delivered on time. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager, Digital Co",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "Exceptional developer with great attention to detail. The application runs flawlessly and the code quality is top-notch.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthLab",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content: "A pleasure to work with! Great communication, creative solutions, and delivered a beautiful, high-performing website.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Founder, StartupHub",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    content: "Transformed our vision into reality. The web app is fast, intuitive, and our users love it. Couldn't ask for better results!",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "CTO, InnovateTech",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    content: "Incredible technical skills combined with excellent project management. Delivered a complex application on schedule and budget.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Designer, CreativeStudio",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    content: "Best developer I've worked with. Pixel-perfect implementation and great at collaborating on design decisions.",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 md:w-5 md:h-5 fill-primary"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6 md:p-8">
                  <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/20 mb-4" />
                  <p className="text-sm md:text-base text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <div className="flex items-center gap-3 md:gap-4">
                    <Avatar className="w-10 h-10 md:w-12 md:h-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm md:text-base">{testimonial.name}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
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
};

export default Testimonials;
