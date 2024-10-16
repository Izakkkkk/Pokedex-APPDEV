import { useEffect, useState } from "react";
import PokemonThumbnail from "./components/PokemonThumbnail"
import Navbar from './components/Navbar/Navbar'

const App = () => {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

 const getAllPokemons = async () => {
   const res = await fetch(loadMore)
   const data = await res.json()

   setLoadMore(data.next)

   function createPokemonObject(result)  {
     result.forEach( async (pokemon) => {
       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
       const data =  await res.json()

       setAllPokemons( currentList => [...currentList, data])
      
     })
   }
   createPokemonObject(data.results)
   await console.log(allPokemons)
 }

useEffect(() => {
 getAllPokemons()
}, [])
  return (
    <div className="app-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <main class="main">
        <div class="container">
          <div class="logo-wrapper">
            <img src="./assets/pokeball.svg" alt="pokeball"/>
            <h1>Pokedex</h1>
          </div>
          <div class="search-wrapper">
            <div class="search-wrap">
              <img src="./assets/search.svg" alt="search-icon" class="search-icon"/>
              <input type="text" class="search-input body3-fonts" placeholder="Search" id="search-input" />
              <img src="./assets/cross.svg" alt="cross-icon" class="search-close-icon" id="search-close-icon"/>
            </div>
          </div>
        </div>
        </main>
      
      <div className="pokemon-container">
        <div className="all-container">
          { allPokemons.map((pokemon, index) => 
            <PokemonThumbnail
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            key={index}
            />
          )}
        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
      </div>
    </div>
    
    
  );
}

export default App;
