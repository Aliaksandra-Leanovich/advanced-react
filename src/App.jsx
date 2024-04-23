import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const realInputRef = useRef(null);

  const inputRef = useCallback((input) => {
    realInputRef.current = input;
    if (input === null) return;
    input.focus();
  }, []);

  return (
    <>
      <button onClick={() => setShow((s) => !s)}>Switch</button>
      {show && <input type="text" ref={inputRef} />}
    </>
  );
}

export default App;

// const inputRef = useRef(null);
// useEffect(() => {
//   inputRef.current.focus();
// }, []);
//going to cause an error and it says that
//You want me to focus on an input or an element that doesn't exist yet
