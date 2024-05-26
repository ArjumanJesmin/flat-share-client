"use client";

import { useGetUserQuery } from "@/redux/features/user";
import dynamic from "next/dynamic";

// Lazy load the TableRow component
const TableRow = dynamic(() => import("./TableRow"), { ssr: false });

const UserManageTable: React.FC = () => {
  const { data, isLoading, error } = useGetUserQuery("");
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data || data.length === 0) {
    return <div>No users found.</div>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Flat</th>
              <th>CreatedAt</th>
              <th>UpdatedAt</th>
              <th>
                <button>Delete</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <TableRow data={data} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManageTable;
