import * as React from 'react';

// import { connect, MapDispatchToProps } from 'react-redux';
// import { triggerCollapse } from "./../../../redux/Sidenav/Sidenav.actions";
import { NavbardWrapper } from './Navbar.styled';

// import { Icon } from 'semantic-ui-react';
import { IProps } from "./Navbar.types";

import * as adminLogo from "./../../../assets/icons/logo.png";

/**
 * Renderiza uma Navbar.
 *
 * @class NavbarComponent
 * @extends {React.Component}
 */
class NavbarComponent extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  /* public collapseSideNavHandler = () => {
    this.props.triggerCollapse();
  } */

  public render(): JSX.Element {
    return (
      <NavbardWrapper>
        <div className="nav-logo">
          <img src={adminLogo} alt="logo"/>
          <span>Administrador</span>
        </div>
        <div className="nav-menu">
          <span>Dashboard logo empresa</span>
        </div>
        <div className="nav-sair"><span>Sair</span></div>
      </NavbardWrapper>
    );
  }
}

// const mapDispatchToProps: MapDispatchToProps<any, IProps> = (dispatch: any) => {
//   return {
//     triggerCollapse: () => {
//       dispatch(triggerCollapse())
//     }
//   }
// }

// export default connect(null, mapDispatchToProps)(NavbarComponent);
export default NavbarComponent;

/* export default connect(null, mapDispatchToProps)(NavbarComponent);

const mapStateToProps = (_state: IAppState): IConnectedProps =>
  ({})

const mapDispatchToProps = (dispatch: any): MapDispatchToProps<IActionCreators, IProps> =>
    bindActionCreators(
        {},
         dispatch
    )*/
