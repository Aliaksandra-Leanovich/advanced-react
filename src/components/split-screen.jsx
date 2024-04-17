import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div`
  flex: ${(props) => props.flex};
`;

export const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }) => {
  const [letf, right] = children;
  return (
    <Container>
      <Panel flex={leftWidth}>{letf}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};
