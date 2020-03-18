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

export const LoadingWrapper = styled.div`
  background-color: #2a2826;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;

export const Loading = styled.img`
  height: auto;
  width: 250px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  max-width: 1140px;
`;

export const SearchInput = styled.input`
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  font-size: 20px;
  padding: 15px 20px;
  flex: 1;
`;

export const Button = styled.button`
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  font-size: 20px;
  padding: 15px 20px;
  color: #fff;
  background-color: #333;
  border: 2px solid #333;
  transition: all 300ms ease;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
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
