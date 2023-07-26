import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Button from './components/Elements/Button/Button';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Button content="hello"></Button>
      <div className="bg-teal-300"></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
