import { useEffect, useState } from "react";
import User from "./User";

const Users = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3010/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user) => {
        return <User name={user.name}></User>;
      })}
    </div>
  );
};

export default Users;
