import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexV3Grow.module.css';
export const initialStateFlexV3Grow={};

const FlexV3Grow = (props) => {
  return (
    <div className={styles.FlexV3Grow} data-testid="FlexV3Grow">
      {props.children}
    </div>
  );
};

FlexV3Grow.propTypes = {
  children: PropTypes.any.isRequired,
};

export default FlexV3Grow;
