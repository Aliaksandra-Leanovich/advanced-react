import { useLoaderData, useAsyncValue, Await, defer } from "react-router";
import { Suspense } from "react";
import delay from "../util/delay";
import { MainHeading } from "./styled-elements";

const Books = () => {
  const { bookCountPromise, authorsPromise } = useLoaderData();

  return (
    <div>
      <MainHeading>Books</MainHeading>
      <p>
        <h1>Available Books:</h1>
        <Suspense fallback="Fetching...">
          <Await resolve={bookCountPromise}>
            {(data) => <strong>{data}</strong>}
          </Await>
        </Suspense>
      </p>
      <p>
        <h1>Authors:</h1>
        <Suspense fallback="Fetching...">
          <Await resolve={authorsPromise}>
            <Authors />
          </Await>
        </Suspense>
      </p>
    </div>
  );
};

const Authors = () => {
  const authors = useAsyncValue();
  return <strong>{authors}</strong>;
};

function loader() {
  const bookCountPromise = delay(10, 1000);
  const authorsPromise = delay("Codelicks", 2000);

  return defer({
    bookCountPromise,
    authorsPromise,
  });
}

export const booksRoute = { element: <Books />, loader };
