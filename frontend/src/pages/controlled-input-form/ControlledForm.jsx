import { useState } from "react";

const ControlledForm = () => {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState("");

  const onType = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      setSubmitted(text);
      setText("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={onType} />
      <button>Submit</button>
      <p>{submitted}</p>
    </form>
  );
};

export default ControlledForm;
