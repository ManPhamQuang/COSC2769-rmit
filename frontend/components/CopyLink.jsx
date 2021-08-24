import { Fragment, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyLink = ({ id, handleCopyButtonClick }) => {
    const shareURL = `${process.env.baseUrl}/room/${id}`;
    return (
        <Fragment>
            <CopyToClipboard
                text={shareURL}
                onCopy={() => handleCopyButtonClick(shareURL)}
            >
                <button href="#" className=" text-indigo-600">
                    Copy Link
                </button>
            </CopyToClipboard>
        </Fragment>
    );
};

export default CopyLink;
