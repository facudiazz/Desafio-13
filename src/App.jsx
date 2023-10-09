import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      if (parseInt(age) < 18) {
        setWelcomeMessage(`Hola ${name}, eres muy joven para usar esta aplicación`);
      } else {
        setWelcomeMessage(`Bienvenido ${name}, gracias por usar nuestra aplicación`);
      }
      setErrorMessage(''); 
    } else {
      setWelcomeMessage(''); 
      setErrorMessage('Por favor, ingresa tu nombre y edad.');
    }
  };

  return (
    <div className="App">
      <h1>Registrarse</h1>
      
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Edad:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      
      {welcomeMessage && (
        <div className={`welcome-message ${parseInt(age) < 18 ? 'welcome-message-young' : ''}`}>
          {welcomeMessage}
        </div>
      )}

      {errorMessage && (
        <div className="error-message">{errorMessage}</div>
      )}
    </div>
  );
}

export default App;
