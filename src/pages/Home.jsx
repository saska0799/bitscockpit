import React, { useState, useEffect } from "react";
import AddItem from "../components/AddItem";
import Table from "../components/Table";

const Home = () => {
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
    alert("Data was added");
  };

  const deleteItem = (el) => {
    setData(data.filter((item) => el !== item));
    alert("Data was deleted");
  };

  const updateItem = (el) => {
    console.log(el);
  };
  return (
    <>
      {showAddItem && <AddItem onAdd={addItem} />}
      {data.length > 0 ? (
        <Table
          data={data}
          rowsPerPage={15}
          onDelete={deleteItem}
          onUpdate={updateItem}
          onAdd={() => setShowAddItem(!showAddItem)}
        />
      ) : (
        "Nema unosa"
      )}
    </>
  );
};

export default Home;
