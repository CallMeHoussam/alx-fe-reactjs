import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', borderRadius: '8px', textAlign: 'center' }}>
      <p style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '8px' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginRight: '8px' }}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;