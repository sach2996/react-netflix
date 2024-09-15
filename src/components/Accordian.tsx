import { useState } from "react";
import "../index.css";
function Accordion(prop: { title: string; description: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const iconForAccordian = (isOpen: boolean) => {
    if (isOpen) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          role="img"
          viewBox="0 0 36 36"
          width="36"
          height="36"
          data-icon="PlusLarge"
          aria-hidden="true"
          className="elj7tfr3 default-ltr-cache-b59fc3-Icon-StyledAccordionIcon e164gv2o4"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
            fill="currentColor"
          ></path>
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          role="img"
          viewBox="0 0 36 36"
          width="36"
          height="36"
          data-icon="PlusLarge"
          aria-hidden="true"
          className="elj7tfr3 default-ltr-cache-1k5iouc-Icon-StyledAccordionIcon e164gv2o4"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
            fill="currentColor"
          ></path>
        </svg>
      );
    }
  };
  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleToggle}>
        <p>{prop.title}</p>

        <span style={isOpen ? { transform: "rotate(-45deg)" } : {}}>
          {iconForAccordian(isOpen)}
        </span>
      </div>
      <div
        className="accordion-content"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <p style={{ textAlign: "left" }}>{prop.description}</p>
      </div>
    </div>
  );
}

export default Accordion;
