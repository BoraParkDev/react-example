import React from "react";

type PropType = { name: string; isPacked: boolean };
const Item = ({ name, isPacked }: PropType) => {
  if (isPacked) {
    return <li className="item">{name} ✔️</li>;
  }
  return <li className="item">{name}</li>;
};
const Condition = () => {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul style={{ textAlign: "left" }}>
        <Item isPacked={true} name="S pace suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
};

export default Condition;
