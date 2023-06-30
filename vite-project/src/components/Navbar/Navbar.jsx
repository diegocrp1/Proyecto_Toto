import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navbar({ logout }) {
  return (
    <div>
      <Link to={'/home'}>
        <button>Home</button>
      </Link>
      <Link to={'/form/create'}>
        <button>Create</button>
      </Link>
      <Link to={'/form/edit'}>
        <button>Edit</button>
      </Link>
      <Link to={'/form/delete'}>
        <button>Delete</button>
      </Link>
      <button onClick={logout}>LogOut</button>
    </div>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired
}