import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand to="#home">Dragon News</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto text-decoration-none">
              <NavLink className="text-decoration-none me-2" to="/">
                Home
              </NavLink>
              <NavLink className="text-decoration-none me-2" to="/">
                About
              </NavLink>
              <NavLink className="text-decoration-none me-2" to="/">
                News
              </NavLink>
              {user?.uid ? (
                <>
                  <Button onClick={logOut}>Logout</Button>
                </>
              ) : (
                <>
                  <NavLink className="text-decoration-none me-2" to="/login">
                    Login
                  </NavLink>
                  <NavLink className="text-decoration-none me-2" to="/register">
                    Register
                  </NavLink>
                </>
              )}
              <NavLink className="text-decoration-none me-2" to="/profile">
                {user?.displayName}
              </NavLink>
              <NavLink className="text-decoration-none me-2" to="/profile">
                {user?.photoURL ? (
                  <Image
                    roundedCircle
                    style={{ height: "30px", width: "30px" }}
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </NavLink>
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
