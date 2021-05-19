import React from 'react';
import './Card.scss';

function Card() {
    return (
        <div className="card">
            <header>
                <div>
                    <h1>Thomas DIETRICH</h1>
                    <h4>Carte de présentation</h4>
                </div>
                <img src="https://nsa40.casimages.com/img/2021/05/13/210513115958101125.jpg" alt="tom"/>
            </header>
            <main>
                <p>J'ai des compétences dans plusieurs domaines.</p>
                <ul>
                    <li>Directeur artistique</li>
                    <li>Développeur web</li>
                    <li>Graphiste</li>
                </ul>
            </main>
            <footer>
                <p>307 avenue de Laon 51100 Reims</p>
                <a href="mailto:tomriiich@gmail.com">email : tomriiich@gmail.com</a>
            </footer>
        </div>
    )
}

export default Card;
