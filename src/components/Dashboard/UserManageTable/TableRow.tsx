interface SingleData {
  id: string;
  name: string;
  email: string;
  flat: string;
  createdAt: string;
  updatedAt: string;
}

interface TableRowProps {
  data: SingleData[];
}

const TableRow: React.FC<TableRowProps> = ({ data: flats }) => {
  // console.log(flats);
  // if (!Array.isArray(data)) {
  //   console.error("Data is not an array:", data);
  //   return null;
  // }
  return (
    <>
      {flats?.data?.map((singleData: any, index: any) => (
        <tr key={singleData.id}>
          <th>{index + 1}</th>
          <td>{singleData.name}</td>
          <td>{singleData.email}</td>
          <td>{singleData.flat}</td>
          <td>{new Date(singleData.createdAt).toLocaleString()}</td>
          <td>{new Date(singleData.updatedAt).toLocaleString()}</td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;
