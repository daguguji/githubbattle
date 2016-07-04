import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import { transparentBg, space } from '../styles' 

const StartOver = (props) => {
  return (
    <div className="col-sm-12">
      <Link to='/playerOne'>
        <button className="btn btn-success btn-lg" style={space}>Start Over</button>
      </Link>
    </div>
  )
}

const Tie = (props) => {
  return (
    <div className="col-sm-8 col-sm-offset-2 text-center">
      <h1>It is Tie</h1>Score: {props.score}
      <StartOver />
    </div>
  )
}

const Results = (props) => {
  if (props.isLoading === true) {
    return <p>Loading</p>
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <Tie score={props.scores[0]} />
    )
  }

  const winnerIndex = props.scores[0] > props.scores[1] ? 0 : 1
  const loserIndex = winnerIndex === 0 ? 1 : 0

  return (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="winner">
          <UserDetails score={props.scores[winnerIndex]} data={props.playersInfo[winnerIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="loser">
          <UserDetails score={props.scores[loserIndex]} data={props.playersInfo[loserIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </div>
  )


}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

export default Results;