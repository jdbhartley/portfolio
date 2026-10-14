import data from "../../data.json";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
export const metadata = {
  title: "Career Timeline",
  description:
    "From simulations programming and hands-on technical work to software development: James Hartley's career journey.",
  alternates: { canonical: "/timeline" },
};
export default function TimelinePage() {
  return (
    <main id="main-content" className="wrap page-section">
      <div className="page-heading">
        <p className="eyebrow">The journey / Career timeline</p>
        <h1>
          Always learning.
          <br />
          <span>Always building.</span>
        </h1>
        <p>
          A path through technical work, customer support, team leadership, and
          software engineering. Every step adds a different perspective.
        </p>
        <Link className="text-link" href="/resume">
          View the résumé <GoArrowUpRight />
        </Link>
      </div>
      <div className="career-timeline">
        {data.timeline.map((item, index) => (
          <article key={`${item.date}-${item.title}`}>
            <time>{item.date}</time>
            <span className={`timeline-dot ${index === 0 ? "current" : ""}`} />
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
