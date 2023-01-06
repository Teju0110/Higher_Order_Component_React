import React, { useState } from "react";

const Counter = (WrappedComponent,num) => {
  const HandleCounter = (props) => {

    const [count, setCount] = useState(0);

    const handleIncreament = () => {
    //   setCount(count + 1);
    setCount(count + num);
    };

    return (
      <div>
        <WrappedComponent count={count} handleIncreament={handleIncreament} {...props} />
      </div>
    );
  };
  return HandleCounter;
};

export default Counter;
