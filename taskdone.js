import React, { useState, useEffect } from "react";

export default function TaskDone() {
  const [tacheterminer, settacheterminer] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const filtrer = tasks.filter(task => task.progression === "Terminé");
    settacheterminer(filtrer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>✅ Tâches Terminéees</h2>

      {tacheterminer.length === 0 ? (
        <p>Aucune tâche terminée pour le moment.</p>
      ) : (
        <table border="1" style={{ margin: "0 auto", padding: "10px" }}>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Date</th>
              <th>Détails</th>
            </tr>
          </thead>
          <tbody>
            {tacheterminer.map((task, index) => (
              <tr key={index}>
                <td>{task.title}</td>
                <td>{task.date}</td>
                <td>{task.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
