function PrimaryButton({ label, className, ...other }) {
  return (
    <button className={`primary-button ${className}`} {...other}>
      {label}
    </button>
  );
}

export default PrimaryButton;
