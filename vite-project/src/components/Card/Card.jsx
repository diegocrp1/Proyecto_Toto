import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Card({character}) {
  return (
    <div>
        <Link to={`/detail/${character.id}`}>
        <h2>{character.name}</h2>
        <p>{character.age}</p>
        <p>{character.force}</p>
        <img src={character?.img}/>        
        </Link>
    </div>
  )
}

Card.propTypes = {
    character: PropTypes.object.isRequired
  }
