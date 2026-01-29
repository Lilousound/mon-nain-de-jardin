'use client';
import "../styles/Footer.css"
import { useState } from 'react';


function Footer() {
  const [inputValue, setInputValue] = useState('');

  function handleInput(e) {
    setInputValue(e.target.value)
  }
  function handleSubmit(inputValue) {
    alert(`Vous êtes inscrit à notre newsletter avec l'adresse: ${inputValue}`)
  }
  return <div className="footer">
   <p>Si vous souhaitez être tenu au courant de nos nouveautés, inscrivez-vous à notre newsletter:</p>
   <input
    type="mail"
    name='my_input'
    placeholder="votre email"
    value={inputValue}
    onChange={handleInput}/>
   <button onClick={() => handleSubmit(inputValue)}>Valider</button>
  </div>
}
export default Footer
