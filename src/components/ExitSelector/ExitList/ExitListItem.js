import React from 'react';
import {
  Button,
  ListGroupItem,
  ListGroupItemHeading,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import { actions } from '../../../store';

const ExitListItem = ({
  active, description, nickname, state, message,
}) => (
  <ListGroupItem
    color={
        {
          Registered: 'success',
          Denied: 'danger',
        }[state]
      }
    disabled={state === 'Disabled'}
    active={active}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ marginRight: 20, textAlign: 'left' }}>
        <ListGroupItemHeading>
          {nickname}
        </ListGroupItemHeading>
        <div>
          {description}
        </div>
        {active ? (
          <div>
              Currently connected
          </div>
        ) : (
          <div>
            {
                {
                  Registered:
                    `Connection previously accepted${
                      message ? ` with message: ${message}` : ''}`,
                  Denied:
                    `Connection previously denied${
                      message ? ` with message: ${message}` : ''}`,
                  New: 'Never connected',
                  Pending: 'Connection pending',
                }[state]
              }
          </div>
        )}
      </div>

      {active ? (
        <div />
      ) : (
        <div>
          <Button
            disabled={state === 'Disabled' || state === 'Pending'}
            color="primary"
            size="lg"
            onClick={() => actions.requestExitConnection(nickname)}
          >
            {state === 'Pending' ? 'Connecting...' : 'Connect'}
          </Button>
        </div>
      )}
    </div>
  </ListGroupItem>
);

ExitListItem.propTypes = {
  active: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['Registered', 'Denied', 'New', 'Pending']).isRequired,
  message: PropTypes.string.isRequired,
};

export default ExitListItem;
