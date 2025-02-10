function BasicIconButton({ icon, ...other }) {
  return (
    <button className="icon-button--primary" {...other}>
      {icon}
    </button>
  );
}

export default BasicIconButton;
