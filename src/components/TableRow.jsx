import React from "react";
import { FiDelete } from "react-icons/fi";
import { GrUpdate } from "react-icons/gr";

const TableRow = ({ el, onDelete, onUpdate }) => {
  return (
    <tr key={el.id}>
      <td>{el.oznakaPS}</td>
      <td>{el.nazivNV}</td>
      <td>{el.region}</td>
      <td>{el.mail}</td>
      <td>
        <FiDelete
          type="submit"
          onClick={() => {
            onDelete(el);
          }}
        />
      </td>
      <td>
        <GrUpdate
          type="submit"
          onClick={(e) => {
            onUpdate(e, el);
          }}
        />
      </td>
    </tr>
  );
};

export default TableRow;
