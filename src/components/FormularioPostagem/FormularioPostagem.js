import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = ({ inputTitle, onChangeInputTitle, inputImage, onChangeInputImage, inputDescription, onChangeInputDescription }) => {
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={inputTitle} onChange={onChangeInputTitle} />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={inputImage} onChange={onChangeInputImage} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao" >
          Descrição:
          <Input id="descricao" value={inputDescription} onChange={onChangeInputDescription} />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
