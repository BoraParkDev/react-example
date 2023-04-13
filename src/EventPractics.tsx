import React, { useState } from "react";

type Props = {};
type UserType = {
  nickname: string;
  email: string;
};
const EventPractics: React.FC<Props> = ({ ...props }) => {
  const [user, setUser] = useState<UserType>({ nickname: "", email: "" });
  const { nickname, email } = user;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    alert(nickname + " " + email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>정보를 입력해주세요</h1>
      <input
        type="text"
        placeholder="닉네임"
        name="nickname"
        value={nickname}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="이메일"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <button type="submit">확인</button>
    </form>
  );
};

export default EventPractics;
