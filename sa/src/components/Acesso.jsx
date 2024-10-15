import React from 'react'

function Acesso() {
  return (
    <div className="esquerda login">
                    <h1 className='poppins-semibold'>Falta pouco para economizar!</h1>
                    <p>Como deseja continuar?</p>
                    <div className='container-buttons '>
                        
                        <label for='cpf'>CPF</label>
                        <input name='cpf' id='cpf' type='text'></input>
                        <button className="primary">Sou parceiro</button>
                        <button className="second">Sou cliente</button>
                    </div>
                </div>
  )
}

export default Acesso