import React from 'react';
import './Home.css';
import ReactDOM from 'react-dom';





const Home = (props)=> {
    return (
        <div className="AppTwo">
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" id="navigation-bar">

            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://medium.com/@gatorsunis">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="football.html">Football</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.behance.net/gallery/96730413/Florida-Gators-Concept-Uniforms-GatorsUnis">Concepts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">About</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

        </div>

    )

};

export default Home;