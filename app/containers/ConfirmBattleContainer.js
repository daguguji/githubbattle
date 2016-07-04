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
      .then((players) => {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      })
  }
  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  }
  render() {
    return (
      <div>
        <ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo} onInitiateBattle={this.handleInitiateBattle.bind(this)} />
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