import React from "react";

import { FilterWrapper, Option } from "./style";

const optionsTemplate = [
  {
    id: "az",
    label: "A-Z",
  },
  {
    id: "cases",
    label: "> Casos",
  },
  {
    id: "deaths",
    label: "> Mortes",
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
          {option.label}
        </Option>
      ))}
    </FilterWrapper>
  );
};

export default Filter;
