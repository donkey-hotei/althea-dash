import React from 'react';
import { PropTypes } from 'prop-types';

const Icon = ({ children, link, image }) => (
  <div className="front-page-icon">
    <a href={link}>
      <img alt={link} width={256} height={256} src={image} />
      <h2>
        {children}
      </h2>
    </a>
  </div>
);

Icon.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Icon;
