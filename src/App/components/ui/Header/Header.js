import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
export const initialStateHeader={};

const Header = (props) => {
  const [state, setState] = useState(initialStateHeader);

  useEffect(()=>{
    //cmp didmount
    console.log('composant Header monté');
    return ()=> {
      //cleanup
      console.log('composant Header démonté');
    }
  }, []);

  return (
    <div className={styles.Header} data-testid="Header">
      Meme Generator <img src='/img/lavage-sous-pression.png' />
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
