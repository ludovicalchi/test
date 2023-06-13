import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FlexV3Grow.module.css';
export const initialStateFlexV3Grow={};

const FlexV3Grow = (props) => {
  const [state, setState] = useState(initialStateFlexV3Grow);

  useEffect(()=>{
    //cmp didmount
    console.log('composant FlexV3Grow monté');
    return ()=> {
      //cleanup
      console.log('composant FlexV3Grow démonté');
    }
  }, []);

  return (
    <div className={styles.FlexV3Grow} data-testid="FlexV3Grow">
      FlexV3Grow Component
    </div>
  );
};

FlexV3Grow.propTypes = {};

FlexV3Grow.defaultProps = {};

export default FlexV3Grow;
