import React, { ChangeEvent, useState } from "react";
import { ListType } from ".";

export type TaskListProps = {
  todoList: ListType[];
  updateText: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  updateTodoList: (index: number) => void;
  deleteTodoList: (index: number) => void;
};

const TaskList = ({ ...props }: TaskListProps) => {
  const { todoList, updateText, updateTodoList, deleteTodoList } = props;
  console.log("todoList", todoList);
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
            {list.updated ? (
              <label>
                <input
                  type="text"
                  value={list.text}
                  onChange={(e) => updateText(e, idx)}
                />
              </label>
            ) : (
              <span>{list.text}</span>
            )}
            <div>
              <button
                onClick={() => {
                  updateTodoList(idx);
                }}
              >
                수정하기
              </button>
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
