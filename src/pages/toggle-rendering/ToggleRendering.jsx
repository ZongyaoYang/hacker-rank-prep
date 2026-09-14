import { useState } from "react";

const ToggleRendering = () => {
  const [on, setOn] = useState(false);

  const handleClick = (e) => {
    setOn((prev) => !prev);
  };

  const buttonText = () => {
    if (on) {
      return "ON";
    } else {
      return "OFF";
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{buttonText()}</button>
    </div>
  );
};

export default ToggleRendering;
