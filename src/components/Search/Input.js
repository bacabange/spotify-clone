import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  border-radius: 15px;
  border: none;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  padding: 1rem;
  outline: none;
  width: 100%;
  font-size: 20px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${props => props.theme.colors.green};
  }
`;

export default Input;