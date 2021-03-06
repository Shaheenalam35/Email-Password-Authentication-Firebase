import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { getAuth } from "firebase/auth";
import app from "./firebase.init";
import { Button } from "react-bootstrap";

const auth = getAuth(app);
function App() {
  const handleEmailBlur = (e) => {
    console.log(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    console.log(e.target.value);
  };
  const handleFormSubmit = (e) => {
    console.log("form submitted");
    e.preventDefault();
  };
  return (
    <div>
      <div className="registration w-50 mx-auto mt-2">
        <h2 className="text-primary">Please Register !</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordBlur}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
