import React, { ChangeEvent, useCallback, useRef } from "react";
import { useState } from "react";

const Chat = () => {
  const [msg, setMsg] = useState<string>("");
  const [clicked, setClicked] = useState(false);
  const timeoutRef = useRef(0);

  const inputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  }, []);

  const handleSend = () => {
    setClicked(true);
    if (msg.length > 0) {
      timeoutRef.current = setTimeout(() => {
        alert(`당신이 전송한 메세지: ${msg}`);
        setClicked(false);
      }, 5000);
    }
  };
  const handleCancel = () => {
    setClicked(false);
    clearTimeout(timeoutRef.current);
  };

  return (
    <div>
      <input type="text" onChange={inputChange} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: 150,
          marginTop: 16,
        }}
      >
        <button style={{ backgroundColor: "lightgray" }} onClick={handleSend}>
          {clicked ? "전송중..." : "전송"}
        </button>
        <br />
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={handleCancel}
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default Chat;
