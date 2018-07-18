import React from 'react';
import { Progress } from 'reactstrap';
import PercentSpacer from './PercentSpacer';

const MoneyBar = ({ avgUse, currentFunds }) => {
  let currentFundsPos;
  let avgUsePos;

  const scaling = 85;

  if (currentFunds < avgUse) {
    currentFundsPos = currentFunds / avgUse * scaling;
    avgUsePos = scaling;
  } else {
    avgUsePos = avgUse / currentFunds * scaling;
    currentFundsPos = scaling;
  }

  let color;
  if (currentFunds > 25) {
    color = 'success';
  } else if (currentFunds > 10) {
    color = 'warning';
  } else {
    color = 'danger';
  }

  return (
    <div>
      <PercentSpacer
        progress={currentFundsPos}
        pointer="↓"
        pointerAlign="bottom"
      >
        Current funds: $
        {currentFunds}
      </PercentSpacer>
      <Progress striped color={color} value={currentFundsPos} />
      <PercentSpacer progress={avgUsePos} pointer="↑">
        Average monthly use: $
        {avgUse}
      </PercentSpacer>
    </div>
  );
};

export default MoneyBar;
