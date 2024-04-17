import { useState } from "react";
import { ControlledForm } from "./components/controlled-form";
import { ControlledModal } from "./components/controlled-modal";
import { UncontrolledForm } from "./components/uncontrolled-form";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(!showModal)}>
        {showModal ? "Hide Modal" : "Show Modal"}
      </button>
      <ControlledModal shouldShow={showModal} close={() => setShowModal(false)}>
        <h1>I am the body of the modal!</h1>
      </ControlledModal>
    </>
  );
}

export default App;
