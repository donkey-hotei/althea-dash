import React, { Component } from 'react';
import { actions, connect } from '../store';
import ExitSelector from './ExitSelector';

const exit_client = {
  exit_client: {
    current_exit: 'exit_a',
    exits: {
      exit_a: {
        general_details: {
          description: 'just a normal althea exit',
          eth_address: '0x0101010101010101010101010101010101010101',
          exit_price: 50,
          netmask: 24,
          server_internal_ip: '172.168.1.254',
          wg_exit_port: 59999,
          wg_public_key: 'OBQNe50O7Gf+pJq4ZC1tTcjVYbx7o8jt4dxTFw7QnVw=',
        },
        ip: 'fd00::5',
        message: 'Registration OK',
        our_details: { client_internal_ip: '172.168.1.101' },
        registration_port: 4875,
        state: 'Registered',
      },
    },
    reg_details: { email: '1234@gmail.com', zip_code: '1234' },
    wg_listen_port: 59999,
  },
  exit_tunnel_settings: { lan_nics: ['lo'] },
  network: {
    babel_port: 6872,
    bounty_ip: 'fd00::3',
    bounty_port: 8888,
    default_route: [],
    manual_peers: [],
    own_ip: 'fd00::1',
    peer_interfaces: ['veth-1-6'],
    rita_dashboard_port: 4877,
    rita_hello_port: 4876,
    wg_private_key: 'AKlrbUt13OPYp6+cy9lllQ47KCdM2+3+y7q3OqsTd2Q=',
    wg_private_key_path:
      '/home/ben/src/althea_rs/integration-tests/private-key-1',
    wg_public_key: 'QEKhgUJ7VnjPnEJ2eLYaLu4RMDhQmylN1dNHQHth+Uw=',
    wg_start_port: 60000,
  },
  payment: {
    buffer_period: 3,
    close_fraction: '100',
    close_threshold: '-1000000000',
    eth_address: '0x0101010101010101010101010101010101010101',
    pay_threshold: '0',
  },
};

class NetworkSettings extends Component {
  componentDidMount() {
    this.timer = setInterval(actions.getSettings, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { state } = this.props;
    const { settings } = state;

    return (
      <div>
        <h1>
          Network Settings
        </h1>
        <p>
          Exit nodes are like a combination of a VPN and a speedtest server.
          They keep your browsing history private and make sure that your
          traffic is always routed through the fastest path in the network at a
          given price.
        </p>
        <p>
          Exit nodes need to collect a bit of information about you (your email
          address), and you need to select an exit node in your region. Althea
          runs some exit nodes, but in the future you will be able to select
          exits from other companies if you prefer.
        </p>
        {settings ? (
          <ExitSelector exit_client={settings.exit_client} />
        ) : (
          <h5>
            Exit node selection screen loading...
          </h5>
        )}
      </div>
    );
  }
}


export default connect(['settings'])(NetworkSettings);
