import React from "react";

import AddingFloatPointInValue from "../../Utils/AddingFloatPointInValue";

import { ResumeCasesWrapper, CardResume, Title, Amount } from "./style";

export default function ResumeCases({ data }) {
  return (
    <ResumeCasesWrapper>
      <CardResume className="-yellow">
        <Title>Total de Casos</Title>
        <Amount>{AddingFloatPointInValue(data.totalInfecteds + "")}</Amount>
      </CardResume>
      <CardResume className="-red">
        <Title>Total de Mortes</Title>
        <Amount>{AddingFloatPointInValue(data.totalDeaths + "")}</Amount>
      </CardResume>
      <CardResume className="-green">
        <Title>Total de Curados</Title>
        <Amount>{AddingFloatPointInValue(data.totalSurvivors + "")}</Amount>
      </CardResume>
    </ResumeCasesWrapper>
  );
}
