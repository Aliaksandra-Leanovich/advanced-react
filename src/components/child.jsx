import { useEffect } from "react";

export const Child = () => {
  useEffect(() => {
    fetch("/").then(() => {
      throw new Error("Fetch Error");
    });
  }, []);

  return <h1>Child Component</h1>;
};
