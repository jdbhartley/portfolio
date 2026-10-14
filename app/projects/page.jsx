import { projects } from "../../lib/projects";
import { ProjectFilter } from "../components/project-filter";
import { ContactBlock } from "../components/contact-block";
import { GoArrowUpRight } from "react-icons/go";
import data from "../../data.json";
import ProjectsComponent from "./projects";
export const metadata = {
  title: "Projects & Experiments",
  description:
    "Explore James Hartley's games, web projects, and experiments, with source code, project notes, and playable prototypes.",
  alternates: { canonical: "/projects" },
};
export default async function ProjectsPage({ searchParams }) {
  const { customUsername } = await searchParams;
  return (
    <main id="main-content">
      <section className="wrap page-section">
        <div className="page-heading">
          <p className="eyebrow">The work / Projects & experiments</p>
          <h1>
            A few things
            <br />
            I’ve <span>built.</span>
          </h1>
          <p>
            Games, web projects, and experiments in making ideas tangible.
            Professional C# / .NET work is covered in my experience; these are
            projects I can share.
          </p>
        </div>
        {customUsername ? (
          <>
            <h2 className="archive-heading">
              Public repositories: {customUsername}
            </h2>
            <ProjectsComponent username={customUsername} />
          </>
        ) : (
          <ProjectFilter projects={projects} />
        )}
        <a
          className="archive-link text-link"
          href={`https://github.com/${data.githubUsername}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
        >
          More experiments on GitHub <GoArrowUpRight />
        </a>
      </section>
      <ContactBlock />
    </main>
  );
}
