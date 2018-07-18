import React from 'react';
import ExitList from './ExitList';
import NodeInfoForm from './NodeInfoForm';
import { emailRegex } from '../libs/utility';

const ExitSelector = ({ exitClient: { regDetails, currentExit, exits } }) => (
  <div>
    <NodeInfoForm regDetails={regDetails} />
    <h2 style={{ marginTop: 20 }}>
        Select exit
    </h2>
    <ExitList
      disabled={!(regDetails.email && regDetails.email.match(emailRegex))}
      currentExit={currentExit}
      exits={exits}
    />
  </div>
);

export default ExitSelector;
