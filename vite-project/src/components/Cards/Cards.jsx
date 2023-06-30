import PropTypes from 'prop-types'
import Card from '../Card/Card'

export default function Cards({characters}) {
  return (
    <div>
        {characters?.map((character, index) =><Card
        key={index}
        character={character}
        />)}
    </div>
  )
}

Cards.propTypes = {
    characters: PropTypes.array.isRequired
  }