import React from 'react'
import Counter from './Counter';

const MouseOver = (props) => {
  
    const{count,handleIncreament,event}=props

    return (
      <div>
        <h2>Count {count}</h2>
        <button onMouseOver={handleIncreament}>{event}</button>
      </div>
    );
}

export default Counter(MouseOver,5)