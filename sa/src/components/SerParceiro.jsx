import React, { useState } from 'react';
import './Global.css';
import CadastroM1 from './CadastroM1';
import Cadastrese from './Cadastrese';

function SerParceiro() {
  const [pagina, setPagina] = useState('serparceiro'); // Inicializa com a página de ser parceiro

  // Função para renderizar o componente correto
  const renderPagina = () => {
    switch (pagina) {
      case 'serparceiro':
        return (
          <div className="esquerda login">
            <div className="espacamento">
              <h1 className='poppins-semibold'>Falta pouco para economizar!</h1>
              <p className='paragrafo-verde'>Como deseja continuar?</p>
              <div className='container-buttons'>
                <button className="primary" onClick={() => setPagina('cadastrom1')}>Quero ser parceiro</button>
                <button className="second" onClick={() => setPagina('cadastrese')}>Quero ser cliente</button>
                <button className='visitante'>Entrar como visitante</button>
              </div>
            </div>
          </div>
        );
      case 'cadastrom1':
        return <CadastroM1 />;
      case 'cadastrese':
        return <Cadastrese />;
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

export default SerParceiro;
