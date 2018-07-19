import React, { Component } from 'react';
import MoneyBar from './MoneyBar';
import RefillFunds from './RefillFunds';
import { actions, connect } from '../../store';

class Payments extends Component {
  constructor(props) {
    super(props);
    actions.getInfo();
    actions.getSettings();
  }

  render() {
    const { state } = this.props;
    const { info, settings } = state;

    return (
      <div>
        <h1>
          Payments
        </h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <MoneyBar avgUse={100 + 12} currentFunds={info.balance} />
          <RefillFunds address={settings.payment.eth_address} />
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              padding: 10,
              margin: -20,
            }}
          >
            {/* <LowFunds />
            <PriceQuality /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Payments;
