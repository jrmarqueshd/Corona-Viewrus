import React from "react";

import AddingFloatPointInValue from "../../Utils/AddingFloatPointInValue";

import { ResumeCasesWrapper, CardResume, Title, Amount } from "./style";

export default function ResumeCases({ data }) {
  return (
    <ResumeCasesWrapper>
      <CardResume className="-yellow">
        <Title>Total de Casos</Title>
        <Amount>{AddingFloatPointInValue(1000000 + "")}</Amount>
      </CardResume>
      <CardResume className="-red">
        <Title>Total de Mortes</Title>
        <Amount>{AddingFloatPointInValue(5000 + "")}</Amount>
      </CardResume>
      <CardResume className="-green">
        <Title>Total de Curados</Title>
        <Amount>{AddingFloatPointInValue(995000 + "")}</Amount>
      </CardResume>
    </ResumeCasesWrapper>
  );
}
