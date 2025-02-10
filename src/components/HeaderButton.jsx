function HeaderButton({ icon, label, ...other }) {
  return (
    <button className="header-button" {...other}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default HeaderButton;
