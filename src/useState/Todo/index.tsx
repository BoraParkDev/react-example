import React, { ChangeEvent, useCallback, useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

export type ListType = {
  id: number;
  text?: string;
  updated?: boolean;
};

const Todo = () => {
  const [todoList, setTodoList] = useState<ListType[]>([
    { id: 0, text: "우유 사기", updated: false },
    { id: 1, text: "저녁 식사 준비하기", updated: false },
    { id: 2, text: "태연 노래 듣기", updated: false },
  ]);

  const addTodoList = (inputText: string) => {
    setTodoList((prev) => [
      ...prev,
      { id: prev[prev.length - 1].id + 1, text: inputText },
    ]);
  };

  const updateText = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      setTodoList((prev) => {
        let indexTodoList = prev[index];
        indexTodoList.text = e.target.value;
        console.log(...prev);
        return [...prev];
      });
    },
    []
  );

  const updateTodoList = (index: number) => {
    setTodoList((prev) => {
      let indexTodoList = prev[index];
      indexTodoList.updated = !indexTodoList.updated;
      return [...prev];
    });
  };

  const deleteTodoList = useCallback(
    (index: number) => {
      setTodoList((prev) => {
        let newTodoList = prev.filter((_, idx) => idx !== index);
        return newTodoList;
      });
    },
    [todoList]
  );

  return (
    <div>
      <AddTodo addTodoList={addTodoList} />
      <TaskList
        todoList={todoList}
        updateText={updateText}
        updateTodoList={updateTodoList}
        deleteTodoList={deleteTodoList}
      />
    </div>
  );
};

export default Todo;
