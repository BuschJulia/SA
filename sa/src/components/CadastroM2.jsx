import React, { useState } from 'react';
import './CadastroM.css';
import Voltar from '../assets/images/Voltar.png';
import CadastroM3 from './CadastroM3'

function CadastroM2() {
  const [pagina, setPagina] = useState('cadastrom2'); // Inicializa com a página de login

  const renderPagina = () => {
    switch (pagina) {
      case 'cadastrom2':
        return (
          <div className="esquerda-cadastrese">
            <div className='espacamento'>
              <div className='cabecalho-cadastroM'>
                <h1 className='cabecalho'>Segunda Etapa do Cadastro</h1>
                <img className='botao-voltar' src={Voltar} alt="Botão voltar" />
              </div>
              <h2 className='dados'>Insira os dados do Mercado</h2>

              <div className="container-cadastrese">
                <div className="container-inputs">
                  <label className="label">CNPJ</label>
                  <input type="text" className="input" />

                  <label className="label">Nome do Mercado</label>
                  <input type="text" className="input" />

                  <label className="label">E-mail do Mercado (empresarial)</label>
                  <input type="email" className="input" />
                </div>

                <div className="container-inputs2">
                  <label className="label">Telefone do Mercado</label>
                  <input type="number" className="input" />

                  <label className="label">Senha</label>
                  <input type="password" className="input" />

                  <label className="label">Verifique sua Senha</label>
                  <input type="password" className="input" />

                  <button className='etapas' onClick={() => setPagina('cadastrom3')}>Próxima etapa</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'cadastrom3':
        return <CadastroM3 />;

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


export default CadastroM2;
