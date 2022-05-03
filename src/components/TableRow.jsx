import React, { useContext } from "react";
import { FiDelete } from "react-icons/fi";
import { GrUpdate } from "react-icons/gr";
import BitsContext from "../context/BitsContext";

const TableRow = ({ el }) => {
  const { updateItem, deleteItem } = useContext(BitsContext);
  return (
    <tr key={el}>
      <td>{el.oznakaPS}</td>
      <td>{el.nazivNV}</td>
      <td>{el.region}</td>
      <td>{el.mail}</td>
      <td>
        <FiDelete
          type="submit"
          onClick={() => {
            deleteItem(el);
          }}
        />
      </td>
      <td>
        <GrUpdate
          type="submit"
          onClick={(e) => {
            updateItem(e, el);
          }}
        />
      </td>
    </tr>
  );
};

export default TableRow;
