import styled from "styled-components";

const Header = styled.div`
  background-color: ${props => props.theme.colors.light_black};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export default Header;