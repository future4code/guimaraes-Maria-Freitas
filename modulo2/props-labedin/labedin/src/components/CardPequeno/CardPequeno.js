import React from 'react';
import "./CardPequeno.css"


function CardPequeno(props) {
    return (
        <div className="small-card-container">
            <img src={ props.imagem } />
            <div>
                <p>{ props.email }</p>
                <p>{ props.endereco }</p>
            </div>
        </div>
    )
}

export default CardPequeno;