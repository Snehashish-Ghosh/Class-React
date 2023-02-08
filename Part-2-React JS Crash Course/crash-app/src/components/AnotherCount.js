import { useEffect, useState } from "react";

const AnotherCount = () => {
  const [number, setNumber] = useState(2);
  const [click, setClick] = useState(0);
  useEffect(() => {
    setClick(() => click + 1);
  }, [number]);
  return (
    <div>
      <h4>Number: {number} </h4>
      <h5>Click: {click}</h5>
      <button onClick={() => setNumber(number * 2)}>Click Me</button>
    </div>
  );
};
export default AnotherCount;
