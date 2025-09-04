import React, { useState } from "react";

const Ques1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col text-center">
      <h2>{count}</h2>
      <div className="flex justify-center gap-5">
        <button onClick={() => setCount(count+1)}>[+]</button>
        <button onClick={() => setCount(count-1)}>[-]</button>
      </div>
    </div>
  );
};

export default Ques1;
