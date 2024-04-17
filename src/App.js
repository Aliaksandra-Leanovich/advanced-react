import { Modal } from "./components/Modal";
import { LargeBookListItem } from "./components/books/LargeListItem";
import { books } from "./data/books";

function App() {
  return (
    <>
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>
    </>
  );
}

export default App;
