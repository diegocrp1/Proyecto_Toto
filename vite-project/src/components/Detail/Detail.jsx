import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export default function Detail({characters}) {
  const {id}=useParams()
  const character=characters.find(character=>character.id===id)
  return (
    <div>
      <h1>Name: {character.name}</h1>
      <p>Age: {character.age}</p>
      <p>Force:{character.force}</p>
      <img src={character?.img}/>
    </div>
  )
}


Detail.propTypes = {
  characters: PropTypes.array.isRequired,
};