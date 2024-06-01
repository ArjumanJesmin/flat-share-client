"use client";

import { useGetAllUsersQuery } from "@/redux/features/user";
import UserManageRow from "./UserManageRow";

const UserManageTable = () => {
  const { data: users, isLoading, isError } = useGetAllUsersQuery("");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading users.</p>;
  }

  return (
    <div>
      <div className="overflow-x-auto m-4">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>CreateAt</th>
              <th>UpdateAt</th>
            </tr>
          </thead>
          <tbody>{<UserManageRow users={users} />}</tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManageTable;
