import React from 'react';
import PropTypes from "prop-types";


const Star = ({star, length, index}) => {
  const postfix = index === (length - 1) ? `` : `, `;
  return (
    <>
      {star + postfix}
      <br/>
    </>
  );
};

Star.propTypes = {
  star: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

export default Star;
