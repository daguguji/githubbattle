import React, {Component} from 'react'
import {Link} from 'react-router'
import {transparentBg} from '../styles'

const Home = () => {
  return (
    <div className="jumbotron text-center col-sm-8 col-sm-offset-2" style={transparentBg}>
      <Link to='/playerOne'>
        <button className="btn btn-lg btn-success">Start Battle</button>
      </Link>
    </div>
  )
}

export default Home