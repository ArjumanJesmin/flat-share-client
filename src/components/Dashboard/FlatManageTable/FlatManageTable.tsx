"use client";

import { useGetUserQuery } from "@/redux/features/user";
import dynamic from "next/dynamic";
import { Flat } from "@/components/type/flatTypes";

const FlatManageTable: React.FC = () => {
  const { data, isLoading, error } = useGetUserQuery("");

  if (isLoading) {
    return <span className="loading loading-bars loading-md"></span>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data || data.length === 0) {
    return <div>No users found.</div>;
  }

  // Assuming the data structure matches the Flat type
  const flats: Flat[] = data;

  // Lazy load the TableRow component
  const TableRow = dynamic(() => import("./TableRow"), { ssr: false });

  return (
    <div>
      <div className="overflow-x-auto  m-4 shadow p-8">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Location</th>
              <th>Description</th>
              <th>Rent Amount</th>
              <th>Bedrooms</th>
              <th>Amenities</th>
              <th>CreatedAt</th>
              <th>UpdatedAt</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <TableRow flats={flats} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlatManageTable;
