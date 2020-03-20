import React from "react";

import {
  CardWrapper,
  CardItem,
  CardTitle,
  InfosWrapper,
  EachInfo,
  Infos,
  InfosLabel,
} from "./style";

export default function Card({
  title = "Não informado",
  broadcast = false,
  cases = "-",
  todayCases = "",
  deaths = "-",
  todayDeaths = "",
  suspects = "-",
  refuses = "-",
  recovered = "",
  className,
}) {
  return (
    <CardWrapper className={broadcast ? "-live-on" : "-live-off"}>
      <CardItem className={className}>
        <CardItem className={className}>
          <CardTitle>{title}</CardTitle>
          <InfosWrapper>
            <EachInfo>
              <InfosLabel>Casos</InfosLabel>
              <Infos>{cases}</Infos>
            </EachInfo>

            {todayCases !== "" && (
              <EachInfo>
                <InfosLabel>Casos Hoje</InfosLabel>
                <Infos>{todayCases}</Infos>
              </EachInfo>
            )}

            <EachInfo>
              <InfosLabel>Mortes</InfosLabel>
              <Infos>{deaths}</Infos>
            </EachInfo>

            {todayDeaths !== "" && (
              <EachInfo>
                <InfosLabel>Mortes Hoje</InfosLabel>
                <Infos>{todayDeaths}</Infos>
              </EachInfo>
            )}

            <EachInfo>
              <InfosLabel>Suspeitas</InfosLabel>
              <Infos>{suspects}</Infos>
            </EachInfo>

            <EachInfo>
              <InfosLabel>Recusas</InfosLabel>
              <Infos>{refuses}</Infos>
            </EachInfo>

            {recovered !== "" && (
              <EachInfo>
                <InfosLabel>Curados</InfosLabel>
                <Infos>{recovered}</Infos>
              </EachInfo>
            )}
          </InfosWrapper>
        </CardItem>
      </CardItem>
    </CardWrapper>
  );
}
