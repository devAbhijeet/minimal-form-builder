import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import FormData from "./data/form-data";
import FormBuilder from "./components/FormBuilder";

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export default function App() {
  return (
    <AppContainer>
      <FormBuilder data={FormData} />
    </AppContainer>
  );
}
