import { useEffect, useState } from "react";
import axios from "axios";
export const useResource = (resouceUrl) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resouceUrl);
      setResource(response.data);
    })();
  }, [resouceUrl]);

  return resource;
};
