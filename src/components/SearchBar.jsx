import arrowUpIcon from "/icons/arrowUp.svg";
import aiToggleIcon from "/icons/aiToggle.svg";
import micOnIcon from "/icons/micOn.svg";
import PrimaryIconButton from "./PrimaryIconButton";

function SearchBar({
  onKeyDown,
  value,
  onChange,
  onPrimaryButtonClick,
  isLoading,
  ...other
}) {
  return (
    <div className="relative mt-[4.5rem] w-full">
      <input
        type="text"
        className="jumbo-input mb-4"
        placeholder="Ask me anything about optimizing device settings..."
        onKeyDown={onKeyDown}
        value={value}
        onChange={onChange}
      />
      <span className="absolute right-10 top-3 flex gap-3">
        <img src={micOnIcon} />
        <PrimaryIconButton
          onClick={onPrimaryButtonClick}
          icon={<img src={arrowUpIcon} />}
        />
      </span>
      {isLoading && (
        <span className="absolute right-10 top-7 scale-[3] animate-pulse">
          <img src={aiToggleIcon} />
        </span>
      )}
    </div>
  );
}

export default SearchBar;
