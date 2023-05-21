import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

export type ListType = {
  id: number;
  text?: string;
};

const Todo = () => {
  const [todoList, setTodoList] = useState<ListType[]>([
    { id: 1, text: "우유 사기" },
    { id: 2, text: "저녁 식사 준비하기" },
    { id: 3, text: "태연 노래 듣기" },
  ]);

  const addTodoList = (inputText: string) => {
    setTodoList((prev) => [
      ...prev,
      { id: prev[prev.length - 1].id + 1, text: inputText },
    ]);
  };

  return (
    <div>
      <AddTodo addTodoList={addTodoList} />
      <TaskList todoList={todoList} />
    </div>
  );
};

export default Todo;
