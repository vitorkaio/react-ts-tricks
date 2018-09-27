import * as React from 'react';

import { ControlsWrapper } from "./Constrols.styled";

import OptionsComponent from '../Options/Options.component';
import SidenavComponent from '../Sidenav/Sidenav.component';

/**
 * Component responsável por renderizar o conteúdo da dashboard.
 *
 * @class ControlsComponent
 * @extends {React.Component}
 */
class ControlsComponent extends React.Component {

  public render() {
    return (
      <ControlsWrapper className="controls-wrapper">
        <SidenavComponent />
        <OptionsComponent />
      </ControlsWrapper>
    );
  }
}

export default  ControlsComponent;
