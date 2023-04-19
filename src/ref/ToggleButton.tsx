import React, { useState } from "react";

const ToggleButton = () => {
  const [btn, setBtn] = useState<boolean>(false);
  const toggleButton = () => {
    setBtn(!btn);
  };

  return (
    <div>
      <button
        onClick={toggleButton}
        style={{ backgroundColor: btn ? "gray" : "" }}
      >
        {!btn ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default ToggleButton;
