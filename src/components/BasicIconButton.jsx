function BasicIconButton({ icon, ...other }) {
  return (
    <button
      className="icon-button--basic !w-10 !h-10 !bg-[#828398/20]"
      {...other}
    >
      {icon}
    </button>
  );
}

export default BasicIconButton;
