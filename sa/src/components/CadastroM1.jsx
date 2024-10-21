import React, { useState } from 'react';
import './CadastroM.css';
import Voltar from '../assets/images/Voltar.png';
import CadastroM2 from './CadastroM2'

function CadastroM1() {
  const [pagina, setPagina] = useState('cadastrom1'); // Inicializa com a página de login

  const renderPagina = () => {
    switch (pagina) {
      case 'cadastrom1':
        return (
          <div className="esquerda-cadastrese">
            <div className='espacamento'>
              <div className='cabecalho-cadastro'>
                <h1 className='cabecalho'>Primeira Etapa do Cadastro</h1>
                <img className='botao-voltar' src={Voltar} alt="Botão voltar" />
              </div>
              <h2 className='dados'>Insira os dados do gerente</h2>

              <div className="container-cadastrese">
                <div className="container-inputs">
                  <label className="label">CPF</label>
                  <input type="text" className="input" />

                  <label className="label">Nome Completo</label>
                  <input type="text" className="input" />

                  <label className="label">E-mail</label>
                  <input type="email" className="input" />
                </div>

                <div className="container-inputs2">
                  <label className="label">Celular</label>
                  <input type="number" className="input" />

                  <label className="label">Data de Nascimento</label>
                  <input type="date" className="input" />

                  <label className="label">Senha</label>
                  <input type="password" className="input" />

                  <button className='etapas' onClick={() => setPagina('cadastrom2')}>Próxima etapa</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'cadastrom2':
        return <CadastroM2 />;
     
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

export default CadastroM1;
