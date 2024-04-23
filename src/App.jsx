import { useRef } from "react";
import { Input } from "./components/input";

function App() {
  const inputRef = useRef(null);

  return (
    <>
      <Input type="text" ref={inputRef} />
      <button
        className="button"
        onClick={() => inputRef.current.input1.focus()}
      >
        Focus
      </button>
    </>
  );
}

export default App;
