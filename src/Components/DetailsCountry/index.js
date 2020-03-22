import React from "react";

import Modal from "react-modal";

import Loading from "../Loading";

import Card from "../Card";

import { ModalWrapper } from "./style";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    backgroundColor: "transparent",
    border: "none",
  },
};

export default function DetailsCountry({
  title,
  open,
  close,
  data,
  loadingModal: loading,
}) {
  const {
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    active,
    critical,
  } = data;

  return (
    <ModalWrapper>
      <Modal
        isOpen={open}
        onRequestClose={close}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
        overlayClassName="Overlay"
      >
        {loading ? (
          <Loading />
        ) : (
          <Card
            title={title}
            favorite={false}
            cases={cases}
            todayCases={todayCases}
            deaths={deaths}
            todayDeaths={todayDeaths}
            critical={critical}
            recovered={recovered}
            hiddenDetails={true}
          />
        )}
      </Modal>
    </ModalWrapper>
  );
}
