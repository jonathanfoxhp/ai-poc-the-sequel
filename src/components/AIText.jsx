import aiIcon from "/icons/aiTextIcon.svg";

function AIText({ className, label, ...other }) {
  return (
    <div className={`ai-text ${className}`} {...other}>
      <img src={aiIcon} />
      <span>{label}</span>
    </div>
  );
}

export default AIText;
