import React from 'react';

const Icon = ({ children, link, image }) => (
  <div className="front-page-icon">
    <a href={link}>
      <img width={256} height={256} src={image} />
      <h2>
        {children}
      </h2>
    </a>
  </div>
);

export default Icon;
