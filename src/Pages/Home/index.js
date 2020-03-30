import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FiRefreshCw } from "react-icons/fi";

import {
  fetchGlobalInfo,
  fetchGlobalShortInfos,
  fetchResumeTotalsInfo,
} from "../../Services/Api/CoronaCoutries/Requests";

import Loading from "../../Components/Loading";
import Filter from "../../Components/Filter";
import Form from "../../Components/Form";
import Card from "../../Components/Card";
import ResumeCases from "../../Components/ResumeCases";
import DetailsCountry from "../../Components/DetailsCountry";
import VideoModal from "../../Components/VideoModal";
import Pagination from "../../Components/Pagination";

import TranslateCountryName from "../../Utils/TranslateCountryName";
import isEquivalent from "../../Utils/CompareIfObjIsSame";

import {
  Container,
  FlexContainer,
  Header,
  Title,
  RefreshButton,
} from "./styles";

function Home() {
  const [infos, setInfos] = useState([]);
  const [paginationInfos, setPaginationInfos] = useState([]);
  const [resumeTotalsInfos, setResumeTotalsInfos] = useState([]);
  const [retInfo, setRetInfo] = useState({});
  const [detailsInfo, setDetailsInfo] = useState({});
  const [filteredInfo, setFilteredInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [filterActive, setFilterActive] = useState("");
  const [thisTitle, setThisTitle] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openVideoModal, setOpenVideoModal] = useState(true);
  const [favoritesCountries, setFavoritesCountries] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    getGeolocation();
    setFavoritesCountries(getActuallyFavorites);
  }, []);

  useEffect(() => {
    retrievingInfo();
    saveShortInfos();
  }, [resumeTotalsInfos]);

  useEffect(() => {
    localStorage.setItem("fav_countrys", favoritesCountries);
  }, [favoritesCountries]);

  useEffect(() => {
    setLoading(true);
    fetchData();
    setRefresh(false);
    fetchResumeTotals();
    handleReminderVideo();
  }, [refresh]);

  useEffect(() => {
    handleAmountShowCards();
  }, [infos]);

  const getActuallyFavorites = useMemo(() => {
    let _favorites = localStorage.getItem("fav_countrys");

    if (!_favorites) return [];

    _favorites = _favorites.length > 1 ? _favorites.split(",") : [_favorites];

    return _favorites;
  }, []);

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

  async function fetchResumeTotals() {
    const responseResumeTotalsInfo = await fetchResumeTotalsInfo();
    setResumeTotalsInfos(responseResumeTotalsInfo);
  }

  function getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        // console.log(position);
      });
      console.log("autorizado");
    } else {
      console.log("não autorizado");
    }
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

    if (inputRefValue === "") return inputRef.current.focus();

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

  function saveShortInfos() {
    if (resumeTotalsInfos.length === 0) return;

    const date = new Date().getDate() + "";

    if (date === localStorage.getItem("reminder")) return;

    if (isEquivalent(resumeTotalsInfos.data[0], retInfo)) return;

    localStorage.setItem(
      "short_infos",
      JSON.stringify(resumeTotalsInfos?.data?.[0])
    );
  }

  function retrievingInfo() {
    let shortInfos = localStorage.getItem("short_infos");
    if (!shortInfos) return;

    shortInfos = JSON.parse(shortInfos);

    setRetInfo(shortInfos);
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

  function handleFavorite({ currentTarget: { id } }) {
    if (!favoritesCountries.includes(id)) {
      setFavoritesCountries([...favoritesCountries, id]);
    } else {
      const actuallyFavorites = favoritesCountries.filter(
        country => country !== id
      );

      setFavoritesCountries(actuallyFavorites);
    }
  }

  function handleAmountShowCards(page = 0) {
    if (infos.length === 0) return;

    let _pages = infos?.data?.slice(page, page + 12);

    setPaginationInfos(_pages);
  }

  function handlePagination({ selected }) {
    handleAmountShowCards(selected + 11);
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

        {resumeTotalsInfos.length !== 0 && (
          <ResumeCases data={resumeTotalsInfos.data[0]} retrieves={retInfo} />
        )}
      </FlexContainer>

      {loading && <Loading />}

      <Container>
        {filteredInfo?.map(
          ({ _id, country, totalInfecteds, totalDeaths, totalSurvivors }) => (
            <Card
              onClick={() => {
                handleShowDetails(country);
              }}
              onFavorite={handleFavorite}
              key={_id}
              id={_id}
              title={country}
              cases={totalInfecteds}
              deaths={totalDeaths}
              recovered={totalSurvivors}
              favorite={favoritesCountries.includes(_id) ? true : false}
            />
          )
        )}
        {!filteredInfo.length &&
          paginationInfos?.map(
            ({ _id, country, totalInfecteds, totalDeaths, totalSurvivors }) => (
              <Card
                onClick={() => {
                  handleShowDetails(country);
                }}
                onFavorite={handleFavorite}
                key={_id}
                id={_id}
                title={country}
                cases={totalInfecteds}
                deaths={totalDeaths}
                recovered={totalSurvivors}
                favorite={favoritesCountries.includes(_id) ? true : false}
              />
            )
          )}
      </Container>

      <RefreshButton onClick={handleRefresh}>
        <FiRefreshCw />
      </RefreshButton>

      <ToastContainer autoClose={10000} />

      <Pagination
        totalPages={infos?.data?.length}
        handlePagination={handlePagination}
      />
    </>
  );
}

export default Home;
