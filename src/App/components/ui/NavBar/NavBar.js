import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';
export const initialStateNavBar={};

const NavBar = (props) => {
  const [state, setState] = useState(initialStateNavBar);

  useEffect(()=>{
    //cmp didmount
    console.log('composant NavBar monté');
    return ()=> {
      //cleanup
      console.log('composant NavBar démonté');
    }
  }, []);

  return (
    <div className={styles.NavBar} data-testid="NavBar">
      NavBar Component
    </div>
  );
};

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
