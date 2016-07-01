import React, {Component, PropTypes} from 'react'

class ConfirmBattle extends Component {
  render() {
    return this.props.isLoading === true 
      ? <p>Loading</p>
      : <p>ConfirmBattle</p>
  }
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export default ConfirmBattle