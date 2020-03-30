import React from "react";

import { FaBriefcaseMedical } from "react-icons/fa";
import { GiDeathSkull, GiMedicines, GiInfestedMass } from "react-icons/gi";
import { TiSortAlphabeticallyOutline } from "react-icons/ti";

import { FilterWrapper, Option } from "./style";

const optionsTemplate = [
  {
    id: "az",
    icon: <TiSortAlphabeticallyOutline />,
    label: "A à Z",
  },
  {
    id: "cases",
    icon: <GiInfestedMass />,
    label: "Casos",
  },
  {
    id: "currentCases",
    icon: <FaBriefcaseMedical />,
    label: "Casos em andamento",
  },
  {
    id: "deaths",
    icon: <GiDeathSkull />,
    label: "Mortes",
  },
];

const optionsTemplateCountries = [
  ...optionsTemplate,
  {
    id: "recovered",
    icon: <GiMedicines />,
    label: "Curados",
  },
];

const Filter = ({ handleChange, active, countries }) => {
  return (
    <FilterWrapper>
      {countries
        ? optionsTemplateCountries.map(option => (
            <Option
              key={option.id}
              id={option.id}
              onClick={handleChange}
              className={active === option.id ? "-selected" : ""}
            >
              {option.icon} {option.label}
            </Option>
          ))
        : optionsTemplate.map(option => (
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
