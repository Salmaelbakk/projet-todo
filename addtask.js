import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [progression, setProgression] = useState("a faire");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");
  const [tableautasks, settableauTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const enregistrertache= JSON.parse(localStorage.getItem("tasks")); 
    settableauTasks(enregistrertache);
  }, []);

  const addTask = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      alert("Veuillez entrer le titre de la tâche svp");
      return;
    }

    const newTask = {
      title,
      progression,
      date,
      details,
    };

    const newTasks = [...tableautasks, newTask];
    settableauTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTitle("");
    setProgression("À faire");
    setDate("");
    setDetails("");

    alert("bravo ,, votre Tache ajoutée avec succès ");
  };

  const gotolistetask =()=> {
    navigate("/listetask");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Ajouter une Tâche </h2>
      <form onSubmit={addTask}>
        <input
          type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre de la tâche"required
        />
        <br /><br />


        <select
          value={progression}
          onChange={(e) => setProgression(e.target.value)}
        > <option>a faire</option>
          <option>En cours</option>
          <option>Terminé</option>
        </select>
        <br /><br />

        <input
          type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        <br /><br />
        <input type="text" value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Détails"
        />
        <br /><br />

        <button type="submit">Ajouter</button>
      </form>

      <button onClick={gotolistetask} style={{ marginTop: "20px" }}>
        Voir la liste des tâches
      </button>
    </div>
  );
}
