import React from "react";

import { MdFavoriteBorder, MdFavorite, MdInfoOutline } from "react-icons/md";

import ReactTooltip from "react-tooltip";

import AddingFloatPointInValue from "../../Utils/AddingFloatPointInValue";

import calculateCurrentCases from "../../Utils/CalculateCurrentCases";

import {
  CardWrapper,
  CardItem,
  CardTitle,
  InfosWrapper,
  EachInfo,
  Infos,
  InfosLabel,
  DetailsButton,
  Favorite,
} from "./style";

export default function Card({
  title = "Não informado",
  favorite = false,
  cases = "",
  todayCases = "",
  deaths = "",
  todayDeaths = "",
  suspects = "",
  recovered = "",
  critical = "",
  hiddenDetails = false,
  className,
  onClick,
  onFavorite,
  style,
  id,
}) {
  return (
    <CardWrapper style={style}>
      <ReactTooltip
        place="right"
        type="info"
        effect="float"
        multiline={true}
        delayHide={200}
      />
      <Favorite id={id} onClick={onFavorite}>
        {!favorite ? <MdFavoriteBorder /> : <MdFavorite className="colorful" />}
      </Favorite>

      <CardItem className={className}>
        <CardItem className={className}>
          <CardTitle>{title}</CardTitle>
          <InfosWrapper>
            {cases && (
              <EachInfo>
                <InfosLabel>Total de Casos</InfosLabel>
                <Infos>{AddingFloatPointInValue(cases + "")}</Infos>
              </EachInfo>
            )}

            <EachInfo>
              <InfosLabel>
                Casos em <br /> Andamento{" "}
                <MdInfoOutline data-tip="Pessoas vivas, que ainda estão em recuperação!" />
              </InfosLabel>
              <Infos>
                {AddingFloatPointInValue(
                  calculateCurrentCases(cases, deaths, recovered) + ""
                )}
              </Infos>
            </EachInfo>

            {todayCases !== "" && (
              <EachInfo>
                <InfosLabel>Casos Hoje</InfosLabel>
                <Infos>{AddingFloatPointInValue(todayCases + "")}</Infos>
              </EachInfo>
            )}

            {deaths !== "" && (
              <EachInfo>
                <InfosLabel>Mortes</InfosLabel>
                <Infos>{AddingFloatPointInValue(deaths + "")}</Infos>
              </EachInfo>
            )}

            {todayDeaths !== "" && (
              <EachInfo>
                <InfosLabel>Mortes Hoje</InfosLabel>
                <Infos>{AddingFloatPointInValue(todayDeaths + "")}</Infos>
              </EachInfo>
            )}

            {suspects !== "" && (
              <EachInfo>
                <InfosLabel>Suspeitas</InfosLabel>
                <Infos>{AddingFloatPointInValue(suspects + "")}</Infos>
              </EachInfo>
            )}

            {recovered !== "" && (
              <EachInfo>
                <InfosLabel>Curados</InfosLabel>
                <Infos>{AddingFloatPointInValue(recovered + "")}</Infos>
              </EachInfo>
            )}

            {critical !== "" && (
              <EachInfo>
                <InfosLabel>Casos de entubamentos</InfosLabel>
                <Infos>{AddingFloatPointInValue(critical + "")}</Infos>
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
