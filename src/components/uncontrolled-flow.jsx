import React, { useState } from "react";

export const UncontrolledFlow = ({ children, onDone }) => {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  const next = () => {
    setCurrentStepIndex(currentStepIndex + 1);
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { next });
  }

  return currentChild;
};
