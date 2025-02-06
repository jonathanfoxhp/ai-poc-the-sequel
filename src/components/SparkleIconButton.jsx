function SparkleIconButton({ icon, ...other }) {
  return (
    <button className="icon-button--sparkle" {...other}>
      {icon}
    </button>
  );
}

export default SparkleIconButton;
