import PropTypes from 'prop-types'
import Cards from '../Cards/Cards'
export default function Home({characters}) {
  return (
    <div>
      <h1>Card Maker</h1>
      <Cards characters={characters}/>
    </div>
  )
}

Home.propTypes = {
  characters: PropTypes.array.isRequired
}