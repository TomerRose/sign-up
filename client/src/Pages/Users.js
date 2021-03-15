import { useEffect, useState } from "react";
import User from "../Components/User";

const Users = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3010/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>E-mail</td>
          <td>Phone Number</td>
          <td>Age</td>
          <td>Favorite Animal</td>
          <td>Sign Up Timestamp</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return <User key={user.createAt} user={user} />;
        })}
      </tbody>
    </table>
  );
};

export default Users;
