import { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = (props, ref) => {
  const inputRef = useRef();
  const inputRef2 = useRef();

  useImperativeHandle(ref, () => {
    return {
      input1: () => inputRef.current,
      input2: () => inputRef2.current,
    };
  });

  return (
    <>
      <input {...props} ref={inputRef} className="text-input" />
      <input {...props} ref={inputRef2} className="text-input" />
    </>
  );
};

export const Input = forwardRef(CustomInput);
