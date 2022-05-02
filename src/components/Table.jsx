import React, { useState } from "react";

import TableFooter from "./TableFooter";
import useTable from "../hooks/useTable";
import TableRow from "./TableRow";
import EditItem from "./EditItem";

const Table = ({
  data,
  onDelete,
  onAdd,
  rowsPerPage,
  editItem,
  editItemData,
  editFormChange,
  onUpdate,
  editFormSubmit,
  onCancelClick,
}) => {
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
          Dodaj podatak
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
                <>
                  {editItem === el.id ? (
                    <EditItem
                      editItemData={editItemData}
                      editFormChange={editFormChange}
                      editFormSubmit={editFormSubmit}
                      onCancelClick={onCancelClick}
                    />
                  ) : (
                    <TableRow el={el} onDelete={onDelete} onUpdate={onUpdate} />
                  )}
                </>
              );
            })}
        </tbody>
      </table>

      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
};

export default Table;
