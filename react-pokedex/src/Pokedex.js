import Pokecard from './Pokecard';

function Pokedex({ pokemon }) {

  return (
    <div>
      {pokemon.map(p => < Pokecard pokemon={p} />)}
    </div>
  );

}

export default Pokedex;