import React from 'react';
import { ListGroup } from 'reactstrap';
import ExitListItem from './ExitListItem';

const ExitList = ({ currentExit, exits, disabled }) => (
  <ListGroup className="exit-list-group">
    {exits[currentExit] && (
    <ExitListItem
      active
      description={exits[currentExit].message}
      nickname={currentExit}
      state={exits[currentExit].statex}
      message={exits[currentExit].message}
      key="foo"
    />
    )}
    {Object.entries(exits).map(([nickname, exit], i) => (
      nickname !== currentExit
          && exit.state !== 'Disabled' && (
            <ExitListItem
              description={exit.message}
              nickname={nickname}
              state={exit.state}
              message={exit.message}
              key={i}
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

export default ExitList;
