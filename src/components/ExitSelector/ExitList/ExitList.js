import React from 'react';
import { PropTypes } from 'prop-types';
import { ListGroup } from 'reactstrap';
import ExitListItem from './ExitListItem';

const ExitList = ({ currentExit, exits, disabled }) => (
  <ListGroup className="exit-list-group">
    {exits[currentExit] && (
    <ExitListItem
      active
      description={exits[currentExit].message}
      nickname={currentExit}
      state={exits[currentExit].state}
      message={exits[currentExit].message}
      key="foo"
    />
    )}
    {Object.entries(exits).map(([nickname, exit]) => (
      nickname !== currentExit
          && exit.state !== 'Disabled' && (
            <ExitListItem
              description={exit.message}
              nickname={nickname}
              state={exit.state}
              message={exit.message}
              key={nickname}
            />
      )
    ))}
    {disabled && (
    <div className="exit-list">
      <h5>
        Please enter a valid email address before selecting an exit node.
      </h5>
    </div>
    )}
  </ListGroup>
);

ExitList.defaultProps = {
  disabled: false,
};

ExitList.propTypes = {
  currentExit: PropTypes.string.isRequired,
  exits: PropTypes.shape({
    message: PropTypes.string.isRequired,
    state: PropTypes.oneOf(['Registered', 'Denied', 'New', 'Pending']).isRequired,
    nickname: PropTypes.string.isRequired,
    exit: PropTypes.string.isRequired,
  }).isRequired,
  disabled: PropTypes.bool,
};

export default ExitList;
