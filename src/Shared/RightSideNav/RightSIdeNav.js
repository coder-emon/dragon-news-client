import { Button, Carousel, ListGroup } from "react-bootstrap";
import React, { useContext, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import brand1 from "..//..//assets/brands/Brand1.png";
import brand2 from "..//..//assets/brands/Brand2.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const RightSideNav = () => {
  const [index, setIndex] = useState(0);
  const { setUser, signInWithGoogle, setLoading } = useContext(AuthContext);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Button
        variant="outline-primary"
        className="my-2"
        onClick={handleGoogleSignIn}
      >
        <FaGoogle></FaGoogle> Sign In With Google
      </Button>
      <Button variant="outline-dark" className="my-1">
        <FaGithub></FaGithub> Sign In With Github
      </Button>
      <h4>Follow us on</h4>
      <ListGroup>
        <ListGroup.Item>
          <FaFacebook> </FaFacebook> Facebook
        </ListGroup.Item>
        <ListGroup.Item>
          <FaWhatsapp></FaWhatsapp> Whatsapp
        </ListGroup.Item>
        <ListGroup.Item>
          <FaTwitch></FaTwitch> Twich
        </ListGroup.Item>
        <ListGroup.Item>
          <FaTwitter></FaTwitter> Twitter
        </ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={brand1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={brand2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default RightSideNav;
