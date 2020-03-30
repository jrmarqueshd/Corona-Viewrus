import styled from "styled-components";

import { CardColor, White, Gray } from "../../Assets/Styles/Variables";

export const MenuItem = styled.button`
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
  right: 15px;
  z-index: 20;

  a {
    color: inherit;
  }

  &.first-level {
    bottom: 75px;
    padding: 12px;

    svg {
      font-size: 25px;
    }
  }

  &.second-level {
    bottom: 135px;
    padding: 12px;
    svg {
      font-size: 25px;
    }
  }

  &.-active {
    pointer-events: none;
    background-color: ${CardColor};
    color: ${Gray};
  }

  &:hover {
    opacity: 0.9;
  }
`;
