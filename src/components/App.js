import React, { Component } from 'react';
import {
  Nav, Navbar, NavbarBrand, NavItem, NavLink,
} from 'reactstrap';
import Frontpage from './Frontpage';
import Payments from './Payments';
import Neighbors from './Neighbors';
import RouterSettings from './RouterSettings';
import NetworkSettings from './NetworkSettings';
import { actions, connect } from '../store';

class App extends Component {
  constructor(props) {
    super(props);
    this.onHashChange = this.onHashChange.bind(this);
  }

  componentDidMount() {
    this.onHashChange();
    window.addEventListener('hashchange', this.onHashChange, false);
  }

  static onHashChange() {
    actions.changePage(window.location.hash.substr(1));
  }

  render() {
    return (
      <div className="App">
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="#">
            {' '}
            Althea
          </NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href="#payments">
                Payments
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#neighbors">
                Neighbors
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#router-settings">
                Router Settings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#network-settings">
                Network Settings
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: 750,
              padding: 10,
            }}
          >
            <Page />
          </div>
        </div>
      </div>
    );
  }
}

const Page = connect(['page'])(({ state }) => {
  switch (state.page) {
    case 'router-settings':
      return <RouterSettings />;
    case 'network-settings':
      return <NetworkSettings />;
    case 'payments':
      return <Payments />;
    case 'neighbors':
      return <Neighbors />;
    default:
      return <Frontpage />;
  }
});

export default App;
