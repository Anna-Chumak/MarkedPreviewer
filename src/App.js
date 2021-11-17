import "./App.css";
import { placeholder } from "./utility/text";
import { useState } from "react";
import styled from "styled-components";
import Textarea from "./components/Textarea";
import Previewdiv from "./components/Previewdiv";

const FlexDiv = styled.div`
  display: flex;
`;

function App() {
  const [text, setText] = useState(placeholder);
  return (
    <FlexDiv className="App">
      <Textarea text={text} setText={setText} />
      <Previewdiv text={text} />
    </FlexDiv>
  );
}

export default App;
