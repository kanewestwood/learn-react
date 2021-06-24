import React from "react";
import AddUser from "./components/User/AddUser";
import { Container } from "react-bootstrap";

/**
 * @returns {React.ReactElement} Main App
 */
function App() {
  return (
    <Container>
      <div>
        <AddUser />
      </div>
    </Container>
  );
}

export default App;
