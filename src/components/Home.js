import React from 'react'
import { Link } from 'react-router-dom'

const Home = props => {
  return (
    <ul>
      {[...props.articles.keys()].map(path => (
        <li key={path}>
          <Link to={'/' + path}>{props.articles.get(path).title || path}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Home
