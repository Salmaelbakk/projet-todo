import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import Notfound from './notfound';
import Home from './home';
import Connexion from './connexiontask';
import PrivateRoute from './privateroutes';
import Addtask from './addtask';
import Taskdone from './taskdone';
import Listetask from './listetask'; 

function Apptodo() {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <button onClick={() => navigate(-1)}>&lt;</button>
        <button onClick={() => navigate(1)}>&gt;</button>
        <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/connexion'>Connexion</Link></li>
        <li><Link to='/addtask'>Ajouter une tâche</Link></li>
        <li><Link to='/listetask'>Liste des tâches</Link></li>
        <li><Link to='/taskdone'>Tâches terminées</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/contact' element={<Notfound />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/home' element={
          <PrivateRoute><Home /></PrivateRoute>
        } />

        
              <Route path='/addtask' element={  <PrivateRoute> <Addtask />  </PrivateRoute>} />
                <Route path='/taskdone' element={<PrivateRoute><Taskdone /></PrivateRoute>} />
<Route path='/listetask' element={<PrivateRoute><Listetask /></PrivateRoute>} />

      </Routes>
    </div>
  );
}

export default Apptodo;
