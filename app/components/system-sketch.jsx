"use client";
import { useState } from "react";
import { GoCode, GoDatabase, GoWorkflow, GoCheck } from "react-icons/go";
const layers = [
  {
    name: "Interface",
    stack: "React + TypeScript",
    note: "Clear interactions. Less friction. Software that makes sense to the people using it.",
    icon: GoCode,
  },
  {
    name: "System",
    stack: "C# + .NET",
    note: "Dependable services, maintainable code, and business logic built around the problem.",
    icon: GoWorkflow,
  },
  {
    name: "Data",
    stack: "PostgreSQL",
    note: "A solid foundation: structured data and the persistence behind useful software.",
    icon: GoDatabase,
  },
];
export function SystemSketch() {
  const [active, setActive] = useState(1);
  return (
    <div className="system-sketch">
      <div className="sketch-header">
        <span className="eyebrow">Anatomy of a useful thing</span>
        <span className="sketch-cross">+</span>
      </div>
      <div className="sketch-canvas">
        <div className="sketch-input">
          <span className="status-dot" /> A real-world problem
        </div>
        <div className="sketch-connector" />
        <div className="system-layers" aria-label="Explore my stack">
          {layers.map((layer, index) => (
            <button
              type="button"
              key={layer.name}
              className={`system-layer ${index === active ? "is-active" : ""}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            >
              <span className="layer-icon">
                <layer.icon />
              </span>
              <span>
                <strong>{layer.name}</strong>
                <small>{layer.stack}</small>
              </span>
              <span className="layer-number">0{index + 1}</span>
            </button>
          ))}
        </div>
        <div className="sketch-connector" />
        <div className="sketch-output">
          <GoCheck /> Something that works better
        </div>
        <span className="canvas-corner corner-tl" />
        <span className="canvas-corner corner-br" />
      </div>
      <div className="sketch-note" aria-live="polite">
        <span className="accent">// {layers[active].name.toLowerCase()}</span>
        <p>{layers[active].note}</p>
      </div>
      <div className="sketch-footer">
        <span>Built with intention</span>
        <span>Explore the layers ↗</span>
      </div>
    </div>
  );
}
