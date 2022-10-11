import React, { useEffect, useState } from "react";
import Getgifs from './getGifs'

const loadingGif = [
    "https://media2.giphy.com/media/NFbs20puOHq9y/giphy.gif?cid=88b1d020cdhcdze2xd9dd7cf3l6sej9o4audo5pb87s6txq0&rid=giphy.gif&ct=s"
  ]

export default function ListaGifs({frase}) {
    const [gifs, setGif] = useState(loadingGif)
    useEffect(() => {
        Getgifs({palabra: frase}).then(item => setGif(item))
     }, [frase])

    return (
        gifs.length >= 1
        ? gifs.map(gif => <img className="mx-auto my-5 md:w-8/12 sm:10/12" src={gif}></img>)
        : <div>
            <p className="text-2xl text-center mt-40">No se encontraron Gifs</p>
            <p className="text-center mb-40 my-3">Palabra <i className="underline">{frase}</i> muy rara</p>
        </div>


    )
}