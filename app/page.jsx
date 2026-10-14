import Link from "next/link";
import { GoArrowDown, GoArrowRight, GoArrowUpRight } from "react-icons/go";
import data from "../data.json";
import { projects } from "../lib/projects";
import { ProjectCard } from "./components/project-card";
import { SystemSketch } from "./components/system-sketch";
import { ContactBlock } from "./components/contact-block";

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero wrap" aria-labelledby="intro-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> James Hartley / Software engineer
          </p>
          <h1 id="intro-title">
            Built for the
            <br />
            <span>real world.</span>
          </h1>
          <p className="hero-description">
            I turn complex problems into dependable software. From C# and .NET
            systems to thoughtful interfaces and a little game development.
          </p>
          <div className="button-row">
            <a href="#work" className="button button-primary">
              Explore my work <GoArrowDown />
            </a>
            <Link href="/resume" className="text-link">
              View résumé <GoArrowUpRight />
            </Link>
          </div>
          <p className="hero-location">
            <span className="location-mark">↗</span> Based in {data.location}{" "}
            <span className="muted">/</span> Building with intention
          </p>
        </div>
        <SystemSketch />
        <div className="hero-bottom">
          <span>Practical thinking. Thoughtful execution.</span>
          <a href="#work">
            Scroll to explore <GoArrowDown />
          </a>
        </div>
      </section>
      <div className="stack-strip">
        <div className="wrap stack-inner">
          <span className="eyebrow">My everyday toolkit</span>
          <div>
            {["C#", ".NET", "TypeScript", "React", "PostgreSQL", "Unity"].map(
              (skill) => (
                <span key={skill}>{skill}</span>
              ),
            )}
          </div>
        </div>
      </div>
      <section id="work" className="section wrap" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2 id="work-title">
              A practical mind.
              <br />A playful side.
            </h2>
          </div>
          <div className="section-intro">
            <p>
              My day job has been about reliable systems. My personal projects
              explore interaction, creativity, and the satisfaction of making
              something work.
            </p>
            <Link className="text-link" href="/projects">
              All projects <GoArrowRight />
            </Link>
          </div>
        </div>
        <div className="featured-grid">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <Link href="/projects/tafl" className="project-teaser">
          <span className="eyebrow">Also in the archive</span>
          <span>
            Tafl: A King Pass{" "}
            <small>Strategy, systems, and lessons learned</small>
          </span>
          <GoArrowUpRight />
        </Link>
      </section>
      <section className="experience-band" aria-labelledby="experience-title">
        <div className="section wrap experience-layout">
          <div>
            <p className="eyebrow">02 / In production</p>
            <h2 id="experience-title">
              Software is about
              <br />
              <span className="accent">people, too.</span>
            </h2>
            <p className="section-description">
              My path into engineering started close to the people using the
              software. That perspective still shapes how I build.
            </p>
            <Link href="/resume" className="text-link">
              The full experience <GoArrowUpRight />
            </Link>
          </div>
          <div className="experience-list">
            {data.resume.experience.slice(0, 2).map((job, i) => (
              <article key={job.role}>
                <div className="job-top">
                  <span className="eyebrow">{job.company}</span>
                  <span>{job.years}</span>
                </div>
                <h3>{job.role}</h3>
                <p>
                  {i === 0
                    ? "Maintained core C# systems and shipped backend services and frontend features with .NET, PostgreSQL, React, and TypeScript."
                    : "Led and mentored a seven-person support team, and built internal tools to make incident resolution more consistent."}
                </p>
                <div className="tag-row">
                  {(i === 0
                    ? ["Full-stack development", "Legacy systems"]
                    : ["Team leadership", "Internal tooling"]
                  ).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="about"
        className="section wrap about-layout"
        aria-labelledby="about-title"
      >
        <div>
          <p className="eyebrow">03 / A bit about me</p>
          <h2 id="about-title">Curiosity built in.</h2>
        </div>
        <div>
          <p className="about-lead">
            I like understanding how things work.
            <br />
            Then making them work better.
          </p>
          <p>
            That thread runs through my career: hands-on technical work, helping
            customers, leading a support team, and building software. I care
            about the details that make a system easier to use and easier to
            maintain.
          </p>
          <p>
            My background in simulations programming also gives me a place to
            experiment: games, interaction, and ideas that are simply fun to
            build.
          </p>
          <Link className="text-link" href="/timeline">
            Follow the journey <GoArrowUpRight />
          </Link>
        </div>
      </section>
      <ContactBlock />
    </main>
  );
}
