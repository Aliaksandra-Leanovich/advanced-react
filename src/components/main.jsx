import { useLoaderData, Await } from "react-router";
import { Suspense } from "react";

import { MainContainer, MainHeading } from "./styled-elements";

const Main = () => {
  const { promise } = useLoaderData();

  return (
    <MainContainer>
      <MainHeading>
        Main -{" "}
        <Suspense fallback="Fetching...">
          <Await resolve={promise}>{(data) => <strong>{data}</strong>}</Await>
        </Suspense>
      </MainHeading>
    </MainContainer>
  );
};

export default Main;
