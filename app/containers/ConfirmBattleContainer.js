import React, {Component, PropTypes} from 'react'
import ConfirmBattle from '../components/ConfirmBattle'

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