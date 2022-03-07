import React from 'react';
import { Navbar, Button, Container, NavItem } from "react-bootstrap";
import { selectUser, logout } from '../redux/reducer/userSlice'
import { useSelector, useDispatch } from 'react-redux';

function NavComp() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

  return (
    <div>
      <Navbar style={{backgroundColor:"rosybrown"}} variant="dark">
        <Container>
          <Navbar.Brand >ToDo List</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Welcome: {user.name}
            </Navbar.Text>
            <NavItem className="d-flex px-md-5">
              <Button variant="outline-danger" onClick={(e) => handleLogout(e)}>Logout</Button>
            </NavItem>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavComp
