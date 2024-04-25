const Home = (props) => {
  // to pass component as prop wont lead to useless rerenders
  return (
    <div>
      <Ingredients ingrediendsInfoHelper={<IngredientsInfoHelper />} />
    </div>
  );
};
export default Home;
