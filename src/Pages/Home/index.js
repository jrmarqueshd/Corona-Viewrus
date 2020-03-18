import React, { useEffect, useState, useRef } from "react";

import { FiRefreshCw } from "react-icons/fi";

import { fetchVirusInfo } from "../../Services/Api/CoronaAnalytic/Requests";
import { fetchGlobalInfos } from "../../Services/Api/CoronaCoutries/Requests";

import Card from "../../Components/Card";

import {
  Container,
  Title,
  Form,
  SearchInput,
  Button,
  RefreshButton,
  LoadingWrapper,
  Loading,
} from "./styles";

import darkLoading from "../../Assets/Images/loading-dark.gif";

export default function Home() {
  const [infos, setInfos] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState([]);
  const [globalInfos, setGlobalInfos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

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

  function handleRefresh() {
    setRefresh(true);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let inputRefValue = inputRef.current.value;
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
      <Title>Corona Viewrus</Title>

      <Form onSubmit={handleSubmit}>
        <SearchInput ref={inputRef} type="search" />
        <Button>Buscar</Button>
      </Form>

      <Container>
        {loading && (
          <LoadingWrapper>
            <Loading src={darkLoading} />{" "}
          </LoadingWrapper>
        )}

        {filteredInfo &&
          filteredInfo.map((info, key) => (
            <Card
              className="filtered"
              key={info.uid + key + ""}
              title={info.state}
              broadcast={info.broadcast}
              cases={info.cases}
              deaths={info.deaths}
              suspects={info.suspects}
              refuses={info.refuses}
            />
          ))}

        {!filteredInfo.length &&
          infos &&
          infos.brazil &&
          infos.brazil.values.map((info, key) => (
            <Card
              key={info.uid + key + ""}
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
