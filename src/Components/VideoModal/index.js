import React from "react";

import Modal from "react-modal";
import ReactPlayer from "react-player";

import Loading from "../Loading";

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

export default function VideoModal({ open, close }) {
  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      style={customStyles}
      ariaHideApp={false}
      overlayClassName="Overlay"
    >
      <ReactPlayer
        width="100%"
        height="auto"
        url="https://www.youtube.com/watch?v=h8OX0FNWANM"
        playing
      />
    </Modal>
  );
}
