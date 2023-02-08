import { useState } from "react";
const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>You Clicked {count} times</h4>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};
export default Count;

//1.UseState for count= first write function then return then take variable count , then set count then use state & its number
