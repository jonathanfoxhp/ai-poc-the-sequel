import copy from "/icons/copy.svg";

function CopyPaste({ ...other }) {
  return (
    <div className="copy-paste" {...other}>
      <img src={copy} />
      <span>Copy</span>
    </div>
  );
}

export default CopyPaste;
