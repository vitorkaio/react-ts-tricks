import styled from "styled-components";

interface ISidenavWrapper {
  largura: string,
}

interface IItemWrapper {
  collapse: boolean // indica se a sidenav stá collapsada se sim então mudar o margin do item.
  top: string // especifica o margin-top do component.
  color: string // Define a cor do ícone.
  active: boolean // Define a cor do texto.
}

interface IOpWrapper {
  show: boolean
}

export const SidenavWrapper = styled.div<ISidenavWrapper>`
  // overflow: auto;
  position: sticky; // Qualquer erro é aqui!!!!

  overflow-x: hidden;
  transition: 0.5s;
  width: ${props => props.largura};

  border: 1px solid #efefef;
  border-top-width: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffffff;

  & .sidenav-mensagem {
    display: inline-block;
    margin: 40px 0 0 10px !important;
  }

  & .sidenav-mensagem * {
    color: #72777a;
  }

  & .sidenav-mensagem > *:nth-child(1) {
    color: #ff616d;
  }

`;

export const ItemWrapper = styled.div<IItemWrapper>`

  width: 100%;
  height: 30px;

  margin-top: ${props => props.top};

  display: ${props => props.collapse ? "initial" : "flex"};
  justify-content: space-around;
  align-items: center;

  // Define que todos os items são inline para que possam ser escondidos.
  /* & * {
    display: inline !important;
  } */

  // Esconde a seta de dropdown
  & .setaDown-side-item {
    visibility: ${props => props.collapse ? "hidden" : "visible"};
  }

  // O ícone e o texto terão um width de 70%.
  & .description-side-item {
    white-space: nowrap; // não deixa o item quebrar pro bloco de baixo.
    width: 100%;
    padding-left: 0.7rem;
  }

  & .description-side-item > div {
    display: inline;
  }

  // Define as propriedades do texto.
  & .description-side-item span {
    margin-left: 10px;
    font-size: 15px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif !important;
    line-height: 1.5;
    visibility: ${props => props.collapse ? "hidden" : "visible"};
    color: ${props => props.active ? "black" : "#72777a"};
  }

  // Modifica a cor e o margin-left do primeiro ícone.
  & .description-side-item i {
    margin-left: ${props => props.collapse ? "10px" : 0};
    color: ${props => props.color};
  }
  cursor: pointer;
`;

export const ItemWithDropdownWrapper = styled(ItemWrapper)`
 & .setaDown-side-item {
    margin-left: 35%;
    visibility: ${props => props.collapse ? "hidden" : "visible"};
  }
`;

export const OpcaoDropdown = styled.div<IOpWrapper>`
  display: ${props => props.show ? "block" : "none"} !important;
  margin-top: 5px;
  margin-left: 35%;

  & > .item-op-dropdown {
    margin-top: 15px;
  }

  & > .item-op-dropdown > div > span {
    margin-left: 5px;
    color: #72777a;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif !important;
  }
  animation: fadeInDown 1s ease-out; /* Animação de entrada. */
`;

export const SpacerCollapseBotaoWrapper = styled.div`
  position: absolute;
  top: 65px;
  left: 0px;

  border: 1px solid #efefef;
  border-width: 0 0 1px 0;
  width: 100%;

`;