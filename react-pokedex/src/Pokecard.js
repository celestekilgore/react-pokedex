import './Pokecard.css';
const POKE_API_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({name, id, type, base_experience}) {
  return (
    <div className="pokecard">
      <h3 className="title">{name}</h3>
      <img src={`${POKE_API_URL}${id}.png`}/>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );

}

export default Pokecard;