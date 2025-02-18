function BasicIconButton({ icon, className, ...other }) {
  return (
    <button className={"icon-button--basic " + className} {...other}>
      {icon}
    </button>
  );
}

export default BasicIconButton;
