import axios from "axios";
import React, { useEffect, useState } from "react";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // Check if the child element is a valid React element

          return React.cloneElement(child, { user });
          // Clone the child element and pass the 'user' prop to it
        }

        return child;
      })}
    </>
  );
};
