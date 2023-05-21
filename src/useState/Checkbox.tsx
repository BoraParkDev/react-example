import React, { useState } from "react";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(true);
  const onClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        value="나 이거 좋아!"
        onClick={onClick}
      />
      <p>
        {isChecked
          ? "오 맞아! 너 이거 좋아해!"
          : "아닐걸? 너 이거 안좋아 할 껄?"}
      </p>
    </div>
  );
};

export default Checkbox;
