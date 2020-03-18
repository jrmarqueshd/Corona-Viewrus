import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  max-width: 1140px;
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
  color: #fff;
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
  color: #fff;
  background-color: #333;
  border: 2px solid #333;
  transition: all 300ms ease;
  cursor: pointer;
  position: fixed;
  bottom: 15px;
  right: 15px;

  &:hover {
    opacity: 0.9;
  }
`;
