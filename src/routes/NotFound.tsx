import React from 'react'
import { Link } from 'react-router-dom'

import { ROOT } from './CONSTANTS'

export const NotFound = () => {
  return (
    <>
      <Link to={ROOT}>Home</Link>
      <h2>404: page not found!</h2>
    </>
  )
}
