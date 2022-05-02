import React, { useState } from "react";

const AddItem = ({ onAdd }) => {
  const [oznakaPS, setOznaka] = useState("");
  const [nazivNV, setNaziv] = useState("");
  const [region, setRegion] = useState("");
  const [mail, setMail] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    if (!oznakaPS || !nazivNV || !region || !mail) {
      alert("Molimo Vas unesite potrebne podatke");
      return;
    }

    onAdd({ oznakaPS, nazivNV, region, mail });

    setOznaka("");
    setNaziv("");
    setRegion("");
    setMail("");
  };
  return (
    <form className="form-control container w-25 text-start my-5 ">
      <div className=" d-flex justify-content-between align-items-center my-2">
        <label className="w-50">Dodaj oznaku: </label>
        <input
          className="form-control"
          type="text"
          placeholder="Dodaj oznaku"
          value={oznakaPS}
          onChange={(e) => setOznaka(e.target.value)}
        />
      </div>
      <div className=" d-flex justify-content-between align-items-center  my-2">
        <label className="w-50">Dodaj naziv: </label>
        <input
          className="form-control"
          type="text"
          placeholder="Dodaj naziv"
          value={nazivNV}
          onChange={(e) => setNaziv(e.target.value)}
        />
      </div>
      <div className=" d-flex justify-content-between align-items-center  my-2">
        <label className="w-50">Dodaj region: </label>
        <input
          className="form-control"
          type="text"
          placeholder="Dodaj region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
      </div>
      <div className=" d-flex justify-content-between align-items-center  my-2">
        <label className="w-50">Dodaj mail: </label>
        <input
          className="form-control"
          type="mail"
          placeholder="Dodaj mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </div>

      <button
        type="button"
        value="save"
        onClick={onSubmit}
        className="px-5 my-3 btn btn-danger"
      >
        Sačuvaj
      </button>
    </form>
  );
};

export default AddItem;
