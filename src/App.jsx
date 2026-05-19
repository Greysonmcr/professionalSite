import React, { useEffect, useMemo, useState } from "react";
import headshot from "./assets/headshot.jpg";
import gatech from "./assets/Georgia-Tech-Yellow-Jackets-Logo-2015.png";
import cox from "./assets/Cox_Enterprises.jpg";
import amarok from "./assets/Amarok-logo.jpg";
import cboe from "./assets/cboe-logo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { projects } from "./data/projects";
import ProjectDetail from "./pages/ProjectDetail";
import { profile } from "./data/profile";

const educationGrad = [
  {
    school: "Georgia Institute of Technology",
    degree: "M.S. in Computer Science",
    logo: gatech,
    dates: "January 2026 - December 2026",
    details: [
      "GPA: 4.00",
      "Concentrations: Artificial Intelligence",
      "Relevant Coursework: Conversational AI, Human Computer Interaction, ML in Computational Biology"
    ],
  },
];

const educationUndergrad = [
  {
    school: "Georgia Institute of Technology",
    degree: "B.S. in Computer Science, Minor in Mathematics",
    logo: gatech,
    dates: "August 2022 - December 2025",
    details: [
      "GPA: 3.81",
      "Concentrations: Intelligence and People",
      "Relevant Coursework: Object Oriented Programming, Data Structures & Algorithms, Computational Modeling Algorithms, Systems & Networks, Artificial Intelligence, Machine Learning, Computer Vision, Perception & Robotics, Computer Law",
    ],
  },
];

const skills = [
  "Python",
  "Java",
  "JavaScript",
  "React",
  "Flask",
  "Supabase",
  "SQL",
  "PyTorch",
  "Spark",
  "D3.js",
  "Git",
  "AWS",
];

const experiences = [
  {
    role: "Software Engineering in Test Intern",
    company: "CBoe Global Markets",
    logo: cboe,
    dates: "Incoming",
    bullets: [
    ],
  },
  {
    role: "Machine Learning and AI Software Engineering Intern",
    company: "AMAROK",
    logo: amarok,
    dates: "May 2025 - September 2025",
    bullets: [
      "Developed custom transformer model in Databricks for predicting severity of incoming alarm signals with 90% accuracy",
      "Repurposed HuggingFace NLP model to classify field technician notes with 97% accuracy",
      "Automated Databricks jobs via custom Microsoft Teams bot and Databricks API",
      "Regularly evaluated the efficacy of incoming AI technologies on behalf of the company",
    ],
  },
  {
    role: "ServiceNow Delivery Admin Intern",
    company: "Cox Enterprises",
    logo: cox,
    dates: "May 2024 - August 2024",
    bullets: [
      "Re-architectured and shipped catalog items through ServiceNow; used JavaScript to incorporate additional functionality",
      "Shipped an application promoting recycling at Cox, leveraging Azure AI Vision models and the OpenAI GPT-4 API",
    ],
  },
];


function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-2xl text-slate-600">{subtitle}</p>}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = category === "All" || project.category === category;
      const searchText = `${project.title} ${project.category} ${project.description} ${project.tech.join(
        " "
      )}`.toLowerCase();

      return matchesCategory && searchText.includes(query.toLowerCase());
    });
  }, [query, category]);

    useEffect(() => {
    const savedScrollY = sessionStorage.getItem("homeScrollY");

    if (savedScrollY) {
      setTimeout(() => {
        window.scrollTo(0, Number(savedScrollY));
        sessionStorage.removeItem("homeScrollY");
      }, 100);
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight">
            {profile.name}
          </a>

          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#education" className="hover:text-slate-950">Education</a>
            <a href="#experience" className="hover:text-slate-950">Work</a>
            <a href="#projects" className="hover:text-slate-950">Projects</a>
            <a href="#about" className="hover:text-slate-950">Personal</a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="bg-stone-100 scroll-mt-20"
      >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-10">
        <div>
          <h1 className="text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
            Hey friends,
          </h1>

          <h2 className="text-5xl font-black tracking-tight text-slate-600 md:text-7xl">I'm {profile.name}.</h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-2xl bg-slate-950 px-5 py-3 text-white shadow-sm hover:bg-slate-800"
            >
              Contact Me
            </a>

            <a
              href="McReynoldsResume.pdf"
              download
              className="rounded-2xl bg-slate-950 px-5 py-3 text-white shadow-sm hover:bg-slate-800"
            >
              Download Resume
            </a>

            <a
              href={profile.linkedin}
              className="rounded-2xl bg-slate-950 px-5 py-3 text-white shadow-sm hover:bg-slate-800"
            >
              LinkedIn
            </a>
          </div>

        </div>
      <div className="flex items-center justify-center">
        <div className="relative">
          
          {/* Subtle Glow */}
          <div className="absolute inset-0 rounded-full bg-slate-300 blur-3xl opacity-30" />

          {/* Headshot */}
          <img
            src={headshot}
            alt="Headshot"
            className="
              relative
              h-80
              w-80
              rounded-full
              object-cover
              border-4
              border-white
              shadow-2xl
            "
          />
        </div>
      </div>
      </div>
      </section>

      {/* Education */}
      <section id="education" className="bg-white scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader eyebrow="Background" title="Education" />

          <div className="grid gap-5">
            {educationGrad.map((item) => (
              <div
                key={item.school}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
              <div className="flex items-start gap-4">

                <img
                  src={item.logo}
                  alt={`${item.school} logo`}
                  className="h-14 w-14 rounded-xl object-contain border border-slate-200 bg-white p-2"
                />

                <div>
                  <h3 className="text-xl font-bold">{item.school}</h3>

                  <p className="text-slate-600">
                    {item.degree}
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {item.dates}
                  </p>
                </div>

              </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid gap-5 mt-6">
            {educationUndergrad.map((item) => (
              <div
                key={item.school}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
              <div className="flex items-start gap-4">

                <img
                  src={item.logo}
                  alt={`${item.school} logo`}
                  className="h-14 w-14 rounded-xl object-contain border border-slate-200 bg-white p-2"
                />

                <div>
                  <h3 className="text-xl font-bold">{item.school}</h3>

                  <p className="text-slate-600">
                    {item.degree}
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {item.dates}
                  </p>
                </div>

              </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="experience" className="bg-stone-100 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader
            eyebrow="Work"
            title="Experience"
          />

          <div className="grid gap-5">
            {experiences.map((item) => (
              <div
                key={`${item.role}-${item.company}`}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                  <div className="flex items-start gap-4">

                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="h-14 w-14 rounded-xl object-contain border border-slate-200 bg-white p-2"
                    />

                    <div>
                      <h3 className="text-xl font-bold">
                        {item.role}
                      </h3>

                      <p className="text-slate-600">
                        {item.company}
                      </p>
                    </div>

                  </div>

                  <p className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
                    {item.dates}
                  </p>
                </div>

                <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-600">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader
            eyebrow="Portfolio"
            title="Featured Projects"
          />

          <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto]">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects by title, skill, or description..."
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-slate-300 focus:ring-4"
            />

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-slate-300 focus:ring-4"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                id={`project-${project.slug}`}
                key={project.title}
                className="scroll-mt-24 flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {project.category}
                </p>

                <h3 className="text-xl font-bold text-slate-950">{project.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {project.shortDescription}
                </p>

              <div className="mt-auto pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <Link
                    to={`/projects/${project.slug}`}
                    onClick={() => {
                      sessionStorage.setItem("homeScrollY", window.scrollY.toString());
                    }}
                    className="rounded-xl bg-slate-950 px-4 py-2 text-sm text-white hover:bg-slate-800"
                  >
                    View Project
                  </Link>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal */}
      <section id="about" className="bg-stone-100 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader
            eyebrow="Personal"
            title="More About Me"
          />

          <div className="space-y-6">

            {/* Community */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Community
              </p>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
                I am very active in Sigma Nu, my fraternity at Georgia Tech. In prior semesters, I have served as the Community Service Chair and Risk Manager, but I am currently the President. This means that I preside over all officers and am the custodian of the budget. I would consider myself very community oriented and like planning events on campus. The event I am proudest of is Snulympics, a powerlifting competition across campus with the goal of raising funds for our philanthropy, suicide prevention.
              </p>
            </div>

            {/* Fitness */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Fitness
              </p>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
                I enjoy being physically active as well. For one, I have been a dedicated gym-goer for the past six years of my life. Additionally, I enjoy playing basketball and am looking forward to joining a league wherever I happen to go. I also am an avid watcher of the NBA and a big fan of the Atlanta Hawks.
              </p>
            </div>

            {/* Cultural */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Cultural
              </p>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
                I also have a few key cultural interests as well. First, I enjoy trying new foods and going to interesting restaurants. I often find that when I go on trips, I remember the food the most. To add to this, I am really passionate about local history. This can be demonstrated in a very unique hobby of mine, metal detecting. I enjoy investigating old locations and bringing my metal detector to see if I can find any interesting artifacts.
              </p>
            </div>

            {/* Music */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Music
              </p>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
                Lastly, I love music. I have been passionately learning how to play the bass guitar for the past five years, and I am always trying out a new song.
              </p>
            </div>

          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        {profile.name}
      </footer>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}