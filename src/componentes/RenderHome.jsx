import React, { useState } from "react";
import RenderGifs from "./RenderGifs";
import BuscadorGifs from "./BuscadorGifs";

const RenderHome = () => {
    const [frase, setFrase] = useState('simpsons')
    
    return (
    <div>
        <BuscadorGifs setFrase={setFrase} />
        <RenderGifs palabra={frase} />
    </div>
    )
}

export default RenderHome