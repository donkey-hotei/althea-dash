import { initStore } from 'react-stateful';
import {
  getNeighbors,
  getWifiSettings,
  postWifiSettings,
  getSettings,
  postExitConnection,
  getInfo,
} from '../api/endpoints';

const store = {
  initialState: {
    page: '',
    wifiSettings: [],
    neighborData: [],
    info: { balance: 0 },
  },
  actions: {
    changePage: (_, page) => ({ page }),
    getWifiSettings: async () => (
      { wifiSettings: await getWifiSettings() }
    ),
    saveWifiSetting: async ({ state, setState }, setting) => {
      setState({
        wifiSettings: state.wifiSettings.map((s) => {
          if (s.device_name === setting.device_name) {
            return setting;
          }
          return s;
        }),
      });
      await postWifiSettings(setting);
    },
    getNeighborData: async () => (
      { neighborData: await getNeighbors() }
    ),
    getInfo: async () => (
      { info: await getInfo() }
    ),
    requestExitConnection: async (nickname) => {
      await postExitConnection(nickname);
      await getSettings();
    },
    getSettings: async () => {
      const settings = await getSettings();
      return { settings };
    },
  },
};

export const {
  Provider,
  Consumer,
  actions,
  connect,
  subscribe,
  getState,
} = initStore(store);
