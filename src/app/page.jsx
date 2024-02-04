"use client"

import Image from "next/image";
import Card from "@/components/Card";
import { useEffect, useState } from "react";





export default function Home() {


  const [pokemon, setPokemon] = useState([])
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => setPokemon(data.results))
      .catch((error) => console.error(error))
  }, [])

  return (
    <main className="flex flex-wrap justify-center min-h-screen gap-3 p-4">
      {pokemon.map(pokemon => <Card key={pokemon.name} name={pokemon.name}></Card>)}
    </main>
  );
}
