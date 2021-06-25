import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import ListUser, { User } from "./components/User/ListUser";
import { Container } from "react-bootstrap";

/**
 * @returns {React.ReactElement} Main App
 */
function App() {
  const [userList, setUserList] = useState<User[]>([]);

  /**
   * Add User Handler
   *
   * @param {string} name user entered name
   * @param {string} age user entered age
   */
  const addUserHandler = (name: string, age: string) => {
    setUserList((prevUserList: User[]) => {
      return [...prevUserList, { name, age, id: Math.random().toString() }];
    });
  };

  return (
    <Container>
      <div>
        <AddUser onAddUser={addUserHandler} />
        {userList.length > 0 && <ListUser users={userList} />}
      </div>
    </Container>
  );
}

export default App;
