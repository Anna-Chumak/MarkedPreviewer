import React from "react";
import styled from "styled-components";

const StyledEditorContainer = styled.div`
  margin: 2%;
  width: 45%;
  min-height: 100vh;
`;
const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 100vh;
  background-color: #80f0a2;
  color: black;
  border: 2px solid green;
  font-size: 12pt;
`;

const StyledHeader = styled.h3`
  color: green;
  width: 100%;
  height: 30px;
  margin: 0;
`;

export default function Textarea(props) {
  return (
    <StyledEditorContainer>
      <StyledHeader>Editor</StyledHeader>
      <StyledTextarea
        id="editor"
        value={props.text}
        onChange={(event) => {
          const text = event.target.value;
          props.setText(text);
          console.log(props.text);
        }}
      ></StyledTextarea>
    </StyledEditorContainer>
  );
}
