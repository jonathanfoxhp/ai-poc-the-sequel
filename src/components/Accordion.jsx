import * as RadixAccordion from "@radix-ui/react-accordion";
import chevronDown from "/icons/chevronDown.svg";

function Accordion({ label, children, ...other }) {
  return (
    <RadixAccordion.Item className="accordion animate-fadeSlideIn" {...other}>
      <RadixAccordion.Header>
        <RadixAccordion.Trigger className="accordion-trigger">
          {label}
          {<img src={chevronDown} />}
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
      <RadixAccordion.Content className="accordion-content">
        <div className="px-8"> {children}</div>
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
}

export default Accordion;
