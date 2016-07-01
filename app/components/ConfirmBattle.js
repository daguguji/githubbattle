import React, {Component, PropTypes} from 'react'

class Puck extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <pre>
        {JSON.stringify(this.props.data, null, ' ')}
      </pre>
    );
  }
}


class ConfirmBattle extends Component {
  render() {
    return this.props.isLoading === true 
      ? <p>Loading</p>
      : <div><Puck data={this.props} /></div>
  }
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export default ConfirmBattle