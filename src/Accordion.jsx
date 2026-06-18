import { useState } from "react";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`accordion-card ${open ? "active" : ""}`}>
      <div
        className="accordion-header"
        onClick={() => setOpen(!open)}
      >
        <h2>{title}</h2>

        <span>{open ? "−" : "+"}</span>
      </div>

      {open && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;