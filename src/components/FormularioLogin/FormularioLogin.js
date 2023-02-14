import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const login = () => {
    props.setPageFlow(2);
  };
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} value={props.inputName} onChange={props.onChangeInputName} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} value={props.inputPhotograph} onChange={props.onChangeInputPhotograph} />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
