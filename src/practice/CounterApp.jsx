import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>

      {/* Buat tombol menambah dan mengurangi nilai */}
      <div className="button">
        <button className="button-plus" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button className="button-minus" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
