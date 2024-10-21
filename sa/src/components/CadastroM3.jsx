import React, { useState } from 'react';
import './CadastroM.css';
import AcessoM from './AcessoM';
import Voltar from '../assets/images/Voltar.png';

function CadastroM3() {
  const [pagina, setPagina] = useState('cadastrom3'); // Inicializa com a página de login

  const renderPagina = () => {
    switch (pagina) {
      case 'cadastrom3':
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

                  <button className='etapas1' onClick={() => setPagina('acessom')}>Concluir Cadastro</button>
                  <button className='revisarInfo'>Revisar Informações</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'acessom':
        return <AcessoM />;

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

export default CadastroM3;
