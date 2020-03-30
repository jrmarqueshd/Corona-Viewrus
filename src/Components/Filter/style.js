import styled from "styled-components";

import { ThemeColor, White } from "../../Assets/Styles/Variables";

export const FilterWrapper = styled.div`
  margin: 20px auto 15px;
  padding: 0 30px;
  width: 100%;
  max-width: 1140px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
    padding-left: 15px;
    margin: 0;
  }
`;

export const Option = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 6px;
  padding-left: 20px;
  color: ${White};
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 15px;
  }

  &::before {
    content: "";
    background-color: ${White};
    border: 3px solid ${White};
    border-radius: 100%;
    display: block;
    padding: 5px;
    position: absolute;
    left: 0;
    top: 0;
  }

  &.-selected {
    &::before {
      background-color: ${ThemeColor};
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;
