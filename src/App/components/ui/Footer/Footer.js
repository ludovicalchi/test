import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
export const initialStateFooter={};

const Footer = (props) => {
  const [state, setState] = useState(initialStateFooter);

  useEffect(()=>{
    //cmp didmount
    //console.log('composant Footer monté');
    return ()=> {
      //cleanup
      //console.log('composant Footer démonté');
    }
  }, []);

  return (
    <div className={styles.Footer} data-testid="Footer">
      Consulter les CGU
    </div>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
