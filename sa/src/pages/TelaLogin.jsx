import React from 'react';
import './TelaLogin.css';
import Navbar from '../components/Navbar';
import Cover from '../assets/images/cover.png';
import Acesso from '../components/Acesso';


export function TelaLogin() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <img className="direita" src={Cover} alt="" />
                <Acesso/>
            </div>
        </div>
    );
}

