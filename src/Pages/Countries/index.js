import React, { useEffect, useState, useRef } from "react";

import { FiRefreshCw } from "react-icons/fi";

import { fetchGlobalInfos } from "../../Services/Api/CoronaCoutries/Requests";

import Loading from "../../Components/Loading";
import Filter from "../../Components/Filter";
import Form from "../../Components/Form";
import Card from "../../Components/Card";

import {
  Container,
  FlexContainer,
  Header,
  Title,
  Status,
  RefreshButton,
} from "./styles";

export default function Home() {
  const [infos, setInfos] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [filterActive, setFilterActive] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const responseGlobalInfos = await fetchGlobalInfos();
        setLoading(false);
        setInfos(responseGlobalInfos);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
    setRefresh(false);
  }, [refresh]);

  function _changeOrderCards(order) {
    switch (order) {
      case "az":
        setFilteredInfo(infos.sort((a, b) => (a.country > b.country ? 1 : -1)));
        break;
      case "cases":
        setFilteredInfo(infos.sort((a, b) => (a.cases < b.cases ? 1 : -1)));
        break;
      case "deaths":
        setFilteredInfo(infos.sort((a, b) => (a.deaths < b.deaths ? 1 : -1)));
        break;
      case "recovered":
        setFilteredInfo(
          infos.sort((a, b) => (a.recovered < b.recovered ? 1 : -1))
        );
        break;
      default:
        break;
    }
  }

  function handleChangeFilter({ currentTarget: { id } }) {
    setFilterActive(id);
    _changeOrderCards(id);
  }

  function handleRefresh() {
    setRefresh(true);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let inputRefValue = inputRef.current.value;

    let arrInfos = [];

    infos.map(info => {
      if (RegExp(inputRefValue, "i").test(info.country)) {
        arrInfos.push(info);
      }
    });
    setFilteredInfo(arrInfos);
  }

  return (
    <>
      <Header>
        <Title>Corona Viewrus</Title>
        <Form handleSubmit={handleSubmit} ref={inputRef} />
      </Header>

      <FlexContainer>
        <Filter
          handleChange={handleChangeFilter}
          active={filterActive}
          countries={true}
        />

        {infos?.brazil && (
          <Status>
            Atualizado em <strong>{infos.brazil?.date}</strong> ás{" "}
            <strong>{infos.brazil?.time}</strong>
          </Status>
        )}
      </FlexContainer>

      {loading && <Loading />}

      <Container>
        {filteredInfo?.map((info, key) => (
          <Card
            key={key + crypto.getRandomValues(new Uint32Array(1))[0] + ""}
            title={info.country}
            broadcast={info.broadcast}
            cases={info.cases}
            todayCases={info.todayCases}
            deaths={info.deaths}
            todayDeaths={info.todayDeaths}
            suspects={info.suspects}
            recovered={info.recovered}
          />
        ))}
        {!filteredInfo.length &&
          !infos.brazil &&
          infos.map((info, key) => (
            <Card
              key={key + crypto.getRandomValues(new Uint32Array(1))[0] + ""}
              title={info.country}
              broadcast={info.broadcast}
              cases={info.cases}
              todayCases={info.todayCases}
              deaths={info.deaths}
              todayDeaths={info.todayDeaths}
              suspects={info.suspects}
              recovered={info.recovered}
            />
          ))}
      </Container>
      <RefreshButton onClick={handleRefresh}>
        <FiRefreshCw />
      </RefreshButton>
    </>
  );
}
