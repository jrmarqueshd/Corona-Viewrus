import styled from "styled-components";

export const CardWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  margin: 15px;
  width: 100%;
  position: relative;

  @media screen and (min-width: 740px) {
    flex: 1;
    min-width: 340px;
  }

  @media screen and (min-width: 1140px) {
    max-width: 340px;
  }
`;

export const CardItem = styled.div`
  box-sizing: border-box;
  background-color: #ccc;
  border-radius: 15px;
  padding: 15px;
  width: 100%;

  &.filtered {
    background-color: #eee;
  }
`;

export const CardTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #111;
  text-align: center;
  margin-bottom: 15px;
  text-transform: uppercase;
  flex: 1;
  min-height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 100%;
`;

export const EachInfo = styled.div`
  border-bottom: 1px solid rgba(51, 51, 51, 0.15);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 15px;
  margin-bottom: 5px;
`;

export const InfosLabel = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;

  svg {
    cursor: pointer;
  }
`;

export const Infos = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 200;
`;

export const DetailsButton = styled.span`
  cursor: pointer;
  display: block;
  font-size: 14px;
  text-align: right;
`;

export const Favorite = styled.div`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;

  svg {
    font-size: 26px;

    &.colorful {
      color: #8140ff;
    }
  }
`;
