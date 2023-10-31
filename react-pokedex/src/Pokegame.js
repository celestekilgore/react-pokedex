import Pokedex from './Pokedex';
import {choice, remove} from "./helper";

const POKEMON = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];

function Pokegame({ pokemon = POKEMON }) {
  const hand1 = [];

  for (let i = 0; i < 4; i++) {
    const randomPokemon = choice(pokemon);
    hand1.push(randomPokemon);
    remove(pokemon, randomPokemon);
  }

  const hand1Exp = hand1.reduce((expSum, p) => expSum + p.base_experience, 0);

  const hand2 = pokemon;
  const hand2Exp = hand2.reduce((expSum, p) => expSum + p.base_experience, 0);
  const winner = hand1Exp > hand2Exp ? "h1" : "h2";
  return (
    <div className="pokedex">
      <h3>Hand 1</h3>
      <Pokedex pokemon={hand1} totalExp={hand1Exp} isWinner={winner === "h1"} />
      <h3>Hand 2</h3>
      <Pokedex pokemon={hand2} totalExp={hand2Exp} isWinner={winner === "h2"} />
    </div>
  );
}

export default Pokegame;