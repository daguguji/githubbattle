import React, {Component, PropTypes} from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import {getPlayersInfo} from '../utils/githubBattleHelpers'

class ConfirmBattleContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      playersInfo: []
    }
  }
  componentDidMount() {
    const query = this.props.location.query
    getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this))
  }
  render() {
    return (
      <div>
        <ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo} />
      </div>
    )
  }
}

ConfirmBattleContainer.propTypes = {

}

ConfirmBattleContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ConfirmBattleContainer