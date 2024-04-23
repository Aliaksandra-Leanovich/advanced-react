import { useState, useRef, useEffect, useLayoutEffect } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(0);
  const buttonRef = useRef(null);

  // useEffect(() => {
  //   if (buttonRef.current === null || !show) return setTop(0); //The normal use effect that we use has a kind of asynchronous behavior. Whenever it fires first, it tells the whole component to render,
  //   const { bottom } = buttonRef.current.getBoundingClientRect(); // then it does the business it has to do.And then if that business, as you can see in here, the task that it does in here, does change or.....
  //   setTop(bottom + 30);
  // }, [show]);

  useLayoutEffect(() => {
    if (buttonRef.current === null || !show) return setTop(0); //The normal use effect that we use has a kind of asynchronous behavior. Whenever it fires first, it tells the whole component to render,
    const { bottom } = buttonRef.current.getBoundingClientRect(); // then it does the business it has to do.And then if that business, as you can see in here, the task that it does in here, does change or.....
    setTop(bottom + 30);
  }, [show]);

  //whenever it wants to fire first, it does the task that it has in its body. And when it's done, if we need to render it, the the component is going to rerender.

  const now = performance.now();
  while (now > performance.now() - 100) {
    //Do something
  }

  return (
    <>
      <button ref={buttonRef} onClick={() => setShow((s) => !s)}>
        Show
      </button>
      {show && (
        <div
          className="tooltip"
          style={{
            top: `${top}px`,
          }}
        >
          Some text ...
        </div>
      )}
    </>
  );
}

export default App;
