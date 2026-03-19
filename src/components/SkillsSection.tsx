import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Python Development",
    skills: ["Python", "Django", "Flask", "FastAPI", "REST APIs", "Microservices", "OOP"],
  },
  {
    title: "Core Languages",
    skills: ["Python", "SQL", "JavaScript", "Go", "PHP", "C#"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "Query Optimization", "Data Modeling"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Kubernetes", "Docker", "CI/CD", "Monitoring"],
  },
  {
    title: "Security & Integration",
    skills: ["OAuth2", "JWT", "RBAC", "EHR/EMR", "Payment Gateways"],
  },
  {
    title: "Testing & Tools",
    skills: ["Pytest", "Unit Testing", "Postman", "Git", "JIRA", "Agile/Scrum"],
  },
  {
    title: "Frontend",
    skills: ["JavaScript", "jQuery", "HTML", "CSS"],
  },
  {
    title: "Domain Expertise",
    skills: ["Healthcare", "FinTech", "SaaS", "EdTech", "High-Volume Systems"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground mb-12">Technologies and domains I specialize in</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-card p-6"
            >
              <h3 className="font-semibold text-sm text-primary font-mono mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
