import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  margin: 15px;
  width: 100%;

  @media screen and (min-width: 740px) {
    flex: 1;
    min-width: 340px;
  }
`;

export const CardItem = styled.div`
  box-sizing: border-box;
  background-color: #eee;
  border-radius: 15px;
  padding: 15px;
  width: 100%;
`;

export const CardTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #111;
  text-align: center;
  margin-bottom: 15px;
  text-transform: uppercase;
  flex: 1;
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
  font-size: 20px;
  font-weight: 600;
`;

export const Infos = styled.p`
  display: block;
  font-size: 18px;
  font-weight: 200;
`;
