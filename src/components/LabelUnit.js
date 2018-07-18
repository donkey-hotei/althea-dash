import React from 'react';

function LabelUnit({
  label, content, marginBottom, marginRight,
}) {
  return (
    <div
      style={{
        lineHeight: '100%',
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
      }}
    >
      <small>
        {label}
:
      </small>
      <br />
      <b>
        {content}
      </b>
    </div>
  );
}

export default LabelUnit;
