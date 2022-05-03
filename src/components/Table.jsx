import React, { useState, useContext } from "react";
import TableFooter from "./TableFooter";
import TableRow from "./TableRow";
import EditItem from "./EditItem";
import BitsContext from "../context/BitsContext";

const Table = ({ onAdd }) => {
  const { editItem, slice } = useContext(BitsContext);
  const [value, setValue] = useState("");

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

        <button className="px-sm-5 my-3 btn btn-danger px-3" onClick={onAdd}>
          Dodaj podatak
        </button>
      </div>

      <div className="table-responsive">
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
                      <EditItem el={el.id} />
                    ) : (
                      <TableRow el={el} />
                    )}
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
      <TableFooter />
    </div>
  );
};

export default Table;
