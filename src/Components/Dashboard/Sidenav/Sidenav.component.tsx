import * as React from 'react';

import { ItemWithDropdownWrapper, ItemWrapper, OpcaoDropdown, SidenavWrapper, SpacerCollapseBotaoWrapper } from "./Sidenav.styled";
import { IProps, IState } from "./Sidenav.types";

import { connect, MapDispatchToProps } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { triggerComponent } from "./../../../redux/Sidenav/Sidenav.actions";




/**
 * Component responsável por renderizar a side nav da dashboard e o conteúdo.
 *
 * @class SidenavComponent
 * @extends {React.Component}
 */
class SidenavComponent extends React.Component<IProps, IState> {

  // private larguraDefault: string = "18%";
  private larguraDefault: string = "250px";
  // private larguraCollapse: string = "4%";
  private larguraCollapse: string = "70px";

  constructor(props: {}) {
    super(props);

    this.state = {opDropdownShow: false, collapse: false};
  }

  // Collapsa a sidenav.
  public sideNavCollapse = () => {
    this.setState({collapse: !this.state.collapse});
  }

  // Renderiza o dropdown de opções.
  public showOpcoesDropdown = () => {
    this.setState({opDropdownShow: !this.state.opDropdownShow});
  }

  // Renderiza o componente na tela de acordo com o a opção escluída.
  public pushComponent = (component: string) => {
    this.props.triggerComponent(component);
  }

  // Activa o item da sidenav clicado, muda a cor pra preto(ativo)
  public activeItem = (item: string) => {
    return this.props.reducer.sidenav.get("component") === item ? true : false;
  }

  public render() {
    // const isCollapse = this.props.reducer.Sidenav.get("isCollapse");
    const isCollapse = this.state.collapse;
    return (
      <SidenavWrapper className="sidenav-wrapper" largura={isCollapse ? this.larguraCollapse : this.larguraDefault }>

         <ItemWrapper collapse={isCollapse} top="20px" color="black" 
          onClick={this.sideNavCollapse} active={false}>
            <div className="description-side-item">
              <div><Icon name={isCollapse ? 'angle double right' : 'angle double left'} size="large" /></div>
              <span>Collapse</span>
            </div>
          </ItemWrapper>

          <SpacerCollapseBotaoWrapper/>

          <ItemWrapper collapse={isCollapse} top="40px" color={this.activeItem("msg") ? "black" : "#f44336"} 
            active={this.activeItem("msg")}
            onClick={this.pushComponent.bind(this, 'msg')} >
            <div className="description-side-item">
              <div><Icon name='mail' size="large" /></div>
              <span>Mensagens</span>
            </div>
          </ItemWrapper>
          
          <ItemWrapper collapse={isCollapse} top="25px" color={this.activeItem("charts") ? "black" : "#ff9b0f"}
            active={this.activeItem("charts")}
            onClick={this.pushComponent.bind(this, 'charts')} >
            <div className="description-side-item">
              <div><Icon name='chart bar' size="large" /></div>
              <span>Gráficos</span>
            </div>
          </ItemWrapper>

          <ItemWithDropdownWrapper collapse={isCollapse} top="25px" active={false}
           color="#6b46b9" onClick={this.showOpcoesDropdown} >
            <div className="description-side-item">
              <div><Icon name='cogs' size="large" /></div>
              <span>Opções</span>
              <div className="setaDown-side-item">
                <Icon name={this.state.opDropdownShow ? 'angle down' : 'angle right'} size="large" />
              </div>
            </div>
          </ItemWithDropdownWrapper>
          <OpcaoDropdown show={this.state.opDropdownShow && isCollapse === false ? true : false}>
              <div className="item-op-dropdown" onClick={this.pushComponent.bind(this, 'ajustar')}>
                <div>
                  <Icon name='dot circle' size="small" />
                  <span>Ajustar</span>
                </div>
              </div>
              <div className="item-op-dropdown" onClick={this.pushComponent.bind(this, 'about')}>
                <div>
                  <Icon name='dot circle' size="small" />
                  <span>About</span>
                </div>
              </div>
          </OpcaoDropdown>

           <ItemWrapper collapse={isCollapse} top="25px" color={this.activeItem("calendar") ? "black" : "#2e9cf3"}  
          active={this.activeItem("calendar")}
           onClick={this.pushComponent.bind(this, 'calendar')}>
            <div className="description-side-item">
              <div><Icon name='calendar outline' size="large" /></div>
              <span>Calendário</span>
            </div>
          </ItemWrapper>

      </SidenavWrapper>
    );
  }
}

const mapStateToProps = (state: IState): IProps => {
  return {
    reducer: state
  }
}

const mapDispatchToProps: MapDispatchToProps<any, IProps> = (dispatch: any) => {
  return {
    triggerComponent: (Component: string) => {
      dispatch(triggerComponent(Component))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidenavComponent);
