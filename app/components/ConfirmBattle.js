import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import UserDetailsWrapper from './UserDetailsWrapper'
import UserDetails from './UserDetails'
import { transparentBg, space } from '../styles'
import Loading from './Loading'

const ConfirmBattle = (props) => {
  return props.isLoading === true
    ? <Loading text={'wait a monment'} speed={500} />
    : 
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <h1>Confirm Battle</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="player one">
          <UserDetails data={props.playersInfo[0]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="player two">
          <UserDetails data={props.playersInfo[1]} />
        </UserDetailsWrapper>
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12">
          <button onClick={props.onInitiateBattle} className="btn btn-lg btn-success" style={space}>Initiate Battle</button>
        </div>
        <div className="col-sm-12">
          <Link to='/playerOne'>
            <button className="btn btn-lg btn-danger" style={space}>Reselect User</button>
          </Link>
        </div>
      </div>
    </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

export default ConfirmBattle