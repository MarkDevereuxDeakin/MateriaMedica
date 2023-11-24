import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 export default function Edit() {
 const [form, setForm] = useState({
   latin: "",
   common: "",
   distribution: "",
   location: "",
   part: "",
   phytotoxin: "",
   relative_toxicity: "",
   ld50: "",
   human_toxicity: "",
   animal_toxicity: "",   
   toxins: [],
 });
 const params = useParams();
 const navigate = useNavigate();
  useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:8080/${params.id.toString()}`);
      if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
      const toxin = await response.json();
     if (!toxin) {
       window.alert(`Toxin with id ${id} not found`);
       navigate("/");
       return;
     }
      setForm(toxin);
   }
    fetchData();
    return;
 }, [params.id, navigate]);
  // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
  async function onSubmit(e) {
   e.preventDefault();
   const editedToxin = {
     latin: form.latin,
     common: form.common,
     distribution: form.distribution,
     location: form.location,
     part: form.part,
     phytotoxin: form.phytotoxin,
     relative_toxicity: form.relative_toxicity,
     ld50: form.ld50,
     human_toxicity: form.human_toxicity,
     animal_toxicity: form.animal_toxicity,
   };
    // This will send a post request to update the data in the database.
   await fetch(`http://localhost:8080/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedToxin),
     headers: {
       'Content-Type': 'application/json'
     },
   });
    navigate("/");
 }
  // This following section will display the form that takes input from the user to update the data.
 return (
    <div className="container-fluid qform"> 
	<div className="col-md-10 m-auto"> 
		<div className="mt-3"> 
		<div className="card text-left h-100"> 
			<div className="card-body my-3">
        <h3>Update Toxin Record</h3>   
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="latin">Latin Name</label>
            <input
              type="text"
              className="form-control"
              id="latin"
              value={form.name}
              onChange={(e) => updateForm({ latin: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="common">Common Name</label>
            <input
              type="text"
              className="form-control"
              id="common"
              value={form.position}
              onChange={(e) => updateForm({ common: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="distribution">Distribution</label>
            <input
              type="text"
              className="form-control"
              id="distribution"
              value={form.name}
              onChange={(e) => updateForm({ distribution: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              value={form.position}
              onChange={(e) => updateForm({ location: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="part">Toxic Part</label>
            <input
              type="text"
              className="form-control"
              id="part"
              value={form.name}
              onChange={(e) => updateForm({ part: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phytotoxin">Phytotoxin</label>
            <input
              type="text"
              className="form-control"
              id="phytotoxin"
              value={form.position}
              onChange={(e) => updateForm({ phytotoxin: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="relative_toxicity">Relative Toxicity</label>
            <input
              type="text"
              className="form-control"
              id="relative_toxicity"
              value={form.name}
              onChange={(e) => updateForm({ relative_toxicity: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ld50">LD50</label>
            <input
              type="text"
              className="form-control"
              id="ld50"
              value={form.position}
              onChange={(e) => updateForm({ ld50: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="human_toxicity">Human Toxicity</label>
            <input
              type="text"
              className="form-control"
              id="human_toxicity"
              value={form.name}
              onChange={(e) => updateForm({ human_toxicity: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="animal_toxicity">Animal Toxicity</label>
            <input
              type="text"
              className="form-control"
              id="animal_toxicity"
              value={form.position}
              onChange={(e) => updateForm({ animal_toxicity: e.target.value })}
            />
          </div>
       <br /> 
       <div className="container-fluid qform"> 
            <div className="col-md-2 m-auto"> 
              <div className="mt-3"> 
              <div className="card"> 
                <div className="card-body my-3">
                <input
                type="submit"
                value="Update Record"
                className="btn btn-primary"
                />
                </div>
              </div>
            </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  </div>
  </div>
 );
}