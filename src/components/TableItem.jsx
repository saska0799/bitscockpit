import { FiDelete } from "react-icons/fi";
const TableItem = ({ data, onDelete }) => {
  return (
    <tr>
      <td>{data.oznakaPS}</td>
      <td>{data.nazivNV}</td>
      <td>{data.region}</td>
      <td>{data.mail}</td>
      <td>
        <FiDelete
          onClick={() => {
            onDelete(data);
          }}
        />
      </td>
    </tr>
  );
};

export default TableItem;
