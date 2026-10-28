import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    number: "01",
    name: "GodrejGoTuff",
    category: "MOBILE APP · REACT NATIVE",
    description:
      "A B2B app for construction materials, helping users manage orders, track deliveries, check payment history, and send enquiries.",
    tags: ["React Native", "Firebase", "Maps", "Payments", "i18next"],
    visual: "gotuff",
    type: "B2B COMMERCE / FIELD OPERATIONS",
    visualTitle: <>Your business,<br /><b>in motion.</b></>,
  },
  {
    number: "02",
    name: "Prostream",
    category: "MOBILE APP · REST API",
    description:
      "Project management features with charts, portfolio views, task updates, and secure Azure AD B2B/B2C authentication.",
    tags: ["React Native", "REST APIs", "Azure AD"],
    visual: "prostream",
    type: "PROJECT MANAGEMENT",
  },
  {
    number: "03",
    name: "SalesAssist",
    category: "MOBILE APP · OAUTH2",
    description:
      "Sales operations app integrated with Infor ERP for orders, approvals, stock queries, shipment status, and dealer workflows.",
    tags: ["React Native", "OAuth2", "Infor ERP", "Push notifications"],
    visual: "sales",
    type: "SALES / ERP INTEGRATION",
  },
  {
    number: "04",
    name: "MyConnect",
    category: "INTERNAL APP · UX",
    description:
      "An internal employee app bringing attendance, payroll, leave, and appointments into a simpler daily experience.",
    tags: ["React Native", "React Navigation", "Mobile UX"],
    visual: "connect",
    type: "EMPLOYEE EXPERIENCE",
  },
];

const skillGroups = [
  {
    title: "01 / MOBILE & FRONTEND",
    skills: ["React Native", "React.js", "React Navigation", "Redux", "React Hooks", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "02 / API & AUTHENTICATION",
    skills: ["REST APIs", "Axios", "OAuth2", "Azure AD", "JSON", "Push Notifications", "Razorpay"],
  },
  {
    title: "03 / TOOLS & QUALITY",
    skills: ["Firebase", "Crashlytics", "Android Studio", "Xcode", "Postman", "Git & GitHub", "VS Code", "Agile", "Performance Optimization"],
  },
];

function Arrow({ children = "↗" }) {
  return <span aria-hidden="true">{children}</span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Work", "#work"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
  ];
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Shubham Neman home">SN<span>.</span></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>
        {open ? "×" : "☰"}
      </button>
      <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let’s talk <Arrow /></a>
      </nav>
    </header>
  );
}

function PhoneIllustration() {
  return (
    <div className="hero-art" aria-label="Decorative mobile application illustration">
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <div className="floating-label label-top">MOBILE / ENGINEERING</div>
      <div className="phone phone-back">
        <div className="phone-camera" /><div className="mini-line" /><div className="mini-line short" />
        <div className="mini-card" /><div className="mini-card second" />
      </div>
      <div className="phone phone-front">
        <div className="phone-top"><span>9:41</span><span>●●●</span></div>
        <div className="app-greeting">Good morning,</div><div className="app-name">Your next move.</div>
        <div className="app-chart">{Array.from({ length: 7 }, (_, i) => <span key={i} />)}</div>
        <div className="app-row"><i /><div><b>Project overview</b><small>Updated just now</small></div><strong>↗</strong></div>
        <div className="app-row"><i className="soft" /><div><b>Order tracking</b><small>On its way</small></div><strong>↗</strong></div>
        <div className="app-tab"><span>⌂</span><span>▦</span><span>◉</span><span>☻</span></div>
      </div>
      <div className="floating-label label-bottom"><span className="tiny-spark">✳</span> BUILT FOR PEOPLE</div>
      <div className="hero-cross cross-one">+</div><div className="hero-cross cross-two">+</div>
    </div>
  );
}

function ProjectArtwork({ project }) {
  if (project.visual === "gotuff") {
    return <div className="mock-dashboard">
      <div className="mock-top"><span>gotuff</span><span className="mock-avatar">SN</span></div>
      <div className="mock-title">Your business,<br /><b>in motion.</b></div>
      <div className="mock-stat-row"><div><small>Active orders</small><strong>128</strong></div><div><small>Deliveries</small><strong>24 <i>↗</i></strong></div></div>
      <div className="mock-map"><span className="map-route" /><span className="map-pin pin-a" /><span className="map-pin pin-b" /><span className="map-pin pin-c" /></div>
    </div>;
  }
  if (project.visual === "prostream") {
    return <div className="stream-board">
      <div className="board-head"><span>Portfolio overview</span><span>•••</span></div>
      <div className="board-number">84<span>%</span><small>Completion</small></div>
      <div className="progress"><i /></div>
      <div className="board-bars">{Array.from({ length: 7 }, (_, i) => <i key={i} />)}</div>
      <div className="board-foot"><span>Tasks on track</span><b>↗</b></div>
    </div>;
  }
  if (project.visual === "sales") {
    return <div className="sales-screen">
      <div className="sales-top"><span>SalesAssist</span><span>◉</span></div>
      <div className="sales-title">Good to see you.</div><div className="sales-sub">What would you like to do today?</div>
      {[["↗", "Create an order", "Start a new customer order"], ["▤", "Check shipment", "Track delivery status"], ["◎", "View quotations", "Manage customer quotes"]].map(([icon, title, sub]) =>
        <div className="sales-action" key={title}><i>{icon}</i><span><b>{title}</b><small>{sub}</small></span></div>)}
    </div>;
  }
  return <div className="connect-screen">
    <div className="connect-avatar">✳</div><div className="connect-greeting">Your workday,<br /><b>in one place.</b></div>
    <div className="connect-tiles">{[["▦", "Attendance"], ["◷", "Leave"], ["₹", "Payroll"], ["☷", "Appointments"]].map(([icon, label]) =>
      <span key={label}>{icon}<small>{label}</small></span>)}</div>
  </div>;
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-visual visual-${project.visual}`}>
        <div className="visual-kicker">{project.type}</div>
        <ProjectArtwork project={project} />
        <span className="visual-index">{project.number}</span>
      </div>
      <div className="project-info">
        <div><p className="project-type">{project.category}</p><h3>{project.name}</h3><p className="project-desc">{project.description}</p></div>
        <span className="project-arrow"><Arrow /></span>
      </div>
      <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </article>
  );
}

function SectionHeading({ eyebrow, note, mark }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p>{mark ? <span className="heading-mark">{mark}</span> : <span className="section-note">{note}</span>}</div>;
}

function App() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <Header />
      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR THE RIGHT OPPORTUNITY</p>
            <h1>Building mobile<br />experiences that<br /><span className="accent">work beautifully.</span></h1>
            <p className="hero-intro">I’m Shubham Neman — a React Native and Mobile App Developer creating dependable Android, iOS, and web applications with thoughtful UX and clean engineering.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <Arrow>↘</Arrow></a>
              <a className="text-link" href="mailto:shubhamneman@gmail.com">Get in touch <Arrow /></a>
            </div>
            <div className="hero-meta">
              <div><strong>3.8+ years</strong><span>Professional experience</span></div>
              <div><strong>iOS + Android</strong><span>Cross-platform development</span></div>
              <div><strong>20–30%</strong><span>App load-time improvement</span></div>
            </div>
          </div>
          <PhoneIllustration />
          <div className="scroll-note"><span className="scroll-line" /> SCROLL TO EXPLORE</div>
        </section>

        <section className="intro-strip"><div className="section-wrap strip-inner"><span>MY FOCUS</span><p>Mobile apps <b>✳</b> Enterprise solutions <b>✳</b> Performance <b>✳</b> User-first experiences</p></div></section>

        <section className="section-wrap section-block" id="about">
          <SectionHeading eyebrow="01 / A LITTLE ABOUT ME" mark="↘" />
          <div className="about-grid">
            <h2>Good software should feel <span className="muted">simple.</span></h2>
            <div className="about-copy">
              <p>I’m a mobile app developer at Godrej Infotech Ltd, working across React Native and web technologies to turn complex business workflows into practical digital products.</p>
              <p>My work includes ERP integrations, secure authentication, payment experiences, real-time tracking, and performance improvements for enterprise applications on Android and iOS.</p>
              <a className="text-link" href="https://www.linkedin.com/in/shubhamneman" target="_blank" rel="noreferrer">More about my journey <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block work-section" id="work">
          <SectionHeading eyebrow="02 / SELECTED WORK" note="A few projects from my journey" />
          <div className="work-intro"><h2>Work that <span className="muted">moves things forward.</span></h2><p>Enterprise apps built around real users, everyday workflows, and reliable experiences.</p></div>
          <div className="project-grid">{projects.map(project => <ProjectCard key={project.name} project={project} />)}</div>
          <p className="project-disclaimer">Project descriptions are based on my role and contributions. Product-card artwork is illustrative and not a screenshot of company software.</p>
        </section>

        <section className="experience-band" id="experience">
          <div className="section-wrap section-block">
            <SectionHeading eyebrow="03 / EXPERIENCE" note="Growing through meaningful work" />
            <h2>From shipping features<br />to <span className="muted">building better systems.</span></h2>
            <div className="timeline">
              <article className="timeline-item"><div className="timeline-date">FEB 2025 — PRESENT</div><div className="timeline-main"><h3>Assistant Manager — Mobile App Developer</h3><p className="timeline-company">Godrej Infotech Ltd <span>· Mumbai, India</span></p><ul><li>Implemented OAuth2 authentication for secure Infor ERP integration across pre-production and production environments.</li><li>Integrated WebView-based payments and payment-history tracking.</li><li>Improved application load time by 20–30% through performance optimization and efficient UI rendering.</li><li>Improved crash monitoring using React Hooks, Redux, and Firebase Crashlytics.</li></ul></div></article>
              <article className="timeline-item"><div className="timeline-date">JAN 2023 — JAN 2025</div><div className="timeline-main"><h3>Senior Executive — Mobile App Developer</h3><p className="timeline-company">Godrej Infotech Ltd <span>· Mumbai, India</span></p><ul><li>Built and maintained enterprise React Native apps for Android and iOS.</li><li>Integrated REST APIs and caching to improve screen transitions and reduce API load.</li><li>Contributed to testing, deployment, and documentation in an Agile team.</li></ul></div></article>
              <article className="timeline-item"><div className="timeline-date">2021</div><div className="timeline-main"><h3>Web Design Internship</h3><p className="timeline-company">Kreartors Pvt. Ltd.</p><p className="timeline-detail">Worked on website design and strengthened early front-end and web-design skills.</p></div></article>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <SectionHeading eyebrow="04 / TOOLKIT" note="Tools I use to make ideas real" />
          <div className="skills-layout"><h2>Curious by nature.<br /><span className="muted">Practical by design.</span></h2><div className="skills-groups">
            {skillGroups.map(group => <div className="skill-group" key={group.title}><p>{group.title}</p><div className="skill-pills">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}
          </div></div>
          <div className="education-row"><div><p className="eyebrow">EDUCATION</p><h3>Bachelor of Engineering</h3><p>St. John College of Engineering and Management · 2018–2022</p></div><div className="education-mark">8.62 <span>CGPA</span></div></div>
          <div className="award-row"><span>✳</span><p><b>Best Team Project</b> — Godrej Infotech Ltd, for contributions to the Prostream project.</p></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <p className="eyebrow">05 / WHAT’S NEXT?</p>
            <h2>Have a good project<br />in mind? <span>Let’s build it.</span></h2>
            <p className="contact-copy">I’m always happy to connect about mobile development, product engineering, and interesting challenges.</p>
            <a className="contact-email" href="mailto:shubhamneman@gmail.com">shubhamneman@gmail.com <Arrow /></a>
            <div className="contact-bottom"><span>MUMBAI, INDIA</span><div><a href="https://www.linkedin.com/in/shubhamneman" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="mailto:shubhamneman@gmail.com">EMAIL ↗</a></div><span>© {new Date().getFullYear()} SHUBHAM NEMAN</span></div>
          </div>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
