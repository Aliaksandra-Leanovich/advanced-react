import { useCallback, useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import IngredientsList from "./ingredients-list";
import IngredientsInfoHelper from "./ingredients-info-helper";
import AddIngredient from "./add-ingredient";

const StyledContainer = styled.div`
  margin-top: 2rem;
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  > div > h2 {
  }
`;

const StyledHeading2 = styled.h2`
  margin-bottom: 1rem;
  font-weight: 600;
`;

const StyledSpaceY4 = styled.div`
  margin-top: 1rem;

  > * + * {
    margin-top: 1rem;
  }
`;

const initialIngredients = [
  {
    id: nanoid(),
    name: "500g Chicken Breasts",
  },
  {
    id: nanoid(),
    name: "300 ml milk",
  },
  {
    id: nanoid(),
    name: "1 tbsp salt",
  },
];

const Ingredients = (props) => {
  console.log("Ingredient rendered");

  const [ingredients, setIngredients] = useState(initialIngredients);

  const addIngredient = (ingredient) => {
    setIngredients((ingredients) => [
      ...ingredients,
      {
        name: ingredient,
        id: nanoid(),
      },
    ]);
  };

  const deleteIngredient = useCallback((id) => {
    setIngredients((ingredients) => ingredients.filter((ing) => ing.id !== id));
  }, []); // or we can do useCallback xuz it leads rerender of component

  const ingredientsHeaderText = useMemo(() => {
    console.log("createIngredientsHeaderText called");
    return <StyledHeading2>Ingredients ({ingredients.length})</StyledHeading2>;
  }, [ingredients.length]); // useMemo for nt rerendering

  return (
    <StyledContainer>
      <div>
        {ingredientsHeaderText}
        <IngredientsInfoHelper />
      </div>

      <StyledSpaceY4>
        <IngredientsList
          ingredients={ingredients}
          deleteIngredient={deleteIngredient}
        />

        <AddIngredient addIngredient={addIngredient} />
      </StyledSpaceY4>
    </StyledContainer>
  );
};

export default Ingredients;
