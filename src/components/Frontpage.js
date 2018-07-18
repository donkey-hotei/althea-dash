import React from 'react';
import payments from '../images/payments.svg';
import neighbors from '../images/neighbors.svg';
import network from '../images/network.svg';
import router from '../images/router.svg';
import Icon from './Icon';

const FrontPage = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
    }}
  >
    <Icon image={payments} link="#payments">
      Payments
    </Icon>
    <Icon image={neighbors} link="#neighbors">
      Neighbors
    </Icon>
    <Icon image={network} link="#network-settings">
      Network Settings
    </Icon>
    <Icon image={router} link="#router-settings">
      Router Settings
    </Icon>
  </div>
);

export default FrontPage;
