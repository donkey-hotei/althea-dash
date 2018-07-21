import React from 'react';
import { PropTypes } from 'prop-types';
import ExitList from './ExitList';
import NodeInfoForm from './NodeInfoForm';
import { emailRegex } from '../../lib/utils';

const ExitSelector = ({ exitClient: { regDetails, currentExit, exits } }) => (
  <div>
    <NodeInfoForm regDetails={regDetails} />
    <h2 className="exit-selector-header">
        Select exit
    </h2>
    <ExitList
      disabled={!(regDetails.email && regDetails.email.match(emailRegex))}
      currentExit={currentExit}
      exits={exits}
    />
  </div>
);

ExitSelector.propTypes = {
  exitClient: PropTypes.shape({
    regDetails: PropTypes.string,
    currentExit: PropTypes.string,
    exits: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

export default ExitSelector;
