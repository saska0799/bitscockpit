import React, { useState } from "react";
import { FiDelete } from "react-icons/fi";
import { GrUpdate } from "react-icons/gr";
import TableFooter from "./TableFooter";
import useTable from "../hooks/useTable";

const Table = ({ data, onDelete, onUpdate, onAdd, rowsPerPage }) => {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <div className="container">
      <div className="container d-flex flex-row align-items-center justify-content-between mt-5">
        <input
          className="w-50 form-control"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search table"
        />

        <button className="px-5 my-3 btn btn-danger" onClick={onAdd}>
          Add Item
        </button>
      </div>
      <table className="table table-hover table-striped my-5">
        <thead>
          <tr>
            <th>Oznaka</th>
            <th>Naziv</th>
            <th>Region</th>
            <th>Mail</th>
          </tr>
        </thead>

        <tbody>
          {slice
            .filter((data) => {
              if (!value) return true;
              if (
                data.oznakaPS.toString().includes(value) ||
                data.nazivNV.toLowerCase().includes(value) ||
                data.region.toLowerCase().includes(value)
              ) {
                return true;
              }
            })
            .map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.oznakaPS}</td>
                  <td>{el.nazivNV}</td>
                  <td>{el.region}</td>
                  <td>{el.mail}</td>
                  <td>
                    <FiDelete
                      onClick={() => {
                        onDelete(el);
                      }}
                    />
                  </td>
                  <td>
                    <GrUpdate
                      onClick={() => {
                        onUpdate(el);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
};

export default Table;
