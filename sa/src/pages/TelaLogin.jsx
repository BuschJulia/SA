import React from 'react';
import './TelaLogin.css';
import Navbar from '../components/Navbar';
import Cover from '../assets/images/cover.png';
import Login from '../components/Login';
import LoginDois from '../components/LoginDois';
import AcessoU from '../components/AcessoU';
import SerParceiro from '../components/SerParceiro';
import Cadastro from '../components/Cadastro';
import Cadastrese from '../components/Cadastrese';
import CadastroM1 from '../components/CadastroM1';
import CadastroM2 from '../components/CadastroM2';
import CadastroM3 from '../components/CadastroM3';


export function TelaLogin() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <img className="direita" src={Cover} alt="" />
                < SerParceiro/>
            </div>
        </div>
    );
}

