import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { actions, connect } from '../store';
import ExitSelector from './ExitSelector';

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

NetworkSettings.propTypes = {
  state: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(['settings'])(NetworkSettings);
