import React, { useState } from "react";

const IterationSample = () => {
  const tasks = [
    { id: 1, name: "snowman" },
    { id: 2, name: "ice" },
    { id: 3, name: "snow" },
    { id: 4, name: "wind" },
  ];

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id
  const [nextTask, setNextTask] =
    useState<{ id: number; name: string }[]>(tasks);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const addTask = () => {
    const newTask = nextTask.concat({ id: nextId, name: inputText });
    setNextId(nextId + 1);
    setNextTask(newTask);
    setInputText(""); //input 초기화
  };

  const deleteTask = (idx: number) => {
    const newTask = nextTask.filter((task) => task.id !== idx);
    console.log(newTask);
    setNextTask(newTask);
  };

  const taskList = nextTask.map((task) => (
    <React.Fragment key={task.id}>
      <li>{task.name}</li>{" "}
      <button onClick={() => deleteTask(task.id)}>삭제</button>
    </React.Fragment>
  ));
  return (
    <div>
      <ol>{taskList}</ol>
      <input type="text" placeholder="추가하기" onChange={handleChange} />
      <button onClick={addTask}>추가</button>
    </div>
  );
};

export default IterationSample;
