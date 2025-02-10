import * as RadixAccordion from "@radix-ui/react-accordion";
import chevronDown from "/icons/chevronDown.svg";

function Accordion({ label, children, ...other }) {
  return (
    <RadixAccordion.Item className="accordion" {...other}>
      <RadixAccordion.Header>
        <RadixAccordion.Trigger className="accordion-trigger">
          {label}
          {<img src={chevronDown} />}
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
      <RadixAccordion.Content className="accordion-content">
        {children}
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
}

export default Accordion;
