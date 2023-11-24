import React, { useState } from "react";
import { useNavigate } from "react-router";
export default function Create() {
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
    animal_toxicity: ""
 });
 const navigate = useNavigate();
  // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
  // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
    // When a post request is sent to the create url, we'll add a new record to the database.
   const newToxin = { ...form };
    await fetch("http://localhost:8080/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newToxin),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
   setForm({
    latin: "",
    common: "",
    distribution: "",
    location: "",
    part: "",
    phytotoxin: "",
    relative_toxicity: "",
    ld50: "",
    human_toxicity: "",
    animal_toxicity: "" });
   navigate("/");
 }
  // This following section will display the form that takes the input from the user.
 return (
    <div className="container-fluid qform"> 
	<div className="col-md-10 m-auto"> 
		<div className="mt-3"> 
		<div className="card text-left h-100"> 
			<div className="card-body my-3">
        <h3>Create Toxin Record</h3>   
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
                value="Create Toxin Record"
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