import axios from "axios";
import React, { useEffect, useState } from "react";

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${resourceUrl}`);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // Check if the child element is a valid React element

          return React.cloneElement(child, { [resourceName]: resource });
          // Clone the child element and pass the 'user' prop to it
        }

        return child;
      })}
    </>
  );
};
