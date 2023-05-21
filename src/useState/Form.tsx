import React, { ChangeEvent, useState } from "react";

function Form() {
  const [name, setName] = useState("Rachel");
  const [age, setAge] = useState(20);

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeAge = (e?: MouseEvent) => setAge(age + 1);
  return (
    <>
      <input value={name} onChange={changeName} />
      <button onClick={() => changeAge()}>나이 Up!</button>
      <p>
        안녕 {name}, 난 {age}살이야.
      </p>
    </>
  );
}

export default Form;
