import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import profileImg from "@/assets/profile.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/70" />
      <div className="section-container relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden glow-border">
              <img src={profileImg} alt="Krzysztof Bednarczuk" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Senior Software Engineer</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Krzysztof{" "}
              <span className="gradient-text">Bednarczuk</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed">
              14+ years building scalable backend systems, web applications, and data-driven platforms across healthcare, SaaS, and enterprise environments.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <ContactChip icon={<MapPin className="w-4 h-4" />} text="St. George, UT" />
              <ContactChip icon={<Mail className="w-4 h-4" />} text="krzysztof210.dev@gmail.com" href="mailto:krzysztof210.dev@gmail.com" />
              <ContactChip icon={<Phone className="w-4 h-4" />} text="(312) 536-3767" href="tel:+13125363767" />
              <ContactChip icon={<Linkedin className="w-4 h-4" />} text="LinkedIn" href="https://linkedin.com/in/kbeds" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactChip = ({ icon, text, href }: { icon: React.ReactNode; text: string; href?: string }) => {
  const content = (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm border border-border hover:border-primary/40 transition-colors">
      <span className="text-primary">{icon}</span>
      {text}
    </span>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : content;
};

export default HeroSection;
