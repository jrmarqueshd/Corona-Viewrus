import styled from "styled-components";

import { ColorPurple } from "../../Assets/Styles/Variables";

export const Container = styled.div`
  padding: 15px;
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;

  ul {
    display: flex;
    justify-content: center;
    max-width: 350px;
    margin: 0 auto;

    li {
      &.disabled {
        display: none;
      }

      &.break {
        a,
        a:hover {
          border: none;
          background-color: transparent;
          color: #ccc;
        }
      }

      &.previous,
      &.next {
        a,
        a:hover {
          border: none;
          background-color: transparent;
          width: auto;
          color: #ccc;
        }
      }

      &:not(:first-of-type) {
        margin-left: 5px;
      }

      &.selected {
        a {
          background-color: #ccc;
          color: ${ColorPurple};
        }
      }

      a {
        border-radius: 7px;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ccc;
        cursor: pointer;
        height: 35px;
        width: 35px;
        transition: all 98.7ms ease;

        &:hover {
          background-color: #ccc;
          color: ${ColorPurple};
        }
      }
    }
  }
`;
