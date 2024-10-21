
import React, { useState } from 'react';

const CadastroUsuario = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle user registration logic here
    };

    return (
        <div className="cadastro-usuario">
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <label>Senha:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroUsuario;
