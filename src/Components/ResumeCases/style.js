import styled from "styled-components";

export const ResumeCasesWrapper = styled.div`
  padding: 0 15px;
  margin: 15px 0;
  width: 100%;

  @media screen and (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const CardResume = styled.div`
  box-sizing: border-box;
  border-radius: 15px;
  border-left: 5px solid;
  background-color: #ccc;
  display: flex;
  flex-wrap: wrap;
  margin-top: 7.5px;
  margin-bottom: 7.5px;
  padding: 15px;
  width: 100%;

  &.-red {
    border-color: #ff0000;
  }

  &.-yellow {
    border-color: #ffff00;
  }
  &.-green {
    border-color: #006400;
  }

  @media screen and (min-width: 768px) {
    flex: 1;

    &:not(:first-child) {
      margin-left: 7.5px;
    }

    &:not(:last-child) {
      margin-right: 7.5px;
    }
  }

  @media screen and (min-width: 1140px) {
    flex: 1;

    &:not(:first-child) {
      margin-left: 15px;
    }

    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`;

export const Title = styled.h3`
  width: 100%;
  margin-bottom: 5px;

  @media (min-width: 600px) and (max-width: 767px) {
    min-height: 50px;
    display: flex;
    align-items: center;
  }
`;

export const Amount = styled.p`
  font-size: 30px;
`;

export const LastAmount = styled.span`
  font-size: 14px;
  font-weight: bold;
  width: 100%;
`;

export const ShortTitle = styled.span`
  font-size: 8px;
  text-transform: uppercase;
  color: #000;
`;
