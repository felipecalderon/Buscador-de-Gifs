import React from "react";

export default function ListaGifs({frase, gifs}) {

    return (
    <div className="sm:columns-2 md:columns-3 lg:columns-4">

        {
            gifs.length > 0
            ?   
                gifs.map(gif =>
                <figure key={gif.id} class="mb-3 mx-auto relative max-w-sm transition-all duration-300">
                    <img class="rounded-lg w-full" src={gif.url} alt={gif.title} />
                        <figcaption class="absolute bottom-6 px-4 text-lg text-white">
                            <p>{gif.title}</p>
                        </figcaption>
                </figure>)
            : 
            <div>
                <p className="text-2xl text-center pt-40">No se encontraron Gifs</p>
                <p className="text-center mb-40 my-3">Palabra <i className="underline">{frase}</i> no encontrada</p>
            </div>
        }
    </div>

    )
}