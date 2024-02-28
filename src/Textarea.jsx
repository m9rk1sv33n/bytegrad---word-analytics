import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState(false);
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarningText("No script tag allowed!");
      setWarning(true);
      newText = newText.replace("<scrip>", "");
    } else if (newText.includes("@")) {
      setWarningText("No email allowed!");
      setWarning(true);
      newText = newText.replace("@", "");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something here..."
        spellCheck="false"
      />
      {warning ? <Warning warningText={warningText} /> : null}
    </div>
  );
}