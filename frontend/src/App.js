import React, { useState } from 'react';
import "./App.css";

function App() {
const [expression, setExpression] = useState('');
const [Result, setResult] = useState('');
const { SF, steps, result } = Result;
const [error, setError] = useState('');

const handleButtonClick = (char) => {
setExpression(expression + char);
};

const handleDelete = () => {
setExpression(expression.slice(0, -1));
};

const handleClear = () => {
setExpression('');
setResult('');
setError('');
};

const handleVerifyValidity = () => {
fetch('/Resolution', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({ expression }),
})
.then(response => {
    if (!response.ok) {
    throw new Error('Vérifier votre formule.');
    }
    return response.json();
})
.then(data => {
    setResult(data);
    const { SF, steps, result } = Result;
})
.catch(error => {
    setError(error.message);
});
};

return (
<div>
    <div className='container'>
        <div className='keys'>
            <h1>Algorithme de Résolution</h1>
            <div>
            <input type="text" value={expression} readOnly />
            </div>
            <div>
            <button onClick={() => handleButtonClick('A')}>A</button>
            <button onClick={() => handleButtonClick('B')}>B</button>
            <button onClick={() => handleButtonClick('C')}>C</button>
            <button onClick={() => handleButtonClick('D')}>D</button>
            </div>
            <div>
            <button onClick={() => handleButtonClick('~')}>~</button>
            <button onClick={() => handleButtonClick('&')}>&</button>
            <button onClick={() => handleButtonClick('|')}>|</button>
            <button onClick={() => handleButtonClick('>>')}> → </button>
            </div>
            <div>
            <button onClick={() => handleButtonClick('(')}>(</button>
            <button onClick={() => handleButtonClick(')')}>)</button>
            <button onClick={() => handleButtonClick('<')}>&lt;</button>
            <button onClick={() => handleButtonClick('>')}>&gt;</button>
            </div>
            <div>
            <button onClick={handleDelete}>supprimer</button>
            <button onClick={handleClear}>effacer tout</button>
            <button onClick={handleVerifyValidity}>Vérifier la validité</button>
            </div>
        </div>
        {Result && 
        <div className='process'>
            <div>
                <h2>SF</h2>
                <h3>{SF}</h3>
            </div>
            <div>
                <h2>Étapes:</h2>
                <ol>
                {steps.map((step, index) => (
                    <li key={index}>
                    <h3>Étape {index + 1}</h3>
                    <ul>
                        {step.map((item, i) => (
                        <li key={i}>{i === 2 && '→'} {item}</li>
                        ))}
                    </ul>
                    </li>
                ))}
                </ol>
            </div>
            <div>
                <h2>Résultat</h2>
                <h3>{result}</h3>
            </div>
        </div>}
        {error && <div>Error: {error}</div>}
        
    </div>
    <footer className='footer'>
            Fait par Mohammed EL KHATTABI - GLD2A - ENSEM
    </footer>
</div>
);
}

export default App;
