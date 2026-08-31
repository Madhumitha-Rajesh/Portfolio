import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X,
  ChevronDown,
  Award,
  Terminal,
} from "lucide-react";
import "./App.css";

const skills = {
  Programming: ["Python", "Java", "C"],
  "Data & Analytics": ["MySQL", "Power BI", "Excel"],
  "Web Development": ["HTML", "CSS", "JavaScript"],
  "Microsoft & Automation": ["Power Apps", "UiPath"],
  Tools: ["GitHub"],
};

const experiences = [
  {
    company: "ELGI Digital Innovation Dojo",
    role: "Student Intern",
    duration: "6 months",
    project: "Student Attendance Tracker",
    tools: ["Power Apps"],
    description:
      "Worked on a student attendance tracking application using Power Apps, contributing to a digital solution for recording and managing attendance.",
  },
  {
    company: "Shanthi Gears Limited",
    role: "Student Intern",
    duration: "1 month",
    project: "ELR% & ELRE% Analysis",
    tools: ["Power BI", "Excel"],
    description:
      "Analyzed ELR% and ELRE% data for 7 machines using Power BI and Excel to understand machine-related performance data and trends.",
  },
];

const courses = [
  "Introduction to AI",
  "Data Visualization with Python",
  "UiPath Automation and Selectors",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="background-orb orb-three" />

      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-dot" />
          Madhumitha
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["About", "Skills", "Experience", "Project", "Courses", "Contact"].map(
            (item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            )
          )}
        </nav>

        <a className="nav-resume" href="/resume.pdf" download>
          Resume <Download size={15} />
        </a>
      </header>

      <main>
        <section id="home" className="hero section">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="eyebrow">
              <Sparkles size={16} />
              <span>Computer Science Student · 2024 — 2027</span>
            </div>

            <h1>
              Building ideas into <span>practical digital solutions.</span>
            </h1>

            <p className="hero-text">
              Hi, I'm Madhumitha Rajesh — an aspiring software developer
              interested in software development, data analytics, and
              automation.
            </p>

            <div className="hero-actions">
              <a href="#project" className="button button-primary">
                View my work <ArrowUpRight size={18} />
              </a>
              <a href="#contact" className="button button-secondary">
                Let's connect <Mail size={17} />
              </a>
            </div>

            <div className="social-row">
              <a
                href="https://github.com/Madhumitha-Rajesh"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={19} />
              </a>
              <a
                href="https://www.linkedin.com/in/madhumitha-r-735ab8348"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
              </a>
              <a
                href="https://leetcode.com/u/Madhumitha_Rajesh/"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="leetcode-icon"
              >
                LC
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <div className="photo-card">
              <div className="photo-placeholder">
                <div className="photo-inner">
                  <span>MR</span>
                 
                </div>
              </div>
              <div className="floating-card floating-card-top">
                <Code2 size={17} />
                <span>Developer mindset</span>
              </div>
              <div className="floating-card floating-card-bottom">
                <Terminal size={17} />
                <span>Always learning</span>
              </div>
            </div>
          </motion.div>

          <a className="scroll-hint" href="#about">
            <span>Scroll to explore</span>
            <ChevronDown size={17} />
          </a>
        </section>

        <section id="about" className="section content-section">
          <SectionHeading number="01" title="About me" />
          <div className="about-grid">
            <motion.div
              className="about-card main-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="section-kicker">A little about me</p>
              <h3>Curious, practical, and always learning.</h3>
              <p>
                I'm Madhumitha Rajesh, currently pursuing my B.Sc. in Computer
                Science at PSGR Krishnammal College for Women. I'm an aspiring
                software developer interested in building practical
                applications and exploring software development, data
                analytics, and automation.
              </p>
            </motion.div>

            <div className="about-stats">
              <InfoCard icon={<GraduationCap />} label="Degree" value="B.Sc. Computer Science" />
              <InfoCard icon={<MapPin />} label="Based in" value="Coimbatore, Tamil Nadu" />
            </div>
          </div>
        </section>

        <section id="skills" className="section content-section">
          <SectionHeading number="02" title="Skills" />
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                className="skill-card"
                key={category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="skill-icon">
                  <Code2 size={19} />
                </div>
                <h3>{category}</h3>
                <div className="skill-tags">
                  {items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="section content-section">
          <SectionHeading number="03" title="Experience" />
          <div className="timeline">
            {experiences.map((experience, index) => (
              <motion.article
                className="experience-card"
                key={experience.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="timeline-marker">
                  <BriefcaseBusiness size={17} />
                </div>
                <div className="experience-main">
                  <div className="experience-top">
                    <div>
                      <p className="section-kicker">{experience.duration}</p>
                      <h3>{experience.company}</h3>
                      <p className="role">{experience.role}</p>
                    </div>
                    <span className="experience-project">{experience.project}</span>
                  </div>
                  <p>{experience.description}</p>
                  <div className="skill-tags">
                    {experience.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="project" className="section content-section">
          <SectionHeading number="04" title="Featured project" />
          <motion.article
            className="project-card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="project-preview">
              <div className="browser-bar">
                <span /><span /><span />
              </div>
              <div className="simulation-preview">
                <div className="petri-dish">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <i key={i} style={{
                      left: `${14 + ((i * 31) % 72)}%`,
                      top: `${15 + ((i * 47) % 68)}%`,
                      animationDelay: `${(i % 5) * 0.35}s`
                    }} />
                  ))}
                </div>
                <div className="preview-controls">
                  <span>Temperature</span>
                  <b>37°C</b>
                  <span>Nutrients</span>
                  <b>High</b>
                  <span>Antibiotic</span>
                  <b>Ampicillin</b>
                </div>
              </div>
            </div>

            <div className="project-info">
              <p className="section-kicker">01 · Interactive simulation</p>
              <h3>Bacterial Growth Simulator</h3>
              <p>
                A virtual microbiology lab that simulates bacterial growth on
                an agar plate. Users can select bacteria, adjust temperature
                and nutrient levels, choose antibiotics and concentrations,
                and observe bacterial growth and the emergence of
                antibiotic-resistant colonies.
              </p>
              <p>
                Designed and developed the interactive simulation application,
                including the React frontend, simulation logic, user controls,
                colony visualization, antibiotic effects, and resistance
                simulation.
              </p>
              <div className="project-tech">
                {["React.js", "Vite", "JavaScript", "HTML", "CSS"].map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href="https://bacterial-sim.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary"
                >
                  Live demo <ExternalLink size={17} />
                </a>
                <a
                  href="https://github.com/Madhumitha-Rajesh/bacterial-sim"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  GitHub <Github size={17} />
                </a>
              </div>
            </div>
          </motion.article>
        </section>

        <section id="courses" className="section content-section">
          <SectionHeading number="05" title="Courses" />
          <div className="courses-list">
            {courses.map((course, index) => (
              <motion.div
                className="course-item"
                key={course}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <span className="course-number">0{index + 1}</span>
                <div>
                  <h3>{course}</h3>
                  <p>Coursera</p>
                </div>
                <Award size={20} />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="section content-section contact-section">
          <SectionHeading number="06" title="Let's connect" />
          <div className="contact-card">
            <div>
              <p className="section-kicker">Have an opportunity?</p>
              <h2>Let's build something useful.</h2>
              <p>
                I'm open to learning opportunities, internships, and
                conversations around software development, analytics, and
                automation.
              </p>
            </div>
            <div className="contact-actions">
              <a href="mailto:madhumitharajesh04@gmail.com" className="contact-link">
                <Mail size={18} />
                <span>madhumitharajesh04@gmail.com</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/madhumitha-r-735ab8348"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Madhumitha Rajesh</span>
        <span>Designed & built with curiosity ✦</span>
      </footer>
    </div>
  );
}

function SectionHeading({ number, title }) {
  return (
    <div className="section-heading">
      <div>
        <span className="heading-number">{number}</span>
        <h2>{title}</h2>
      </div>
      <span className="heading-line" />
    </div>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="info-card">
      <div className="info-icon">{icon}</div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

export default App;