import styled from "styled-components";

import { ThemeColor } from "../../Assets/Styles/Variables";

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px auto 0;
  min-height: 150px;
  position: relative;
  width: 100%;
  min-width: 150px;

  &.purple {
    svg {
      color: ${ThemeColor};
    }
  }

  svg {
    color: white;
    font-size: 100px;
    position: absolute;

    @keyframes rotateLoading {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes rotateLoadingInverse {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }
    &.-animated {
      animation: rotateLoading 3s ease-in-out infinite;
      opacity: 0.8;
    }
    &.-animated-inverse {
      animation: rotateLoadingInverse 1.5s ease-in-out infinite;
    }
  }
`;
