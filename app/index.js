import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class Hello extends Component {
  render() {
    return (
      <div className='lead text-center'>
        {'Hello, ' + this.props.name}
      </div>
    );
  }
}

class HelloWrap extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

class Container extends Component {
  render() {
    return (
      <div>
        <HelloWrap>
          <WellCome />
            <Hello name='monica' />
        </HelloWrap>
      </div>
    );
  }
}

class WellCome extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        {'WellCome'}
      </div>
    );
  }
}


ReactDOM.render(<Container />, document.getElementById('app'))