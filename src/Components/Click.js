import React from "react";
import Counter from "./Counter";

const Click = (props) => {
  const { count, handleIncreament, event } = props;

  return (
    <div>
      <h2>Count {count} </h2>
      <button onClick={handleIncreament}>{event}</button>
    </div>
  );
};

export default Counter(Click,2);
