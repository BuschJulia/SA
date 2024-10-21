import React, { useState } from 'react';
import './AcessoM.css';
import Voltar from '../assets/images/Voltar.png'
import LoginMercado from './LoginMercado'
import LoginDois from './LoginDois'

function AcessoM() {
    const [pagina, setPagina] = useState('acessom'); // Inicializa com a página de login

    const renderPagina = () => {
        switch (pagina) {
            case 'acessom':
                return (
                    <div className="esquerda login">
                        <div className='espacamento'>
                            <div className='cabecalho-acesso'>
                                <h1 className='acesso-h1'>Acesse Fácil</h1>
                                <img className='botao-voltar' src={Voltar} alt="Botão voltar" />
                            </div>


                            <div className="container-inputs">
                            <label className="informacao">Qual informação você quer usar?</label>
                            <select className="input-select">
                                    <option value="" disabled selected>Selecione</option>
                                    <option value="cpf">CPF</option>
                                    <option value="cnpj">CNPJ</option>
                                    <option value="mei">MEI</option>
                                    <option value="email">Email</option>
                                </select>


                                <span className='Span'>Selecione uma informação</span>
                                <button className='continue' onClick={() => setPagina('loginmercado')}>Continuar</button>
                                <button className='abrir-conta' onClick={() => setPagina('logindois')}>Abrir conta</button>
                            </div>
                        </div>
                    </div >
                );
            case 'loginmercado':
                return <LoginMercado />;
            case 'logindois':
                return <LoginDois />;
            default:
                return null;
        }
    };

    return (
        <div>
            {renderPagina()}
        </div>
    );
}

export default AcessoM;
