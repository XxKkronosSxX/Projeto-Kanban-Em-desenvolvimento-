import { useState, useEffect } from 'react';


function Criarnota() {
    return(
        <>
        <br/>
        <br/>
        <h1>Criar Novo kanban</h1>
        <br/>
        <br/>
        <button className='estilo-botao' onClick={criar}>New Kanban</button>

        </>
    );
}


function criar() {
  console.log("Criou");
}
    




export default Criarnota;