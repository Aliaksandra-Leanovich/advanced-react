import React, { useState } from "react";

export const UncontrolledFlow = ({ children, onDone }) => {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  const next = (dataFromStep) => {
    const nextIndex = currentStepIndex + 1;
    const updatedData = { ...data, ...dataFromStep };

    console.log(updatedData);

    if (nextIndex < children.length) {
      setCurrentStepIndex(nextIndex);
    } else {
      onDone(updatedData);
    }

    setData(updatedData);
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { next });
  }

  return currentChild;
};
