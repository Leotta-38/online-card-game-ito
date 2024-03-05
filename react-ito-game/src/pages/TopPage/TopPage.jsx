import './TopPage.css'
import { Outlet } from 'react-router-dom'

function TopPage() { 
  return (
    <section className="top-page">
      <h1>Ito</h1>
      <p>ver. 1.0.0</p>

      <Outlet />
    </section>
  )
}

export default TopPage