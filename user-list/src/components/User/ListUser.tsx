import React from "react";
import CardBasic from "../Ui/CardBasic";

export interface User {
  id: string;
  name: string;
  age: string;
}

/**
 * List User Component
 *
 * @param {Object} props props for components
 * @param {User[]} props.users users array
 * @class
 */
const ListUser = (props: { users: User[] }) => {
  return (
    <CardBasic className={"mt-4"}>
      {props.users.map((user) => {
        return (
          <CardBasic key={user.id} className={"mt-1"}>
            {user.name} ({user.age} years old)
          </CardBasic>
        );
      })}
    </CardBasic>
  );
};

export default ListUser;
