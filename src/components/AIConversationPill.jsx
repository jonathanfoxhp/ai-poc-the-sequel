function AIConversationPill({ checked, icon, label, ...other }) {
  const cn = checked
    ? "ai-conversation-pill ai-conversation-pill--checked"
    : "ai-conversation-pill ";
  return (
    <button className={cn} {...other}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default AIConversationPill;
