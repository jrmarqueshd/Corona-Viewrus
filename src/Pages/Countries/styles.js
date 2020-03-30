import styled from "styled-components";

import { White, Gray } from "../../Assets/Styles/Variables";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  max-width: 1140px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 15px auto 0;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  max-width: 1140px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 15px;
  }
`;

export const Status = styled.p`
  font-size: 12px;
  color: ${White};
  margin: 15px auto 0;
  padding-left: 30px;
  padding-right: 30px;
  text-align: right;
  width: 100%;
  max-width: 1140px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-top: 0;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  max-width: 1140px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  color: ${White};
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const RefreshButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  font-size: 20px;
  padding: 15px;
  color: ${White};
  background-color: ${Gray};
  border: 2px solid ${Gray};
  transition: all 300ms ease;
  cursor: pointer;
  position: fixed;
  bottom: 15px;
  right: 15px;

  &:hover {
    opacity: 0.9;
  }
`;
