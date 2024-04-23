import { forwardRef, useImperativeHandle, useRef, useState } from "react";

//case 2

const CustomInput = (props, ref) => {
  const [value, setValue] = useState("");

  useImperativeHandle(
    ref,
    () => {
      return {
        value,
      };
    },
    []
  );

  return (
    <>
      <input
        {...props}
        ref={inputRef}
        className="text-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export const Input = forwardRef(CustomInput);

//case 1

const CustomInput = (props, ref) => {
  const [value, setValue] = useState();

  const inputRef = useRef();
  const inputRef2 = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        input1: () => inputRef.current,
        input2: () => inputRef2.current,
      };
    },
    []
  );

  return (
    <>
      <input {...props} ref={inputRef} className="text-input" />
      <input {...props} ref={inputRef2} className="text-input" />
    </>
  );
};
