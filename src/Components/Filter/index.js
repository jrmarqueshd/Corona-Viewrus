import React from "react";

import { FaBriefcaseMedical } from "react-icons/fa";
import { GiDeathSkull } from "react-icons/gi";

import { FilterWrapper, Option } from "./style";

const optionsTemplate = [
  {
    id: "az",
    label: "A-Z",
  },
  {
    id: "cases",
    icon: <FaBriefcaseMedical />,
    label: "Casos",
  },
  {
    id: "deaths",
    icon: <GiDeathSkull />,
    label: "Mortes",
  },
];

const Filter = ({ handleChange, active }) => {
  return (
    <FilterWrapper>
      {optionsTemplate.map(option => (
        <Option
          key={option.id}
          id={option.id}
          onClick={handleChange}
          className={active === option.id ? "-selected" : ""}
        >
          {option.icon} {option.label}
        </Option>
      ))}
    </FilterWrapper>
  );
};

export default Filter;
