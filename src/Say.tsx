import React, { useState } from "react";

const Say = () => {
  const [msg, setMsg] = useState<String>("");
  const [color, setColor] = useState<String>("black");

  const onClickEnter = () => setMsg("안녕하세요!");
  const onClickLeave = () => setMsg("안녕히 가세요!");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color: `${color}` }}>{msg}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        Red
      </button>
    </div>
  );
};

export default Say;
