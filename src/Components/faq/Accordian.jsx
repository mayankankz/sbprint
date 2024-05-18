import { useState } from "react";

function Accordion({ accordionItems }) {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <div id="accordion" className="accordion">
      {accordionItems.map((item, index) => (
        <div
          className="accordion-item border-0 py-3 rounded-4 mb-4"
          key={item.id}
        >
          <h3 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button font-weight-bold shadow-none mb-0 bg-transparent rounded text-dark ${
                activeAccordion === index ? "" : "collapsed"
              }`}
              style={{
                border: "none",
                padding: "8px 16px",
                width: "100%",
                textAlign: "left",
                outline: "none",
              }}
              type="button"
              onClick={() => handleAccordionClick(index)}
              aria-expanded={activeAccordion === index ? "true" : "false"}
              aria-controls={`collapse${index}`}
            >
              {item.title}
            </button>
          </h3>
          <div
            id={`collapse${index}`}
            className={` border-0 collapse ${
              activeAccordion === index ? "show" : ""
            }`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordion"
            style={{
              border: "1px solid #ccc",
              borderTop: "none",
              borderRadius: "0 0 4px 4px",
              transition: "max-height 3s ease",
              maxHeight: activeAccordion === index ? "1000px" : "0",
            }}
          >
            <div className="accordion-body pt-0 text-muted">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
