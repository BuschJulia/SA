import React, { useState } from 'react';
import AcessoM from './AcessoM';
import AcessoU from './AcessoU';

function LoginDois() {
  const [pagina, setPagina] = useState('logindois'); // Inicializa com a página de login

  // Função para renderizar o componente correto
  const renderPagina = () => {
    switch (pagina) {
      case 'logindois':
        return (
          <div className="esquerda login">
            <div className="espacamento">
              <h1 className='poppins-semibold'>Falta pouco para economizar!</h1>
              <p className='paragrafo-verde'>Como deseja continuar?</p>
              <div className='container-buttons'>
                <button className="primary" onClick={() => setPagina('acessom')}>Sou parceiro</button>
                <button className="second" onClick={() => setPagina('acessou')}>Sou cliente</button>
              </div>
            </div>
          </div>
        );
      case 'acessom':
        return <AcessoM />;
      case 'acessou': // Corrigido para 'acessou'
        return <AcessoU />;
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

export default LoginDois;
