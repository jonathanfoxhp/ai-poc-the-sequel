import * as RadioGroup from "@radix-ui/react-radio-group";

function Switch({ label, ...other }) {
  return (
    <RadioGroup.Item className="radio" {...other}>
      <span>{label}</span>
      <RadioGroup.Indicator asChild>
        <div className="radio__indicator-outer">
          <div className="radio__indicator-inner" />
        </div>
      </RadioGroup.Indicator>
    </RadioGroup.Item>
  );
}

export default Switch;
