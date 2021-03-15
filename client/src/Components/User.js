const User = ({ user }) => {
  const age = new Date().getFullYear() - new Date(user.bDay).getFullYear();
  const createAt = new Date(user.createAt);
  const timeStamp = `${createAt.getDate()}-${
    createAt.getMonth() + 1
  }-${createAt.getFullYear()}  
  ${createAt.getHours()}:${createAt.getMinutes()}`;
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNum}</td>
      <td>{age}</td>
      <td>{user.favAnimal}</td>
      <td>{timeStamp}</td>
    </tr>
  );
};

export default User;
