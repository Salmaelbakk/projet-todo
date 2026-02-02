import React from "react";
import { useNavigate } from "react-router-dom";
export default function Notfound() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Erreur - page Non Trouvee</h2>
      <p>La page que vous recherchez n'existe pas.</p>
      <button onClick={() => navigate(-1)}>Retourner en arrière</button>
    </div>
  );
}