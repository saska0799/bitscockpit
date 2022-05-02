import React from "react";
import { MdSaveAlt } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

const EditItem = ({
  editItemData,
  editFormChange,
  editFormSubmit,
  onCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          className="form-control"
          type="text"
          name="oznakaPS"
          value={editItemData.oznakaPS}
          onChange={editFormChange}
        />
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          name="nazivNV"
          value={editItemData.nazivNV}
          onChange={editFormChange}
          disabled
        />
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          name="region"
          value={editItemData.region}
          onChange={editFormChange}
          disabled
        />
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          name="mail"
          value={editItemData.mail}
          onChange={editFormChange}
        />
      </td>
      <td>
        <MdSaveAlt type="submit" onClick={editFormSubmit} />
      </td>
      <td>
        <MdOutlineCancel type="submit" onClick={onCancelClick} />
      </td>
    </tr>
  );
};

export default EditItem;
