import React, { useState, useContext } from "react";
import AddItem from "../components/AddItem";
import Table from "../components/Table";
import BitsContext from "../context/BitsContext";

const Home = () => {
  const { data } = useContext(BitsContext);
  const [showAddItem, setShowAddItem] = useState(false);
  return (
    <>
      {showAddItem && <AddItem />}
      {data.length > 0 ? (
        <Table onAdd={() => setShowAddItem(!showAddItem)} />
      ) : (
        "Nema podataka"
      )}
    </>
  );
};

export default Home;
