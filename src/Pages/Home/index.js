import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { fetchVirusInfo } from "../../Services/Api/Requests";

import Card from "../../Components/Card";

import { Container, Title } from "./styles";

export default function Home() {
  const [infos, setInfos] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchVirusInfo();
        setInfos(response);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Title>Corona Viewrus</Title>
      {infos &&
        infos.brazil &&
        infos.brazil.values.map((info, key) => (
          <Card
            key={info.uid + key + ""}
            title={info.state}
            cases={info.cases}
            deaths={info.deaths}
            suspects={info.suspects}
            refuses={info.refuses}
          />
        ))}
    </Container>
  );
}
