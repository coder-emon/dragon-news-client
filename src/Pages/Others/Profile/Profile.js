import React, { useContext, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const photoRef = useRef(user.photURL);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  };
  const handleNameChange = (event) => {
    event.preventDefault();
    const username = event.target.value;
    setName(username);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            readOnly
            defaultValue={user.email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            defaultValue={name}
            onChange={handleNameChange}
            type="text"
            placeholder="Your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
          <Form.Label>Photo URL </Form.Label>
          <Form.Control
            ref={photoRef}
            defaultValue={user.photoURL}
            type="text"
            placeholder="photoURL"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Profile;
