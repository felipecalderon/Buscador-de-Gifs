import React, { useState } from "react";
import RenderGifs from "./RenderGifs";
import Formulario from "./Formulario";

const RenderHome = () => {
    const [frase, setFrase] = useState('simpsons')
    
    return (
    <div>
        <Formulario setFrase={setFrase} />
        <RenderGifs palabra={frase} />
    </div>
    )
}

export default RenderHome