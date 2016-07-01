import React, {Component, PropTypes} from 'react'
import Prompt from '../components/Prompt'

class PromptContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' }
  }
  handleUpdateUser(e) {
    this.setState({
      username: e.target.value
    })
  }
  handleSubmitUser(e) {
    e.preventDefault()
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
    this.setState({
      username: ''
    })
  }
  render() {
    return (
      <div>
        <Prompt header={this.props.route.header} username={this.state.username} onUpdateUser={this.handleUpdateUser.bind(this)} onSubmitUser={this.handleSubmitUser.bind(this)} />
      </div>
    )
  }
}

PromptContainer.propTypes = {

}
PromptContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default PromptContainer