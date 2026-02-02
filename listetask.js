import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ListeTask() {
  const [tableautasks, settableauTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState({ title: "", progression: "", date: "", details: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    settableauTasks(savedTasks);
  }, []);

  const supprimertask = (index) => {
    const newTasks = tableautasks.filter((_, i) => i !== index);
    settableauTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const modifier = (i) => {
    if (tableautasks[i].progression === "Terminé") return;
    setEditIndex(i);
    setEditTask({ ...tableautasks[i] });
  };

  const saveEdit = (i) => {
    const newTasks = [...tableautasks];
    newTasks[i] = editTask;
    settableauTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setEditIndex(null);
  };

  const changeProgression = (index, newProgress) => {
    const newTasks = [...tableautasks];
    newTasks[index].progression = newProgress;
    settableauTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const gotoDone = () => {
    navigate("/taskdone");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>📋Liste des Tâches</h2>
      <button onClick={gotoDone} style={{ marginBottom: "20px" }}>Voir les tâches terminées</button>

      {tableautasks.length === 0 ? (
        <p>Aucune tâche pour le moment.</p>
      ) : (
        <table border="1" style={{ width: "90%", margin: "0 auto", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Titre</th>

              <th>Progression</th>
              <th>Date</th>
              <th>Détails</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableautasks.map((task, index) => (
              <tr key={index}>
                {editIndex=== index ? (
                  <>
                    <td>
                      <input
                        type="text"
                        value={editTask.title}
                        onChange={e => setEditTask({ ...editTask, title: e.target.value })}
                      />
                    </td>
                    <td>
                      <select
                        value={editTask.progression}
                        onChange={e => setEditTask({ ...editTask, progression: e.target.value })}
                      >
                        <option>À faire</option>
                        <option>En cours</option>
                        <option>Terminé</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="date"
                        value={editTask.date}
                        onChange={e => setEditTask({ ...editTask, date: e.target.value })}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editTask.details}
                        onChange={e => setEditTask({ ...editTask, details: e.target.value })}
                      />
                    </td>
                    <td>
                      <button onClick={() => saveEdit(index)}>Sauvegarder</button>
                      <button onClick={() => setEditIndex(null)}>Annuler</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>
                      <div style={{ maxWidth: "200px", whiteSpace: "pre-wrap", wordWrap: "break-word", textAlign: "left" }}>
                        {task.title}
                      </div>
                    </td>
                    <td>
                      <select
                        value={task.progression}
                        onChange={(e) => changeProgression(index, e.target.value)}
                        disabled={task.progression === "Terminé"}
                      >
                        <option>À faire</option>
                        <option>En cours</option>
                        <option>Terminé</option>
                      </select>
                    </td>
                    <td>
                      <div>{task.date}</div>
                    </td>
                    <td>
                      <div style={{ maxWidth: "300px", whiteSpace: "pre-wrap", wordWrap: "break-word", textAlign: "left" }}>
                        {task.details}
                      </div>
                    </td>
                    <td>
                      <button onClick={() => modifier(index)} disabled={task.progression === "Terminé"}>Modifier</button>
                      <button onClick={() => supprimertask(index)} style={{ color: "red" }}>Supprimer</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
