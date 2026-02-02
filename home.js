import React from 'react';
import { Route, Link, Routes, useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
return (
    <div>
        <menu>
            <h1 éstyle={{ color: '#9b75bdff' }}>Bienvenue sur votre ToDo App</h1>
            <p className="grand-texte">
                Gérez vos journées de manière efficace avec notre application ToDo App. Planifiez, suivez et complétez vos tâches en toute simplicité grâce à une interface intuitive et moderne. Que ce soit pour vos projets personnels ou professionnels, vous pouvez ajouter de nouvelles tâches, consulter la liste de celles en cours et marquer les tâches terminées.

Notre application vous aide à garder le contrôle sur vos priorités, améliorer votre productivité et ne jamais oublier vos engagements. Connectez-vous dès maintenant pour accéder à toutes vos fonctionnalités et commencez à organiser vos journées de façon optimale. Avec ToDo App, la gestion de vos tâches devient simple, rapide et fiable.
            </p>
        </menu>
    </div>
);
}
 
export default Home;
