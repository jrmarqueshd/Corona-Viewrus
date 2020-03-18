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

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 80px;
  color: #fff;
  text-align: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
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
