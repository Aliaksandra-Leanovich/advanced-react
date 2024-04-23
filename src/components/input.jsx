import { forwardRef } from "react";

const CustomInput = (props, ref) => {
  return <input {...props} ref={ref} className="text-input" />;
};

export const Input = forwardRef(CustomInput); // need to use forward ref
