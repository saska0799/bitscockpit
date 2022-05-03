import { createContext, useState, useEffect } from "react";
import useTable from "../hooks/useTable";

const BitsContext = createContext();

export const BitsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [showAddItem, setShowAddItem] = useState(false);
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, data.length / 5.6);
  const [editItem, setEditItem] = useState(null);
  const [editItemData, setEditItemData] = useState({
    oznakaPS: "",
    nazivNV: "",
    region: "",
    mail: "",
  });

  const getData = async () => {
    const response = await fetch("db.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();

    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCheck = (oznakaPS) => {
    return data.some((el) => el.oznakaPS.toString() === oznakaPS);
  };

  const addItem = (item) => {
    if (!handleCheck(item.oznakaPS)) {
      const id = Math.floor(Math.random() * 10000) + 1;
      const newItem = { id, ...item };
      setData([...data, newItem]);
      alert("Podatak je dodat");
    } else {
      alert("Podatak sa tom oznakom već postoji");
    }
  };

  const deleteItem = (el) => {
    setData(data.filter((item) => el !== item));
    alert("Podatak je obrisan");
  };

  const updateItem = (el, data) => {
    el.preventDefault();
    setEditItem(data.id);

    const formValues = {
      oznakaPS: data.oznakaPS,
      nazivNV: data.nazivNV,
      region: data.region,
      mail: data.mail,
    };

    setEditItemData(formValues);
  };

  const editFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editItemData };
    newFormData[fieldName] = fieldValue;

    setEditItemData(newFormData);
  };

  const editFormSubmit = (e) => {
    e.preventDefault();

    const editedItem = {
      id: editItem,
      oznakaPS: editItemData.oznakaPS,
      nazivNV: editItemData.nazivNV,
      region: editItemData.region,
      mail: editItemData.mail,
    };

    const newItem = [...data];

    const index = data.findIndex((item) => item.id === editItem);

    newItem[index] = editedItem;

    setData(newItem);
    setEditItem(null);
    alert("Podatak je sačuvan");
  };

  const cancelClick = () => {
    setEditItem(null);
  };
  return (
    <BitsContext.Provider
      value={{
        data,
        showAddItem,
        setShowAddItem,
        deleteItem,
        updateItem,
        addItem,
        deleteItem,
        updateItem,
        editFormChange,
        editFormSubmit,
        cancelClick,
        editItemData,
        editItem,
        page,
        slice,
        setPage,
        range,
      }}
    >
      {children}
    </BitsContext.Provider>
  );
};

export default BitsContext;
