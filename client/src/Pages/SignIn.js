import { useState } from "react";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const [user, setUser] = useState({});
  let history = useHistory();

  const submitNewUser = (e) => {
    e.preventDefault();
    console.log("form submited");
    let newUser = user;
    fetch("http://localhost:3010/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((newUser) => {
        console.log("Success:", newUser);
        e.preventDefault();
        history.push("/users");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const inputTextHandler = (e) => {
    // e.preventDefault();
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  return (
    <form onSubmit={submitNewUser}>
      <label>name</label>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        onChange={inputTextHandler}
      ></input>
      <br />
      <label>Email</label>
      <input
        type="text"
        name="email"
        placeholder="enter email"
        onChange={inputTextHandler}
      ></input>
      <br />
      <label>Phone number</label>
      <input
        type="text"
        name="phoneNum"
        placeholder="enter phone number"
        onChange={inputTextHandler}
      ></input>
      <br />
      <label>Birth Day</label>
      <input
        type="text"
        name="bDay"
        placeholder="enter Birth Day"
        onChange={inputTextHandler}
      ></input>
      <br />
      <label>Favorite Animal</label>
      <input
        type="text"
        name="favAnimal"
        placeholder="enter favorite animal"
        onChange={inputTextHandler}
      ></input>
      <br />
      <button type="submit">submit</button>
    </form>
  );
};

export default SignIn;
