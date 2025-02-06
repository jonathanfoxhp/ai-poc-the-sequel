import * as RadixSelect from "@radix-ui/react-select";
import chevronDownIcon from "/icons/chevronDown.svg";

function Select({ options, value, label, ...other }) {
  return (
    <div className="select" {...other}>
      <RadixSelect.Root {...other}>
        <RadixSelect.Trigger className="w-44 justify-between items-center truncate inline-flex text-base h-12  content-between gap-[5px] rounded-lg bg-white px-3 leading-none  border-hpxGrey hover:border-hpxGrey-hover transition-colors duration-300 border-solid border outline-none">
          <RadixSelect.Value />
          <RadixSelect.Icon asChild>
            <img src={chevronDownIcon} />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Content className="overflow-hidden rounded-md ">
          <RadixSelect.ScrollUpButton />
          <RadixSelect.Viewport>
            {options.map((o) => (
              <RadixSelect.Item value={o.value}>
                <RadixSelect.ItemText asChild>{o.label}</RadixSelect.ItemText>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
          <RadixSelect.Arrow />
        </RadixSelect.Content>
      </RadixSelect.Root>
    </div>
  );
}

export default Select;
