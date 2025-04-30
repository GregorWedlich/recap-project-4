import { useState } from "react";

export function CopyToClipboard({ text }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <button onClick={handleCopy}>
      {isCopied ? "SUCCESFULLY COPIED!" : "COPY"}
    </button>
  );
}
