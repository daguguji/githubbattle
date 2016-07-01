import React, {Component, PropTypes} from 'react';
import {transparentBg} from '../styles'

class Prompt extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="jumbotron col-sm-8 col-sm-offset-2 text-center" style={transparentBg}>
        <h1>{this.props.header}</h1>
        <div col-sm-12>
          <form className="" onSubmit={this.props.onSubmitUser}>
            <div className="form-group">
              <input className="form-control" value={this.props.username} onChange={this.props.onUpdateUser} />
            </div>
            <div className="form-group">
              <button className="btn btn-lg btn-success" type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired
};

export default Prompt;