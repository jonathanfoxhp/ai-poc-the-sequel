function BasicIconButton({ icon, disabled, ...other }) {
  return (
    <button className="icon-button--primary" disabled={disabled} {...other}>
      {icon}
    </button>
  );
}

export default BasicIconButton;
