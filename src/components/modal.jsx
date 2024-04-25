import { styled } from "styled-components";
import { balanced, typescale } from "../utils";
import registerImg from "../images/register.svg";
import closeImg from "../images/close.svg";
import { PrimaryButton } from "./button";

const Container = styled.div`
  width: 700px;
  height: 400px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  background-color: ${balanced[100]};
  color: ${balanced[600]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100px;
  margin-top: auto;
  margin-left: auto;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
`;

const CloseImgContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 26px;
  height: 26px;
  padding: 0;
  cursor: pointer;
  background: none;
  border: none;
`;

const ModalHeader = styled.h3`
  position: relative;
  font-size: ${typescale.header3};
  margin-bottom: 8px;
`;

const ModalHelper = styled.p`
  position: relative;
  margin-top: 0;
  touch-action: ${typescale.header4};
`;

const Modal = () => {
  return (
    <Container>
      <CloseImgContainer>
        <img src={closeImg} />
      </CloseImgContainer>
      <img style={{ maxWidth: "350px" }} src={registerImg} />
      <ModalHeader>Register</ModalHeader>
      <ModalHelper>Register and unlock all the features!</ModalHelper>
      <PrimaryButton onClick={() => alert("Clicked!")}>Register</PrimaryButton>
    </Container>
  );
};

export default Modal;
