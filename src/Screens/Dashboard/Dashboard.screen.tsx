import * as React from "react";

import { DashboardWrapper } from "./Dashboard.styled";

import ControlsComponent from "../../Components/Dashboard/Controls/Controls.component";
import NavbarComponent from "../../Components/Dashboard/Navbar/Navbar.component";
// import SidenavComponent from "../../Components/Dashboard/Sidenav/Sidenav.component";

/**
 * Component principal para renderizar a tela da dashboard.
 *
 * @class DashboardComponent
 * @extends {React.Component}
 */
class DashboardScreen extends React.Component {
  public render(): JSX.Element {
    return (
      <DashboardWrapper className="dashboard">
        <NavbarComponent />
        <ControlsComponent />
      </DashboardWrapper>
    );
  }
}

export default DashboardScreen;