import React, { useEffect, useState, useRef } from "react";

import { FiRefreshCw } from "react-icons/fi";

import { fetchVirusInfo } from "../../Services/Api/CoronaAnalytic/Requests";
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
  const [globalInfos, setGlobalInfos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [filterActive, setFilterActive] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const responseVirusInfo = await fetchVirusInfo();
        const responseGlobalInfos = await fetchGlobalInfos();
        setLoading(false);
        setInfos(responseVirusInfo);
        setGlobalInfos(responseGlobalInfos);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
    setRefresh(false);
  }, [refresh === true]);

  function _changeOrderCards(order) {
    switch (order) {
      case "az":
        console.log(infos.brazil.values);
        setFilteredInfo(
          infos.brazil.values.sort((a, b) => (a.state > b.state ? 1 : -1))
        );
        break;
      case "cases":
        console.log(infos.brazil.values);
        setFilteredInfo(
          infos.brazil.values.sort((a, b) => (a.cases < b.cases ? 1 : -1))
        );
        break;
      case "deaths":
        console.log(infos.brazil.values);
        setFilteredInfo(
          infos.brazil.values.sort((a, b) => (a.deaths < b.deaths ? 1 : -1))
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

    console.log(inputRefValue);

    let arrInfos = [];

    infos.brazil.values.map(info => {
      if (RegExp(inputRefValue, "i").test(info.state)) {
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
        <Filter handleChange={handleChangeFilter} active={filterActive} />

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
            key={
              info.uid +
              key +
              crypto.getRandomValues(new Uint32Array(1))[0] +
              ""
            }
            title={info.state}
            broadcast={info.broadcast}
            cases={info.cases}
            deaths={info.deaths}
            suspects={info.suspects}
            refuses={info.refuses}
          />
        ))}

        {!filteredInfo.length &&
          infos?.brazil?.values.map((info, key) => (
            <Card
              key={
                info.uid +
                key +
                crypto.getRandomValues(new Uint32Array(1))[0] +
                ""
              }
              title={info.state}
              broadcast={info.broadcast}
              cases={info.cases}
              deaths={info.deaths}
              suspects={info.suspects}
              refuses={info.refuses}
            />
          ))}
      </Container>
      <RefreshButton onClick={handleRefresh}>
        <FiRefreshCw />
      </RefreshButton>
    </>
  );
}
