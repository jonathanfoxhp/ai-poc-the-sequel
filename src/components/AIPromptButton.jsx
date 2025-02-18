function AIPromptButton({ label, className, ...other }) {
  return (
    <button className={"ai-prompt-button " + className} {...other}>
      <span>{label}</span>
    </button>
  );
}

export default AIPromptButton;
