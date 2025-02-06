function Avatar({ label, ...other }) {
  return (
    <div className="avatar" {...other}>
      {label}
    </div>
  );
}

export default Avatar;
