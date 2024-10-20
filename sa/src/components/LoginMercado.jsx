import React from 'react';
import './AcessoU.css';
import Voltar from '../assets/images/Voltar.png'

function LoginMercado() {
    return (
        <div className="esquerda login">
            <div className='espacamento'>
                <div className='cabecalho-acesso'>
                    <h1 className='poppins-semibold'>Acesse Fácil</h1>
                    <img className='botao-voltar' src={Voltar} alt="Botão voltar" />
                </div>

                <p>Qual informação você quer usar?</p>
                <div className="container-inputs">
                    <label className="label">CPF</label>
                    <input type="text" className="input" />

                    <label className="label">Senha</label>
                    <input type="password" className="input" />

                    <span className='Span'>A senha precisa ter 8 ou mais caracteres.</span>
                    <button className='continuar'>Continuar</button>
                    <button className='acessar'>Abrir conta</button>
                </div>
            </div>
        </div>
    );
}

export default LoginMercado;
