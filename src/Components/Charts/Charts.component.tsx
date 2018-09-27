import * as React from 'react';

import Chart from "react-google-charts";
import { ChartsWrapper } from "./Charts.styled";

const data = [
  ["Atividades", "Horas por dia"],
  ["Trabalho", 8],
  ["Comer", 1],
  ["Conversar", 1],
  ["Youtube", 1],
  ["Estudar", 1],
  ["Dormir", 6] // CSS-style declaration
];
const options = {
  is3D: false,
  pieHole: 0.4,
  title: "Minha Rotina",
};


/**
 * Tela que renderiza os gráficos.
 *
 * @class ChartsComponent
 * @extends {React.Component}
 */
class ChartsComponent extends React.Component {
    public render(): JSX.Element {
      return (
        <ChartsWrapper>
           <Chart
            chartType="PieChart"
            width="80%"
            height="400px"
            data={data}
            options={options}
          />
          {/* <Chart
            chartType="PieChart"
            width="80%"
            height="400px"
            data={data}
            options={options}
          /> */}
        </ChartsWrapper>
      );
    }
}

export default ChartsComponent;