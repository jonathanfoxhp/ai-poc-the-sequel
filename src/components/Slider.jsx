import * as RadixSlider from "@radix-ui/react-slider";

function Slider({ startIcon, endIcon, ...other }) {
  return (
    <div className="flex gap-2 items-center">
      {startIcon}
      <RadixSlider.Root
        className="slider"
        defaultValue={[40]}
        max={100}
        step={1}
        {...other}
      >
        <RadixSlider.Track className="slider__track">
          <RadixSlider.Range className="slider__range" />
        </RadixSlider.Track>
        <RadixSlider.Thumb className="slider__thumb" />
      </RadixSlider.Root>
      {endIcon}
    </div>
  );
}

export default Slider;
