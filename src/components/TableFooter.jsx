import React, { useEffect } from "react";

const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div className="mb-5">
      {range.map((el, index) => (
        <button
          className="mx-2 btn btn-danger"
          key={index}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default TableFooter;
