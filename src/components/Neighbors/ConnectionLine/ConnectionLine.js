import React from 'react';
import { PropTypes } from 'prop-types';

const ConnectionLine = ({
  // label,
  thickness,
  // children,
  dash,
  scrollDirection,
  scrollSpeed,
}) => {
  let animation;
  if (scrollDirection && scrollSpeed) {
    if (scrollDirection > 0) {
      animation = `ScrollLeft ${scrollSpeed}s linear infinite`;
    } else {
      animation = `ScrollRight ${scrollSpeed}s linear infinite`;
    }
  } else {
    animation = 'none';
  }
  return (
    <div className="connection-line">
      <div
        style={{
          height: thickness,
          background: `linear-gradient(90deg, #fff 0%, #fff ${dash}%, #000 ${dash}%, #000 100%)`,
          backgroundSize: thickness * 2,
          animation,
          width: '100%',
        }}
      />
    </div>
  );
};

ConnectionLine.propTypes = {
  // label: PropTypes.string.isRequired,
  thickness: PropTypes.number.isRequired,
  // children: PropTypes.string.isRequired,
  dash: PropTypes.number.isRequired,
  scrollDirection: PropTypes.number.isRequired,
  scrollSpeed: PropTypes.number.isRequired,
};

export default ConnectionLine;
