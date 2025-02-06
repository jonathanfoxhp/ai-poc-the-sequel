import * as RadixSwitch from "@radix-ui/react-switch";

function Switch({ ...props }) {
  return (
    <RadixSwitch.Root className="switch-root" {...props}>
      <RadixSwitch.Thumb className="switch-thumb" />
    </RadixSwitch.Root>
  );
}

export default Switch;
