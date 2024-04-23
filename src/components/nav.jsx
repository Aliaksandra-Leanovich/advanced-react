import { Outlet, useNavigation } from "react-router";
import { Suspense } from "react";
import { LoadingMessage, NavContainer, NavLink } from "./styled-elements";

const Nav = () => {
  const { state } = useNavigation();

  return (
    <>
      <NavContainer>
        <NavLink to={"/"}>Main</NavLink>
        <NavLink to={"/books"}>Books</NavLink>
        <NavLink to={"/club"}>Club</NavLink>
        {state === "loading" && <LoadingMessage>Loading...</LoadingMessage>}
      </NavContainer>
      <Suspense fallback={<NavContainer>Loading...</NavContainer>}>
        <NavContainer>
          <Outlet />
        </NavContainer>
      </Suspense>
    </>
  );
};

export default Nav;
