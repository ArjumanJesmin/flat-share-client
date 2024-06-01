"use client";

import { useGetFlatQuery } from "@/redux/features/flat";
import dynamic from "next/dynamic";

const FlatManageTable: React.FC = () => {
  const { data: flats, isLoading, error } = useGetFlatQuery({});

  if (isLoading) {
    return <span className="loading loading-bars loading-md"></span>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

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
