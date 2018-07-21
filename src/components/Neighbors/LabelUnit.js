import React from 'react';
import { PropTypes } from 'prop-types';

const LabelUnit = ({
  label,
  content,
  // marginBottom,
  // marginRight,
}) => (
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

LabelUnit.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  // marginBottom: PropTypes.number.isRequired,
  // marginRight: PropTypes.number.isRequired,
};

export default LabelUnit;
