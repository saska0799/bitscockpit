import { useState } from "react";

const AddItem = ({ onAdd }) => {
  const [oznaka, setOznaka] = useState("");
  const [naziv, setNaziv] = useState("");
  const [region, setRegion] = useState("");
  const [mail, setMail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!oznaka) {
      alert("Please add a task");
      return;
    }

    onAdd({ oznaka, naziv, region, mail });

    setOznaka("");
    setNaziv("");
    setRegion("");
    setMail("");
  };

  return (
    <form className="container w-25 text-center">
      <div className="form-control d-flex justify-content-between align-items-center my-2">
        <label>Dodaj oznaku: </label>
        <input
          type="text"
          placeholder="Dodaj oznaku"
          value={oznaka}
          onChange={(e) => setOznaka(e.target.value)}
        />
      </div>
      <div className="form-control d-flex justify-content-between align-items-center  my-2">
        <label>Dodaj naziv: </label>
        <input
          type="text"
          placeholder="Dodaj naziv"
          value={naziv}
          onChange={(e) => setNaziv(e.target.value)}
        />
      </div>
      <div className="form-control d-flex justify-content-between align-items-center  my-2">
        <label>Dodaj region: </label>
        <input
          type="text"
          placeholder="Dodaj region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
      </div>
      <div className="form-control d-flex justify-content-between align-items-center  my-2">
        <label>Dodaj mail: </label>
        <input
          type="mail"
          placeholder="Dodaj mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </div>

      <input type="button" value="Save" onClick={onSubmit} className="px-5" />
    </form>
  );
};

export default AddItem;
