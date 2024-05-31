const UserManageRow = ({ users }: any) => {
  console.log(users);
  return (
    <>
      {users?.data?.map((user: any, index: any) => (
        <tr key={user.id}>
          <th>{index + 1}</th>
          <td>{user?.email}</td>
          <td>{user?.role}</td>
          <td>{new Date(user.createdAt).toLocaleDateString()}</td>
          <td>{new Date(user?.updatedAt).toLocaleDateString()}</td>
        </tr>
      ))}
    </>
  );
};

export default UserManageRow;
