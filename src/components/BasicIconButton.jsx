function BasicIconButton({ icon, ...other }) {
  return (
    <button className="icon-button--basic" {...other}>
      {icon}
    </button>
  );
}

export default BasicIconButton;
