import React, { useState } from "react";
import TableItem from "./TableItem";

const TableContainer = ({ data, onDelete, onAdd }) => {
  const [value, setValue] = useState("");
  return (
    <div className="container">
      <div className="container d-flex flex-row align-items-center justify-content-between">
        <input
          className="w-50"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search table"
        />

        <button className="px-5 my-3" onClick={onAdd}>
          Add Item
        </button>
      </div>
      <table className="table table-striped">
        <thead>
          <th>Oznaka</th>
          <th>Naziv</th>
          <th>Region</th>
          <th>Mail</th>
        </thead>

        <tbody>
          {data
            .filter((data) => {
              if (!value) return true;
              if (
                data.oznakaPS.toString().includes(value) ||
                data.nazivNV.includes(value)
              ) {
                return true;
              }
            })
            .map((el) => (
              <TableItem data={el} key={el.id} onDelete={onDelete}></TableItem>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableContainer;
