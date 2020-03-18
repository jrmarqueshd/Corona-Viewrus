import styled from "styled-components";

export const FormWrapper = styled.form`
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
