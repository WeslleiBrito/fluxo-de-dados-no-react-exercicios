import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);

  const [datas, setDatas] = useState({
    inputName: '',
    inputPhotograph: '',
    inputTitle: '',
    inputImage: '',
    inputDescription: ''
  })

  const onChangeInputName = (event) => {
    setDatas(
      {
        ...datas,
        inputName: event.target.value
      }
    )
  }

  const onChangeInputPhotograph = (event) => {

    setDatas(
      {
        ...datas,
        inputPhotograph: event.target.value
      }
    )

  }

  const onChangeInputTitle = (event) => {
    setDatas(
      {
        ...datas,
        inputTitle: event.target.value
      }
    )
  }

  const onChangeInputImage = (event) => {
    setDatas(
      {
        ...datas,
        inputImage: event.target.value
      }
    )
  }

  const onChangeInputDescription = (event) => {
    setDatas(
      {
        ...datas,
        inputDescription: event.target.value
      }
    )
  }
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          {pageFlow === 1 ? (
            <FormularioLogin
              setPageFlow={setPageFlow} inputName={datas.inputName} onChangeInputName={onChangeInputName}
              inputPhotograph={datas.inputPhotograph} onChangeInputPhotograph={onChangeInputPhotograph}
            />
          ) : (
            <FormularioPostagem
              inputTitle={datas.inputTitle} onChangeInputTitle={onChangeInputTitle}
              inputImage={datas.inputImage} onChangeInputImage={onChangeInputImage}
              inputDescription={datas.inputDescription} onChangeInputDescription={onChangeInputDescription}
            />
          )}
        </aside>
        <TelaDaPostagem />
      </Container>
    </>
  );
}

export default App;
