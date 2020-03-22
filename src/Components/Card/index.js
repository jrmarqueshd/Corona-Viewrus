import React from "react";

import {
  CardWrapper,
  CardItem,
  CardTitle,
  InfosWrapper,
  EachInfo,
  Infos,
  InfosLabel,
  DetailsButton,
} from "./style";

export default function Card({
  title = "Não informado",
  favorite = false,
  cases = "",
  todayCases = "",
  deaths = "",
  todayDeaths = "",
  suspects = "",
  refuses = "",
  recovered = "",
  critical = "",
  hiddenDetails = false,
  className,
  onClick,
}) {
  return (
    <CardWrapper className={`${favorite ? "-live-on" : "-live-off"}`}>
      <CardItem className={className}>
        <CardItem className={className}>
          <CardTitle>{title}</CardTitle>
          <InfosWrapper>
            {cases && (
              <EachInfo>
                <InfosLabel>Casos</InfosLabel>
                <Infos>{cases}</Infos>
              </EachInfo>
            )}

            {todayCases !== "" && (
              <EachInfo>
                <InfosLabel>Casos Hoje</InfosLabel>
                <Infos>{todayCases}</Infos>
              </EachInfo>
            )}

            {deaths !== "" && (
              <EachInfo>
                <InfosLabel>Mortes</InfosLabel>
                <Infos>{deaths}</Infos>
              </EachInfo>
            )}

            {todayDeaths !== "" && (
              <EachInfo>
                <InfosLabel>Mortes Hoje</InfosLabel>
                <Infos>{todayDeaths}</Infos>
              </EachInfo>
            )}

            {suspects !== "" && (
              <EachInfo>
                <InfosLabel>Suspeitas</InfosLabel>
                <Infos>{suspects}</Infos>
              </EachInfo>
            )}

            {refuses !== "" && (
              <EachInfo>
                <InfosLabel>Recusas</InfosLabel>
                <Infos>{refuses}</Infos>
              </EachInfo>
            )}

            {recovered !== "" && (
              <EachInfo>
                <InfosLabel>Curados</InfosLabel>
                <Infos>{recovered}</Infos>
              </EachInfo>
            )}

            {critical !== "" && (
              <EachInfo>
                <InfosLabel>Casos de entubamentos</InfosLabel>
                <Infos>{critical}</Infos>
              </EachInfo>
            )}
          </InfosWrapper>
        </CardItem>
        {!hiddenDetails && (
          <DetailsButton onClick={onClick}>Mais detalhes</DetailsButton>
        )}
      </CardItem>
    </CardWrapper>
  );
}
