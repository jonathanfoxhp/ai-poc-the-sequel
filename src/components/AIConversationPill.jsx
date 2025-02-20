function AIConversationPill({ checked, icon, label, className, ...other }) {
  const cn = checked
    ? "ai-conversation-pill ai-conversation-pill--checked"
    : "ai-conversation-pill ";
  return (
    <button className={`${className} ${cn}`} {...other}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default AIConversationPill;
