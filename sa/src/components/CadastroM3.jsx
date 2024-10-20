import React from 'react';
import styles from './CadastroM.css.module';

import Voltar from '../assets/images/Voltar.png';

function CadastroM3() {
  return (
    <div className="esquerda-cadastrese">
      <div className='espacamento'>
        <div className='cabecalho-cadastro'>
          <h1 className='cabecalho'>Terceira Etapa do Cadastro</h1>
          <img className='botao-voltar' src={Voltar} alt="Botão voltar" />
        </div>
        <h2 className='dados'>Insira os dados do Endereço</h2>

        <div className="container-cadastrese">
          <div className="container-inputs">
            <label className="label">CEP</label>
            <input type="text" className="input" />

            <label className="label">Bairro</label>
            <input type="text" className="input" />

            <label className="label">Rua</label>
            <input type="text" className="input" />
          </div>

          <div className="container-inputs2">
            <label className="label">Número</label>
            <input type="number" className="input" />

            <label className="label">Complemento</label>
            <input type="text" className="input" />

            <button className='etapas1'>Concluir Cadastro</button>
            <button className='revisarInfo'>Revisar Informações</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroM3;
