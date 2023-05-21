import React, { ChangeEvent, useState } from "react";

export type AddTodoType = {
  addTodoList: (inputText: string) => void;
};
const AddTodo = ({ ...props }: AddTodoType) => {
  const [text, setText] = useState("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <label>
        <input
          type="text"
          placeholder="할 일 추가하기"
          onChange={handleChangeInput}
        />
      </label>
      <button onClick={() => props.addTodoList(text)}>추가</button>
    </div>
  );
};

export default AddTodo;
