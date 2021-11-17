import React from "react";
import styled from "styled-components";
import { marked } from "marked";

marked.setOptions({
  breaks: true,
});

const StyledPreviewDiv = styled.div`
  width: 45%;
  min-height: 100vh;
  color: black;
  background-color: #9bdaf0;
`;

export default function Previewdiv(props) {
  const renderer = new marked.Renderer();
  return (
    <StyledPreviewDiv
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(props.text),
      }}
    ></StyledPreviewDiv>
  );
}
