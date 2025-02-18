import arrowUpIcon from "/icons/arrowUp.svg";
import squareIcon from "/icons/square.svg";
import aiToggleIcon from "/icons/aiToggle.svg";
import micOnIcon from "/icons/micOn.svg";
import PrimaryIconButton from "./PrimaryIconButton";

function SearchBar({
  placeholder,
  onKeyDown,
  value,
  onChange,
  onPrimaryButtonClick,
  primaryButtonDisabled,
  isLoading,
  ...other
}) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="jumbo-input mb-4"
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        value={value}
        onChange={onChange}
      />
      <span className="absolute right-2 top-2 flex gap-3">
        <img src={micOnIcon} />
        <PrimaryIconButton
          disabled={primaryButtonDisabled}
          onClick={onPrimaryButtonClick}
          icon={<img src={isLoading ? squareIcon : arrowUpIcon} />}
        />
      </span>
    </div>
  );
}

export default SearchBar;
