import React, { useEffect } from 'react';
import styles from './NavBar.module.css';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import {Navbar, Container, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

export const initialStateNavBar={};

const NavBar = (props) => {

  useEffect(()=>{
    //cmp didmount
    //console.log('composant NavBar monté');
    return ()=> {
      //cleanup
      //console.log('composant NavBar démonté');
    }
  }, []);

  return (
    <div className={styles.NavBar} data-testid="NavBar">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <LinkContainer to="/thrumbail">
              <Nav.Link href="/thrumbail">Thrumbail</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/meme">
              <Nav.Link href="/meme">New</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/meme/0">
              <Nav.Link href="/meme/0">Edit id:0</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/meme/1">
              <Nav.Link href="/meme/1">Edit id:1</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
