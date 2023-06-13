import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexH1Grow.module.css';
export const initialStateFlexH1Grow={};

const FlexH1Grow = (props) => {
  return (
    <div className={styles.FlexH1Grow} data-testid="FlexH1Grow">
      {props.children}
    </div>
  );
};

FlexH1Grow.propTypes = {
  children: PropTypes.any.isRequired,
};

export default FlexH1Grow;
