function SecondaryButton({ label, ...other }) {
  return (
    <button className="secondary-button" {...other}>
      {label}
    </button>
  );
}

export default SecondaryButton;
