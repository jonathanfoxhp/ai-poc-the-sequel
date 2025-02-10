import * as RadixAccordion from "@radix-ui/react-accordion";

function AccordionRoot({ children, ...other }) {
  return (
    <RadixAccordion.Root className="accordion-root" collapsible {...other}>
      {children}
    </RadixAccordion.Root>
  );
}

export default AccordionRoot;
