import styled from "styled-components";
import { memo } from "react";

const StyledContainer = styled.div`
  text-align: left;
`;

const StyledList = styled.ul`
  border-color: #d1d5db; /* Replace with your desired color */
  border-width: 0;
  border-style: solid;
  border-top-width: 1px; /* Add this line for the first item */
`;

const StyledListItem = styled.li`
  padding-top: 0.75rem; /* Adjust as needed */
  padding-bottom: 0.75rem; /* Adjust as needed */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  cursor: pointer;
`;

const IngredientsList = (props) => {
  console.log("IngredientsList rendered");
  const { ingredients, deleteIngredient } = props;
  return (
    <StyledContainer>
      <StyledList>
        {ingredients.map((ingredient) => (
          <StyledListItem key={ingredient.id}>
            <span>{ingredient.name}</span>
            <StyledButton onClick={() => deleteIngredient(ingredient.id)}>
              X
            </StyledButton>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledContainer>
  );
};

// export default memo(IngredientsList, (prevProps, nextProps) => {
//   return prevProps.ingredients === nextProps.ingredients;
// });

export default memo(IngredientsList);
