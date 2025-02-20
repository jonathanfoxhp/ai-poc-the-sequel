import copy from "/icons/copy.svg";

function CopyPaste({ className, ...other }) {
  return (
    <div className={`${className} copy-paste`} {...other}>
      <img src={copy} />
      <span>Copy</span>
    </div>
  );
}

export default CopyPaste;
