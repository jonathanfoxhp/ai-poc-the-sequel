import aiToggleIcon from "/icons/aiToggle.svg";
import * as RadixSwitch from "@radix-ui/react-switch";

function AISwitch(props) {
  return (
    <RadixSwitch.Root className="ai-switch-root" {...props}>
      <RadixSwitch.Thumb className="ai-switch-thumb">
        <img src={aiToggleIcon} />
      </RadixSwitch.Thumb>
    </RadixSwitch.Root>
  );
}

export default AISwitch;
