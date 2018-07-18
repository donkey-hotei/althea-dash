import React from 'react';

const ConnectionLine = ({
  label,
  thickness,
  children,
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
    <div
      style={{
        minWidth: 30,
        flexGrow: 1,
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
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

export default ConnectionLine;
