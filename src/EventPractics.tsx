import React, { useState } from "react";

type Props = {};

const EventPractics: React.FC<Props> = ({ ...props }) => {
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "nickname") {
      setNickname(value);
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
  };

  const handleClick = () => {
    alert(nickname + " " + email);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <h1>정보를 입력해주세요</h1>
      <input
        type="text"
        placeholder="닉네임"
        name="nickname"
        value={nickname}
        onChange={handleChangeNickName}
      />
      <input
        type="email"
        placeholder="이메일"
        name="email"
        value={email}
        onChange={handleChangeEmail}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPractics;
