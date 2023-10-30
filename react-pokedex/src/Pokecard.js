const POKE_API_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({ pokemon }) {

  const {name, id, type} = pokemon;

  console.log("pokemon",pokemon);

  return (
    <div>
      <h3>{name}</h3>
      <img src={`${POKE_API_URL}${id}.png`}/>
      <p>{type}</p>
    </div>
  );

}

export default Pokecard;