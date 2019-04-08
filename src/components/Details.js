import React from 'react'
import { Link } from 'react-router-dom'

const Details = props => {
  const { __content } = props.article
  return (
    <div>
      <Link to="/">« Back</Link>
      <div dangerouslySetInnerHTML={{ __html: __content }} />
    </div>
  )
}

export default Details
