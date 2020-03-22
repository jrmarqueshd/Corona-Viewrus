import React, { useEffect, useState, useRef } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FiRefreshCw } from "react-icons/fi";

import {
  fetchGlobalInfo,
  fetchGlobalShortInfos,
} from "../../Services/Api/CoronaCoutries/Requests";

import Loading from "../../Components/Loading";
import Filter from "../../Components/Filter";
import Form from "../../Components/Form";
import Card from "../../Components/Card";
import DetailsCountry from "../../Components/DetailsCountry";
import VideoModal from "../../Components/VideoModal";

import TranslateCountryName from "../../Utils/TranslateCountryName";

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
  const [detailsInfo, setDetailsInfo] = useState({});
  const [filteredInfo, setFilteredInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [filterActive, setFilterActive] = useState("");
  const [thisTitle, setThisTitle] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openVideoModal, setOpenVideoModal] = useState(true);

  const inputRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    fetchData();
    setRefresh(false);
    handleReminderVideo();
  }, [refresh]);

  async function fetchData() {
    try {
      const reponseGlobalShortInfos = await fetchGlobalShortInfos();
      setInfos(reponseGlobalShortInfos);
      setLoading(false);
    } catch (err) {
      handleNotify("Erro ao buscar países!", "error");
      console.log(err);
    }
  }

  async function fetchDetailsCountry(country) {
    setLoadingModal(true);

    const responseGlobalInfo = await fetchGlobalInfo(
      TranslateCountryName(country)
    );

    setDetailsInfo(responseGlobalInfo);
    setThisTitle(country);

    setLoadingModal(false);
  }

  function _changeOrderCards(order) {
    switch (order) {
      case "az":
        setFilteredInfo(
          infos?.data?.sort((a, b) => (a.country > b.country ? 1 : -1))
        );
        break;
      case "cases":
        setFilteredInfo(
          infos?.data?.sort((a, b) =>
            a.totalInfecteds < b.totalInfecteds ? 1 : -1
          )
        );
        break;
      case "deaths":
        setFilteredInfo(
          infos?.data?.sort((a, b) => (a.totalDeaths < b.totalDeaths ? 1 : -1))
        );
        break;
      case "recovered":
        setFilteredInfo(
          infos?.data?.sort((a, b) =>
            a.totalSurvivors < b.totalSurvivors ? 1 : -1
          )
        );
        break;
      default:
        break;
    }
  }

  function _searchCountry() {
    let inputRefValue = inputRef.current.value;

    let arrInfos = [];

    infos.data.map(info => {
      if (RegExp(inputRefValue, "i").test(info.country)) {
        arrInfos.push(info);
      }
    });

    inputRef.current.value = "";

    if (!arrInfos.length) {
      handleNotify("País não encontrado!", "error");
      return;
    }

    setFilteredInfo(arrInfos);
  }

  function _closeModal() {
    setOpenModal(false);
    setOpenVideoModal(false);
  }

  function handleReminderVideo() {
    const date = new Date();

    if (
      !localStorage.getItem("reminder") ||
      date.getDate() !== Number(localStorage.getItem("reminder"))
    ) {
      setOpenVideoModal(true);
      localStorage.setItem("reminder", date.getDate() + "");
    } else {
      setOpenVideoModal(false);
    }
  }

  function handleShowDetails(country) {
    setOpenModal(true);
    fetchDetailsCountry(country);
  }

  function handleNotify(message = String(""), type = String("")) {
    if (type.length) return toast[type](message);

    return toast(message);
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
    _searchCountry();
  }

  return (
    <>
      <DetailsCountry
        loadingModal={loadingModal}
        open={openModal}
        close={_closeModal}
        title={thisTitle}
        data={detailsInfo}
      />

      <VideoModal open={openVideoModal} close={_closeModal} />

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
        {filteredInfo?.map(info => (
          <Card
            onClick={() => {
              handleShowDetails(info.country);
            }}
            key={info._id}
            title={info.country}
            cases={info.totalInfecteds}
            deaths={info.totalDeaths}
            recovered={info.totalSurvivors}
          />
        ))}
        {!filteredInfo.length &&
          infos?.data?.map(info => (
            <Card
              onClick={() => {
                handleShowDetails(info.country);
              }}
              key={info._id}
              title={info.country}
              cases={info.totalInfecteds}
              deaths={info.totalDeaths}
              recovered={info.totalSurvivors}
            />
          ))}
      </Container>

      <RefreshButton onClick={handleRefresh}>
        <FiRefreshCw />
      </RefreshButton>

      <ToastContainer autoClose={10000} />
    </>
  );
}
