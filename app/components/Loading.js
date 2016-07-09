import React, {Component, PropTypes} from 'react';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    }
  }
  componentDidMount() {
    const stopperFlag = this.props.text + '...'
    this.interval = setInterval(() => {
      if (this.state.text === stopperFlag) {
        this.setState({
          text: this.props.text
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }, this.props.speed)
  }
  componentWillUnmount() {
    window.clearInterval(this.interval)   
  }
  render() {
    return (
      <div className="text-center">
        <h3>{this.state.text}</h3>
      </div>
    );
  }
}
Loading.defaultProps = {
  text: 'Loading',
  speed: 300
} 
Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
};

export default Loading;
