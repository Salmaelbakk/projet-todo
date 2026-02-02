import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const getValue = (e) => {
    setLogin((log) => ({
      ...log, [e.target.name]: e.target.value,}));
  };

  const connexion = (e) => {
    e.preventDefault();

    if (
      (login.email === "salma@email.com" && login.password === "salma123") ||
      (login.email === "lilia@email.com" && login.password === "lilia123")
    ) {
      localStorage.setItem("user", JSON.stringify(login));
      navigate("/addtask", { state: { data: login } });
    } else {
      setError("Login incorrecte"); 
    }
  };

  return (
    <div>
      
        <legend>Connexion</legend>
        <form className="connexion-form" onSubmit={connexion}>
          <table>
            <tbody>
              <tr>
                <td>Login</td>
                <td>
                  <input type="email" name="email" onChange={getValue} required />
                </td>
              </tr><tr>
                <td>Password</td>
                <td><input type="password"name="password" onChange={getValue} required />
                </td>
              </tr>
              {error && (
                <tr>
                  <td colSpan="2" style={{ color: "red", textAlign: "center" }}>
                    {error}
                  </td>
                </tr>
              )}
              <tr>
                <td></td>
                <td>
                  <input type="submit" value="Valider" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
    </div>
  );
}
