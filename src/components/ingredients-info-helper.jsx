import styled from "styled-components";

const StyledButton = styled.button`
  width: 1.25rem;
  height: 1.25rem;
  border: 0;
  background-color: white;
  font-size: 20px;
  cursor: pointer;
`;

const IngredientsInfoHelper = (props) => {
  console.log("IngredientsInfoHelper rendered");
  return <StyledButton>📙</StyledButton>;
};

export default IngredientsInfoHelper;
