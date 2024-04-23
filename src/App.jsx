import { useRef } from "react";
import { Input } from "./components/input";

function App() {
  const inputRef = useRef(null);

  return (
    <>
      <Input type="text" ref={inputRef} />
      <button
        className="button"
        onClick={() => console.log(inputRef.current.value)} //case 2
      >
        Focus
      </button>
      <button
        className="button"
        onClick={() => inputRef.current.input1.focus()} //case 1
      >
        Focus
      </button>
    </>
  );
}

export default App;
