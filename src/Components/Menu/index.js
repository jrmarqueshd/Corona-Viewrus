import React from "react";

import { TiWorld } from "react-icons/ti";
import { GiBrazilFlag } from "react-icons/gi";

import { MenuItem } from "./style";

export default function Menu() {
  return (
    <>
      <MenuItem
        onClick={() => {
          window.location.pathname = "/paises";
        }}
        className={`first-level ${
          window.location.pathname === "/paises" ? "-active" : ""
        }`}
      >
        <TiWorld />
      </MenuItem>
      <MenuItem
        onClick={() => {
          window.location.pathname = "/";
        }}
        className={`second-level  ${
          window.location.pathname === "/" ? "-active" : ""
        }`}
      >
        <GiBrazilFlag />
      </MenuItem>
    </>
  );
}
