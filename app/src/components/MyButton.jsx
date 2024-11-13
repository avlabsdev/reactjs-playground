import { useState } from "react";

export default function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    // alert("You clicked me!");
    setCount(count + 1);
  }
  function handleClickMinus() {
    // alert("You clicked me!");
    if (count > 0) {
      setCount(count - 1);
    }
    if (count <= 0) {
      setCount(0);
    }
  }
  return (
    <>
      <button onClick={handleClick} className="btn-default">
        Clicked {count} times
      </button>
      <button onClick={handleClickMinus} className="btn-default">
        Clicked {count} times
      </button>
      <div>${count * 2.5}</div>
    </>
  );
}
