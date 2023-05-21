import React, { useState } from "react";

const Example1 = () => {
  const [age, setAge] = useState(20);
  const ageUp = (params: number) => {
    setAge((prev) => prev + params);
  };
  return (
    <div>
      <h1>당신의 나이: {age}</h1>
      <button onClick={() => ageUp(3)}>나이 + 3</button>
      <button onClick={() => ageUp(1)}>나이 + 1</button>
    </div>
  );
};

export default Example1;
