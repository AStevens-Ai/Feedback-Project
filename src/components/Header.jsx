import React from 'react';
import PropTypes from 'prop-types';

function Header({ text }) {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

export default Header;
