import React from 'react';
import './AcessoU.css';

function AcessoU() {
  return (
    <div className="esquerda login">
      <div className='espacamento'>
      <h1 className='poppins-semibold'>Acesse Fácil</h1>
      
      <div className="container-inputs">
        <label className="label">CPF</label>
        <input type="text" className="input" />
        
        <label className="label">Senha</label>
        <input type="password" className="input" />
        
        <button className='reset-senha'>Esqueci a senha</button>
        <button className='acessar'>Acessar</button>
        </div>
      </div>
    </div>
  );
}

export default AcessoU;
