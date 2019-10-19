import React, { useState } from 'react';
import api from '../../services/api';
export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', { username, points: 10 });

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }

  return (

    <>
      <div className="container">
        <div className="content">

          <h2 style={{ textAlign: 'center' }}>
            <b>Login</b>
          </h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Usuário:</label>
            <input
              id="username"
              type="username"
              placeholder="Ex: JoaoDasNeves"
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
            <button className="btn" type="submit">Entrar</button>
          </form>

        </div>
        <p>Não tem Login? <a href="/register"> Registrar-se</a> </p>
      </div>
    </>

  )
}