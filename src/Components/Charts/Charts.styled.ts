import styled from "styled-components";

export const ChartsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; se houver mais de um. Na ordem de coluna */
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  background-color: #ffffff;
  width: 100%;

  /* & * {
    margin-top: 25px;
  } */
`;