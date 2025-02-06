import * as RadioGroup from "@radix-ui/react-radio-group";

function Switch({ children, ...other }) {
  return <RadioGroup.Root {...other}>{children}</RadioGroup.Root>;
}

export default Switch;
