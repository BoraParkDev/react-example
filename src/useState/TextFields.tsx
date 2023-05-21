import React, { ChangeEvent, useState } from "react";

const TextFields = () => {
  const [text, setText] = useState("hello");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const resetInput = () => {
    setText("hello");
  };

  return (
    <div>
      <input value={text} onChange={onChange} />
      <p>당신이 입력한 내용 : {text}</p>
      <button onClick={resetInput}>리셋</button>
    </div>
  );
};

export default TextFields;
