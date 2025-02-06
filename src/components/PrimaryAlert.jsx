import aiIcon from "/icons/ai.svg";

function PrimaryAlert({ title, buttonLabel, onButtonClick, ...other }) {
  return (
    <div className="primary-alert" {...other}>
      <div className="primary-alert__left">
        <img src={aiIcon} />
        <span>{title}</span>
      </div>
      <button onClick={onButtonClick}>{buttonLabel}</button>
    </div>
  );
}

export default PrimaryAlert;
