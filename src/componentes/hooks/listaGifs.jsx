import React from "react";

export default function ListaGifs({frase, gifs}) {

    return (
        <div className="sm:columns-2 md:columns-3 lg:columns-4">
            {
            gifs.length > 0
                ? gifs.map(gif => 
                    <div className="mb-2 border-slate-800 border-solid rounded-md"> 
                        <img alt="" className="mx-auto w-full hover:border-4 hover:drop-shadow-lg" src={gif.url} />
                        <p className="p-2 mt-0 text-xs text-center">{gif.title}</p>
                    </div>) 
            : <div>
                <p className="text-2xl text-center mt-40">No se encontraron Gifs</p>
                <p className="text-center mb-40 my-3">Palabra <i className="underline">{frase}</i> muy rara</p>
            </div>
            }
        </div>


    )
}