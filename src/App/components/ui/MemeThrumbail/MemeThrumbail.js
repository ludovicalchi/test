import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeThrumbail.module.css';
export const initialStateMemeThrumbail={};

const MemeThrumbail = (props) => {
  const [state, setState] = useState(initialStateMemeThrumbail);

  useEffect(()=>{
    //cmp didmount
    console.log('composant MemeThrumbail monté');
    return ()=> {
      //cleanup
      console.log('composant MemeThrumbail démonté');
    }
  }, []);

  return (
    <div className={styles.MemeThrumbail} data-testid="MemeThrumbail">
      MemeThrumbail Component
    </div>
  );
};

MemeThrumbail.propTypes = {};

MemeThrumbail.defaultProps = {};

export default MemeThrumbail;
