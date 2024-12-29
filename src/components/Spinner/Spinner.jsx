import React from 'react';
import './spinner.scss';

function Spinner(color) {
  return (
    <div className="spinner" style={{ color: color }}>
      <div />
      <div />
      <div />
    </div>
  );
}

Spinner.defaultProps = {
  color: null
};

export default Spinner;
