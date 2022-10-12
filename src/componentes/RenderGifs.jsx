import React, { useEffect, useState } from "react";
import Getgifs from './hooks/getGifs'
import ListaGifs from './hooks/listaGifs'

const loadingGif = [
    "https://media2.giphy.com/media/NFbs20puOHq9y/giphy.gif?cid=88b1d020cdhcdze2xd9dd7cf3l6sej9o4audo5pb87s6txq0&rid=giphy.gif&ct=s"
  ]

export default function RenderGifs({palabra}){
    const [gifs, setGif] = useState(loadingGif)
    const [cargando, setCargando] = useState(true)
    useEffect(() => {
        Getgifs({palabra, setCargando}).then(item => {
            setGif(item)
        })
     }, [palabra])
     console.log(cargando);
    return (
        cargando
        ? <p>Cargando...</p>
        : <ListaGifs gifs={gifs}  />
    )
}