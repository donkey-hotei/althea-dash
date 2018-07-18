import React, { Component } from 'react';
import { actions, connect } from '../store';
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
            && wifiSettings.map((settings, i) => (
              <WifiSettingsForm
                store={store}
                key={`setting-${i}`}
                wifiSettings={settings}
              />
            ))}
        </div>
      </div>
    );
  }
}


export default connect(['wifiSettings'])(RouterSettings);
