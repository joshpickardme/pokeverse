"use client"

import Image from "next/image";
import Card from "@/components/Card";
import { useEffect, useState } from "react";





export default function Home() {


  const [pokemonState, setPokemonState] = useState([])
  const array = []

  async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const pokemon = await response.json()
    for (let i = 0; i < pokemon.results.length; i++) {
      const pokeResponse = await fetch(pokemon.results[i].url)
      const pokeJson = await pokeResponse.json()
      pokeJson.squad = false
      await array.push(pokeJson)

    }
    console.log(array)
    setPokemonState(array)
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <main className="flex justify-center items-center flex-col gap-3 p-4">
      <h1 className="text-white text-4xl">My Squad (0)</h1>
      <div className="flex flex-row flex-wrap justify-center gap-3 p-4">
        {pokemonState.filter(pokemon => pokemon.squad).map(filteredPokemon => (<Card pokemonState={pokemonState} pokemon={filteredPokemon} setPokemonState={setPokemonState} key={filteredPokemon.id}></Card>))}
      </div>
      <h1 className="text-white text-4xl">All Pokemon</h1>
      <div className="flex flex-row flex-wrap justify-center min-h-screen gap-3 p-4">
        {pokemonState.map(pokemon => <Card pokemonState={pokemonState} pokemon={pokemon} setPokemonState={setPokemonState} key={pokemon.id}></Card>)}
      </div>
    </main>

  );
}
