import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../../../node_modules/bootstrap/dist/js/bootstrap.js'
import {Navbar, Container, Nav} from 'react-bootstrap';
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
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navigation</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#collection">Collection</Nav.Link>
            <Nav.Link href="#generator">Generator</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
