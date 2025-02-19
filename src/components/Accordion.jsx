import * as RadixAccordion from "@radix-ui/react-accordion";
import chevronDown from "/icons/chevronDown.svg";

function Accordion({ label, onClick, children, className, ...other }) {
  return (
    <RadixAccordion.Item
      className={"accordion animate-fadeSlideIn " + className}
      {...other}
    >
      <RadixAccordion.Header>
        <RadixAccordion.Trigger className="accordion-trigger" onClick={onClick}>
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
