import { motion } from "framer-motion";
import birlasoftLogo from "@/assets/logos/birlasoft.png";
import globallogicLogo from "@/assets/logos/globallogic.png";
import mxLogo from "@/assets/logos/mx.png";
import healthcatalystLogo from "@/assets/logos/healthcatalyst.png";
import pluralsightLogo from "@/assets/logos/pluralsight.png";
import solutionreachLogo from "@/assets/logos/solutionreach.png";
import ancestryLogo from "@/assets/logos/ancestry.png";

const experiences = [
  {
    logo: birlasoftLogo,
    company: "Birlasoft",
    title: "Senior Software Engineer",
    period: "May 2025 — Present",
    location: "Remote",
    bullets: [
      "Designed backend services using Python, Django, and Flask for healthcare analytics platforms.",
      "Built RESTful APIs for large-scale healthcare datasets, improving data accessibility.",
      "Optimized ETL workflows, reducing reporting latency by 31% across high-volume records.",
      "Integrated services with PostgreSQL and enterprise data pipelines.",
    ],
  },
  {
    logo: globallogicLogo,
    company: "GlobalLogic",
    title: "Lead Software Engineer",
    period: "June 2020 — April 2025",
    location: "Remote",
    bullets: [
      "Developed scalable web applications using Python, Django, JavaScript for online learning workflows.",
      "Created responsive interfaces improving learner progress tracking speed by 27%.",
      "Implemented reusable components accelerating feature delivery across modules.",
      "Optimized SQL queries and server-side processing for platform efficiency.",
    ],
  },
  {
    logo: mxLogo,
    company: "MX Technologies",
    title: "Senior Software Engineer",
    period: "Nov 2018 — May 2020",
    location: "Lehi, UT",
    bullets: [
      "Built secure backend services for financial connectivity using Go, Kubernetes, PostgreSQL.",
      "Improved account-link rates by 24% across 150+ partner institutions.",
      "Developed data pipelines supporting 2.3M+ daily events, reducing latency by 19%.",
      "Improved platform uptime to 99.95% by strengthening authentication flows.",
    ],
  },
  {
    logo: healthcatalystLogo,
    company: "Health Catalyst",
    title: "Software Engineer",
    period: "Oct 2016 — Sep 2018",
    location: "Salt Lake City, UT",
    bullets: [
      "Engineered data services for clinical, financial, and operational analytics dashboards.",
      "Reduced reporting latency by 31% across 1M+ healthcare data records using Java, PostgreSQL, and REST APIs.",
    ],
  },
  {
    logo: pluralsightLogo,
    company: "Pluralsight",
    title: "Software Engineer",
    period: "Oct 2013 — Sep 2016",
    location: "Farmington, UT",
    bullets: [
      "Built backend services for learning paths and skill assessments using C#, .NET, SQL Server, Azure.",
      "Improved learner progress tracking by 27%, supporting 100K+ monthly active users.",
    ],
  },
  {
    logo: solutionreachLogo,
    company: "Solutionreach",
    title: "Junior Software Developer",
    period: "Oct 2010 — Sep 2013",
    location: "Lehi, UT",
    bullets: [
      "Developed appointment reminders and patient messaging using PHP, JavaScript, MySQL.",
      "Increased appointment confirmations by 22% and reduced no-shows by 11% across 200+ practices.",
    ],
  },
  {
    logo: ancestryLogo,
    company: "Ancestry",
    title: "Software Engineering Intern",
    period: "Jun 2010 — Sep 2010",
    location: "Lehi, UT",
    bullets: [
      "Tested and debugged features for record search and user tree-building workflows.",
      "Reduced QA defects by 17% across 3 release cycles.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground mb-12">14+ years across healthcare, fintech, SaaS & edtech</p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center shrink-0 overflow-hidden p-2">
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-mono text-sm">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                      <p className="text-xs text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-secondary-foreground">
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
