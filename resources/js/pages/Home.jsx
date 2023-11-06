import React, {useState} from 'react';

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Home</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
}
