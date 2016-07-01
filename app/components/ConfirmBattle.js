import React, {Component, PropTypes} from 'react'

function Puck(props) {
  return <pre>{JSON.stringify(props, null, ' ')}</pre>
}

class ConfirmBattle extends Component {
  render() {
    return this.props.isLoading === true
      ? <p>Loading</p>
      : <div>{Puck(this.props)}</div>
  }
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export default ConfirmBattle