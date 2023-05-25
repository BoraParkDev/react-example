import React, { ChangeEvent, useState } from "react";
import { ListType } from ".";

export type TaskListProps = {
  todoList: ListType[];
  deleteTodoList: (index: number) => void;
};

const TaskList = ({ ...props }: TaskListProps) => {
  const { todoList, deleteTodoList } = props;

  return (
    <ul>
      {todoList.map((list: ListType, idx: number) => {
        return (
          <li
            key={list.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: 400,
              padding: 8,
            }}
          >
            <input type="checkbox" />
            <label>
              <input
                type="text"
                value={list.text}
                onChange={(e) => console.log(e)}
              />
            </label>
            <div>
              <button onClick={() => console.log(idx)}>수정하기</button>
              <button
                style={{ marginLeft: 10 }}
                onClick={() => deleteTodoList(idx)}
              >
                삭제하기
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
