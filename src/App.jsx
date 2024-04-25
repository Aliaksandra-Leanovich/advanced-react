import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Suspense, lazy } from "react";
import LazyLoader from "./components/lazy-loader";

const Home = lazy(() => import("./components/home"));
const About = lazy(() => import("./components/about"));
const Contact = lazy(() => import("./components/contact"));

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 6xl;
  text-align: center;
  margin-top: 8rem;
`;

const Heading = styled.h1`
  font-weight: 600;
  font-size: 2xl;
`;

const NavContainer = styled.div`
  margin-top: 8rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

function App() {
  return (
    <AppContainer>
      <Heading>Advanced React - Codelicks Academy</Heading>
      <NavContainer>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </Nav>
      </NavContainer>
      <Suspense fallback={<LazyLoader show delay={500} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AppContainer>
  );
}

export default App;
