import './App.css'
import { Link, Outlet } from 'react-router'

function App() {

  return (
    <>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/one'>One</Link></li>
        <li><Link to='/one/two'>One Two</Link></li>
      </ul>
      <Outlet />
    </>
  )
}

export default App
