function AIPromptButton({ label, ...other }) {
  return (
    <button className="ai-prompt-button" {...other}>
      <span>{label}</span>
    </button>
  );
}

export default AIPromptButton;
