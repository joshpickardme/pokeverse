"use client"
export default function Card({pokemonState, pokemon, setPokemonState}) {

    function updateSquad() {
        pokemon.squad = !pokemon.squad
        console.log(pokemon)
        setPokemonState((prevPokemonState) => [...prevPokemonState, pokemon]);
        console.log(pokemonState)
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
        <img className=" opacity-25" src={pokemon.sprites.other.home.front_default} alt="pokemon" />
        <div className="card-body justify-between">
            <div className="flex flex-row justify-between w-full">
                <h2 className="card-title text-white">{pokemon.name}</h2>
            </div>
            <div className="flex flex-col gap-2">
                <p>Experience: {pokemon.base_experience}</p>
                <p>Height: {pokemon.height}</p>
                <p>Squad: {String(pokemon.squad)}</p>
            </div>
            <div className="flex flex-row w-full justify-start gap-4 ">
                <button onClick={updateSquad} className="w-32 cursor-pointer p-4 rounded-md bg-gray-600 text-white font-bold hover:scale-110 transition-all">Add</button>
            </div>
        </div>
        </div>
    )
}