import styled from "styled-components";

export const NavbardWrapper = styled.div`
  border: 1px solid #efefef;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: stretch;

  & .nav-logo {
    width: 215px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .nav-logo span {
    font-size: 1.3rem;
    font-weight: 500;
    font-family: 'Roboto', sans-serif !important;
    line-height: 1.5;
    color: #72777a;
  }

  & .nav-menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 15px;
    margin-top: 1px;
  }

`;