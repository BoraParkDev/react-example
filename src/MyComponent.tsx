import * as React from "react";

type Props = {
  name?: string;
  children: React.ReactNode;
};

const MyComponent = (props: Props) => {
  const { name, children } = props;
  return (
    <div>
      <h2>Hello {name}</h2>
      <p>{children}</p>
    </div>
  );
};

export default MyComponent;

MyComponent.defaultProps = {
  name: "Unknown",
};
