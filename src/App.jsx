import { useState } from "react";
import "./App.css";
import Counter from "./counter";

function App() {
  const [changeShirts, setChangeShirts] = useState(false);

  return (
    <div>
      {changeShirts ? (
        <>
          <span>Shirts counts: </span> <Counter key="shirts" />
        </>
      ) : (
        <>
          <span>Shoes counts: </span> <Counter key="shoes" />
        </>
      )}
      <br />
      <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
    </div>
  );
}

export default App;
