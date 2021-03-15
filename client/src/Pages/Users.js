import React, { useEffect, useState } from "react";
import User from "../Components/User";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const MapStateToProps = (state) => {
  return {
    currentUserName: state.currentUserName,
  };
};

const Users = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3010/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <Container>
      {props.currentUserName && <h2>Current User: {props.currentUserName}</h2>}
      <br />
      <Table striped bordered hover variant="dark">
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
      </Table>
    </Container>
  );
};

export default connect(MapStateToProps, null)(Users);
