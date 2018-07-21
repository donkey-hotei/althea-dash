import React from 'react';
import { PropTypes } from 'prop-types';

const PercentSpacer = ({
  children, progress, pointer,
}) => {
  if (progress < 50) {
    return (
      <div style={{ textAlign: 'left', display: 'flex' }}>
        <div
          style={{
            width: `${progress}%`,
            marginLeft: '.5em',
            textAlign: 'right',
          }}
        >
          {pointer}
        </div>
        <div
          style={{
            width: `${100 - progress}%`,
            textAlign: 'left',
          }}
        >
          {children}
        </div>
      </div>
    );
  }
  return (
    <div style={{ textAlign: 'right', display: 'flex' }}>
      <div
        style={{
          width: `${progress}%`,
          textAlign: 'right',
          display: 'inline-block',
        }}
      >
        {children}
      </div>
      <div
        style={{
          width: `${100 - progress}%`,
          marginRight: '.7em',
          textAlign: 'left',
        }}
      >
        {pointer}
      </div>
    </div>
  );
};

PercentSpacer.propTypes = {
  children: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  pointer: PropTypes.string.isRequired,
};

export default PercentSpacer;
