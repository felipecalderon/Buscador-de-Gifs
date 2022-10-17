import React from "react";

export default function ListaGifs({frase, gifs}) {

    return (
    <div className="sm:columns-2 md:columns-3 lg:columns-4">

        {
            gifs.length > 0
            ?   
                gifs.map(gif =>
                <figure key={gif.id} class="mb-3 mx-auto relative max-w-sm z-1 hover:z-50 hover:scale-110 hover:shadow-xl shadow-black transition-all duration-300">
                    <img class="rounded-lg w-full" src={gif.url} alt={gif.title} loading="lazy"/>
                        <figcaption class="bg-teal-700 rounded-r-lg absolute bottom-2 px-4 text-lg text-white">
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