import { Fragment, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyLink = ({ props }) => {
  const { _id } = props;
  const shareURL = `http://localhost:3000/room/${_id}`
  const [copied, setCopied] = useState(false);

  const handleCopyButtonClick = () => {
    console.log(shareURL);
    console.log(copied);
  };

  return (
    <Fragment>
      <CopyToClipboard text={shareURL} onCopy={() => setCopied(true)}>
        <button
          href="#"
          className=" text-indigo-600"
          onClick={handleCopyButtonClick}
        >
          Copy Link
        </button>
      </CopyToClipboard>
      { copied && (
        <div>
          Copied to Clipboard.
        </div>
      )}
    </Fragment>
  );
};

export default CopyLink;
