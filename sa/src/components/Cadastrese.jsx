import React from 'react';
import './Cadastrese.css';
import Voltar from '../assets/images/Voltar.png'
import Seta from '../assets/images/seta.png'

function Cadastrese() {
  return (
    <div className="esquerda-cadastrese">
      <div className='espacamento'>
        <div className='cabecalho-cadastro'>
        <h1 className='cadastre-se'>Cadastre-se</h1>
        <img className='botao-voltar' src={Voltar} alt="Botão voltar" />
        </div>
        <p>Torne sua vida fácil</p>
        <h2 className='etapa1'>1 - Insira seus dados</h2>

        <div className="container-cadastrese">
          <div className="container-inputs">
            <label className="label">CPF</label>
            <input type="text" className="input" />

            <label className="label">Nome Completo</label>
            <input type="text" className="input" />

            <label className="label">Celular</label>
            <input type="number" className="input" />
          </div>

          <div className="container-inputs2">
            <label className="label">E-mail</label>
            <input type="email" className="input" />

            <label className="label">Senha</label>
            <input type="password" className="input" />

            <button className='acessar'>Acessar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastrese;
