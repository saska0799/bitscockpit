import React, { useState, useEffect } from "react";
import AddItem from "./components/AddItem";
import TableContainer from "./components/TableContainer";

const App = () => {
  const [data, setData] = useState([]);
  const [showAddItem, setShowAddItem] = useState(false);

  const getData = () => {
    fetch("db.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const addItem = (item) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newItem = { id, ...item };
    setData([...data, newItem]);
    console.log(id);
  };

  const deleteItem = (el) => {
    setData(data.filter((item) => el !== item));
  };

  return (
    <>
      {showAddItem && <AddItem onAdd={addItem} />}
      {data.length > 0 ? (
        <TableContainer
          data={data}
          onDelete={deleteItem}
          onAdd={() => setShowAddItem(!showAddItem)}
        />
      ) : (
        "Nema unosa"
      )}
    </>
  );
};

export default App;
