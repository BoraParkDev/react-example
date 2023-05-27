import React, { useCallback } from "react";
import { useImmer } from "use-immer";

const nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

const BucketList = () => {
  const [list, updateList] = useImmer(initialList);

  const toggleList = useCallback(
    (id: number) => {
      updateList((draft) => {
        draft[id].seen = !draft[id].seen;
      });
    },
    [list]
  );

  console.log(list);
  return (
    <div>
      <h1>Art Bucket List</h1>
      <p>My List of Art to see.</p>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.seen}
                onChange={() => {
                  toggleList(item.id);
                }}
              />
              {item.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BucketList;
