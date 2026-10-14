import { GoArrowUpRight } from "react-icons/go";
import data from "../../data.json";
export function ContactBlock() {
  return (
    <section className="contact-band" aria-labelledby="contact-title">
      <div className="wrap contact-inner">
        <div>
          <p className="eyebrow">Have something in mind?</p>
          <h2 id="contact-title">
            Let’s build
            <br />
            something useful<span>.</span>
          </h2>
        </div>
        <div>
          <p>
            Have a problem to solve, a role to discuss,
            <br className="desktop-break" /> or an idea worth exploring? I’d
            like to hear it.
          </p>
          <a className="button button-primary" href={`mailto:${data.email}`}>
            Say hello <GoArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
