import React from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const onClick: () => void = () => {
    setCounter(counter + 1);
  };

  return <button onClick={onClick}>버튼 {counter}번 누르기</button>;
};

export default Counter;
