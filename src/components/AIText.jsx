import aiIcon from "/icons/aiTextIcon.svg";

function AIText({ label, ...other }) {
  return (
    <div className="ai-text" {...other}>
      <img src={aiIcon} />
      <span>{label}</span>
    </div>
  );
}

export default AIText;
