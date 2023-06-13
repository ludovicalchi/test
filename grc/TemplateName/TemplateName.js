import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';
export const initialStateTemplateName={};

const TemplateName = (props) => {
  const [state, setState] = useState(initialStateTemplateName);

  useEffect(()=>{
    //cmp didmount
    console.log('composant TemplateName monté');
    return ()=> {
      //cleanup
      console.log('composant TemplateName démonté');
    }
  }, []);

  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  );
};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
