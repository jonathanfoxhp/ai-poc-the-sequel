import aiSuggestionIcon from "/icons/aiSuggestion.svg";

function SecondaryAlert({ title, buttonLabel, onButtonClick, ...other }) {
  return (
    <div className="secondary-alert" {...other}>
      <div className="secondary-alert__left">
        <img src={aiSuggestionIcon} />
        <span>{title}</span>
      </div>
      <button onClick={onButtonClick}>{buttonLabel}</button>
    </div>
  );
}

export default SecondaryAlert;
