import React from "react";

export default function Formulario({setFrase}){

    const enviaForm = (e) => {
        e.preventDefault()
        e.reset()
    }

    const buscador = (e) => {
        e.preventDefault()
        setFrase(e.target.value)
    }

    return (
    <div>
        <p className="text-xl text-center my-3">Comienza a escribir para buscar divertidos Gifs</p>   
        <form onSubmit={enviaForm} className="my-2 w-6/12 mx-auto">
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input onChange={buscador} type="search" id="busqueda" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busca Gifs aqui"/>
            </div>
        </form>
    </div>
    )
}