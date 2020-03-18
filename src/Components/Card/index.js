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
  deaths = "-",
  suspects = "-",
  refuses = "-",
}) {
  return (
    <CardWrapper className={broadcast ? "-live-on" : "-live-off"}>
      <CardItem>
        <CardItem>
          <CardTitle>{title}</CardTitle>
          <InfosWrapper>
            <EachInfo>
              <InfosLabel>Casos</InfosLabel>
              <Infos>{cases}</Infos>
            </EachInfo>

            <EachInfo>
              <InfosLabel>Mortes</InfosLabel>
              <Infos>{deaths}</Infos>
            </EachInfo>

            <EachInfo>
              <InfosLabel>Suspeitas</InfosLabel>
              <Infos>{suspects}</Infos>
            </EachInfo>

            <EachInfo>
              <InfosLabel>Recusas</InfosLabel>
              <Infos>{refuses}</Infos>
            </EachInfo>
          </InfosWrapper>
        </CardItem>
      </CardItem>
    </CardWrapper>
  );
}
