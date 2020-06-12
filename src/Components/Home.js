import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <section>
    <h1>Welcome</h1>
    <p>Api - Redux.</p>

    <Link to="/users" className="button">
      View Users
    </Link>
  </section>
)

export default Home