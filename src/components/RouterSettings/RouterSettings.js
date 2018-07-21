import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { actions, connect } from '../../store';
import WifiSettingsForm from './WifiSettingsForm';

class RouterSettings extends Component {
  componentDidMount() {
    actions.getWifiSettings();
  }

  render() {
    const { wifiSettings, store } = this.props;

    return (
      <div>
        <h1>
          Router Settings
        </h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: 10,
            margin: -20,
          }}
        >
          {wifiSettings
            && wifiSettings.map(settings => (
              <WifiSettingsForm
                store={store}
                key={settings.ssid}
                wifiSettings={settings}
              />
            ))}
        </div>
      </div>
    );
  }
}

RouterSettings.propTypes = {
  wifiSettings: PropTypes.objectOf(PropTypes.string).isRequired,
  store: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(['wifiSettings'])(RouterSettings);
