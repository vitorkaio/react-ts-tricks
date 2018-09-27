import * as React from 'react';

import { OptionsWrapper } from "./Options.styled";

import { connect } from 'react-redux';
import ChartsComponent from '../../Charts/Charts.component';
import MensagensComponent from '../../Message/Message.component';
import { IProps } from "./Options.types";


/**
 * Recebe do redux um valor e renderiza o componente de acordo com esse valor.
 * Ex: Se o valor for 1 então renderiza o componente que está atrelado ao valor 1.
 *
 * @class OptionsComponent
 * @extends {React.Component<IProps, {}>}
 */
class OptionsComponent extends React.Component<IProps, {}> {

  // Verifica qual component renderiza de acordo com o redux.
  public roteamentoDeComponent = () => {
    const rota = this.props.reducer.sidenav.get("component");
    
    if(rota === "msg") {
      return <MensagensComponent />
    }

    else if(rota === "charts") {
      return <ChartsComponent />
    }

    return null;
  }

  public render() {
    // console.log(this.props.reducer.sidenav.get("component"));
    const component = this.roteamentoDeComponent();
    return (
      <OptionsWrapper className="options-wrapper">
        <div className="options-conteudo">
          {component}
        </div>
      </OptionsWrapper>
    );
  }
}

const mapStateToProps = (state: any): IProps => {
  return {
    reducer: state
  }
}

export default connect(mapStateToProps, null)(OptionsComponent);

