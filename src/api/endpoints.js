import client from './client';

/*
 * GET /neighbors
 */
export const getNeighbors = () => client.get('/neighbors');

/*
 * GET /wifi_settings
 */
export const getWifiSettings = () => client.get('/wifi_settings');

/*
 * POST /wifi_settings
 */
export const postWifiSettings = (settings) => {
  client.post('/wifi_settings', settings);
};

/*
 * GET /settings
 */
export const getSettings = () => client.get('/settings');

/*
 * POST /settings
 */
export const postExitConnection = (nick) => {
  client.post('/settings', {
    exitClient: {
      currentExit: nick,
    },
  });
};

/*
 * GET /info
 */
export const getInfo = () => client.get('/info');
