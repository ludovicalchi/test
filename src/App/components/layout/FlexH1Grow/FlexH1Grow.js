import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FlexH1Grow.module.css';
export const initialStateFlexH1Grow={};

const FlexH1Grow = (props) => {
  const [state, setState] = useState(initialStateFlexH1Grow);

  useEffect(()=>{
    //cmp didmount
    console.log('composant FlexH1Grow monté');
    return ()=> {
      //cleanup
      console.log('composant FlexH1Grow démonté');
    }
  }, []);

  return (
    <div className={styles.FlexH1Grow} data-testid="FlexH1Grow">
      FlexH1Grow Component
    </div>
  );
};

FlexH1Grow.propTypes = {};

FlexH1Grow.defaultProps = {};

export default FlexH1Grow;
