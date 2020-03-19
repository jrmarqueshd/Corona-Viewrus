import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  margin: 15px;
  width: 100%;
  position: relative;

  @keyframes liveAnimation {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    10% {
      transform: scale(1.1);
      opacity: 0.9;
    }
    20% {
      transform: scale(1.15);
      opacity: 0.8;
    }
    30% {
      transform: scale(1.2);
      opacity: 0.7;
    }
    40% {
      transform: scale(1.25);
      opacity: 0.6;
    }
    50% {
      transform: scale(1.3);
      opacity: 0.5;
    }
    60% {
      transform: scale(1.25);
      opacity: 0.6;
    }
    70% {
      transform: scale(1.2);
      opacity: 0.7;
    }
    80% {
      transform: scale(1.15);
      opacity: 0.8;
    }
    90% {
      transform: scale(1.1);
      opacity: 0.9;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  &::before {
    animation: liveAnimation 1s ease-in-out backwards infinite;
    content: "";
    display: block;
    height: 12.5px;
    width: 12.5px;
    border-radius: 100%;
    position: absolute;
    top: 15px;
    right: 15px;
  }

  &.-live-on {
    &::before {
      background-color: #00a000;
    }
  }

  &.-live-off {
    &::before {
      background-color: #a00000;
    }
  }

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
