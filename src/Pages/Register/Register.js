import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Register = () => {
  const { signUp, updateUser, setLoading, emailVerify } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [Accepted, setAccepted] = useState(true);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    signUp(email, password)
      .then((result) => {
        updateUser(name, photoUrl);
        console.log(result.user);
        emailVerify()
          .then(() => {
            toast.success("Verification mail sent successfully");
          })
          .catch(() => {});
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        console.error(error);
      });
  };
  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
  };
  return (
    <div>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>photoURL</Form.Label>
          <Form.Control type="text" name="photoUrl" placeholder="PhotoUrl" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            label={
              <>
                Accept <Link to="/terms">Terms and conditions</Link>
              </>
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!Accepted}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
