import React, { useEffect, useState } from "react";
import Getgifs from './hooks/ConsultaGifs'
import ListaGifs from './ListaGifs'

export default function RenderGifs({palabra}){
    const [gifs, setGif] = useState([])
    useEffect(() => {
        Getgifs({palabra}).then(item => {
            setGif(item)
        })
     }, [palabra])
    return (
        <ListaGifs gifs={gifs} frase={palabra}/>
    )
}