import styled from "styled-components";

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 1.2rem;
  /* padding: 20px; */

  & > .options-conteudo {
    border: 1px solid #efefef;
    width: 100%;
    background-color: #ffffff;
    overflow-y: auto;

    display: flex;
  }

  & ::-webkit-scrollbar {
    width: 5px;
}

& ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    opacity: 0.3;
}
 
& ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.4); 
}

& ::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
`;