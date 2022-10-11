import React, { useState } from "react";
import ListaGifs from "./hooks/listaGifs";
import Formulario from "./Formulario";

const MostrarGifs = () => {
    const [frase, setFrase] = useState('chile')
    
    return (
    <div className="container mx-auto">
        <Formulario setFrase={setFrase} />
        <ListaGifs frase={frase} />
    </div>
    )
}

export default MostrarGifs