import React, { useState } from 'react'

function Input() {
    const [valor, setValor] = useState(0);

    const calcularDolarizacion = () => {
        document.getElementById("calc").innerHTML = Math.round(valor / 7070);
    }

    const handleInput = (e) => {
        setValor(parseFloat((e.target.value / 7070).toFixed(2)));
    }
    return (
        <div className='container'>
            <div class="card">
                <div class="card-header">
                    <h3>Calcula cuanto vas a cobrar en la dolarizacion</h3>
                </div>
                <div class="card-body">
                    <input id='labelText' type="number" placeholder='escriba algo' onChange={handleInput}></input>
                    <h2>Su sueldo en la dolarizacion: U$D {valor}</h2>
                </div>
                <div class="card-footer">
                    <h3>Formula</h3>
                    <p>La cotización de $7.070 = 1 dólar corresponde a la tasa de cambio calculada por Fundar en La Nación.</p>
                </div>
            </div>
        </div>

    )
}

export default Input


