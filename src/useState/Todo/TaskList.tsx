import React, { ChangeEvent, useState } from "react";
import { ListType } from ".";

export type TaskListProps = {
  todoList: ListType[];
  deleteTodoList: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
};

const TaskList = ({ ...props }: TaskListProps) => {
  const [updateClicked, setUpdateClicked] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);
  const { todoList, deleteTodoList } = props;
  console.log(todoList);

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
            {updateClicked ? (
              <label>
                <input
                  type="text"
                  value={list.text}
                  onChange={(e) => deleteTodoList(e, idx)}
                />
              </label>
            ) : (
              <span>{list.text}</span>
            )}
            <div>
              <button onClick={() => setUpdateClicked(!updateClicked)}>
                수정하기
              </button>
              <button
                style={{ marginLeft: 10 }}
                onClick={() => setDeleteClicked(!deleteClicked)}
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
