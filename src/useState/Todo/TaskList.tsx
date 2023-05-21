import React from "react";
import { ListType } from ".";

export type TaskListProps = {
  todoList: ListType[];
};

const TaskList = ({ ...props }) => {
  const { todoList } = props;
  return (
    <ul>
      {todoList.map((list: ListType, idx: number) => {
        return (
          <li
            key={list.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <label>
              <input type="checkbox" />
              <input type="text" value={list.text} />
            </label>
            <button>수정하기</button>
            <button>삭제하기</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
