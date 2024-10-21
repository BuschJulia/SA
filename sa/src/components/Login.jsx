import React, { useState } from 'react';
import './Global.css';
import LoginDois from './LoginDois';
import SerParceiro from './SerParceiro';

function Login() {
  const [pagina, setPagina] = useState('login'); // Inicializa com a página de login

  // Função para renderizar o componente correto
  const renderPagina = () => {
    switch (pagina) {
      case 'login':
        return (
          <div className="esquerda login">
            <div className="espacamento">
              <h1 className='poppins-semibold'>Falta pouco para economizar!</h1>
              <p className='paragrafo-verde'>Como deseja continuar?</p>
              <div className='container-buttons'>
                <button className="primary" onClick={() => setPagina('loginDois')}>Já tem uma conta?</button>
                <button className="second" onClick={() => setPagina('serparceiro')}>Criar nova conta</button>
              </div>
            </div>
          </div>
        );
      case 'loginDois':
        return <LoginDois />;
      case 'serparceiro':
        return <SerParceiro />;
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

export default Login;
