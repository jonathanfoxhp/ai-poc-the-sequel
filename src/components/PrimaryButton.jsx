function PrimaryButton({ label, ...other }) {
  return (
    <button className="primary-button" {...other}>
      {label}
    </button>
  );
}

export default PrimaryButton;
