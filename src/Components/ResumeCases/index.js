import React from "react";

import AddingFloatPointInValue from "../../Utils/AddingFloatPointInValue";

import {
  ResumeCasesWrapper,
  CardResume,
  Title,
  Amount,
  LastAmount,
  ShortTitle,
} from "./style";

export default function ResumeCases({
  data: { totalDeaths, totalInfecteds, totalSurvivors },
  retrieves: {
    totalDeaths: deaths,
    totalInfecteds: infecteds,
    totalSurvivors: survivors,
  },
}) {
  return (
    <ResumeCasesWrapper>
      <CardResume className="-yellow">
        <Title>Total de Casos</Title>
        <Amount>{AddingFloatPointInValue(totalInfecteds + "")}</Amount>
        {infecteds && infecteds !== totalInfecteds ? (
          <LastAmount>
            +{AddingFloatPointInValue(totalInfecteds - infecteds + "")}{" "}
            <ShortTitle>desde sua última visita</ShortTitle>
          </LastAmount>
        ) : (
          ""
        )}
      </CardResume>
      <CardResume className="-red">
        <Title>Total de Mortes</Title>
        <Amount>{AddingFloatPointInValue(totalDeaths + "")}</Amount>
        {deaths && deaths !== totalDeaths ? (
          <LastAmount>
            +{AddingFloatPointInValue(totalDeaths - deaths + "")}{" "}
            <ShortTitle>desde sua última visita</ShortTitle>
          </LastAmount>
        ) : (
          ""
        )}
      </CardResume>
      <CardResume className="-green">
        <Title>Total de Curados</Title>
        <Amount>{AddingFloatPointInValue(totalSurvivors + "")}</Amount>
        {survivors && survivors !== totalSurvivors ? (
          <LastAmount>
            +{AddingFloatPointInValue(totalSurvivors - survivors + "")}{" "}
            <ShortTitle>desde sua última visita</ShortTitle>
          </LastAmount>
        ) : (
          ""
        )}
      </CardResume>
    </ResumeCasesWrapper>
  );
}
