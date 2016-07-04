import React, {Component} from 'react';

function dump(obj) {
  return (
    <pre>
      {JSON.stringify(obj, null, ' ')}
    </pre>
  )
}

function Results(props) {
  return (
    <div>{dump(props)}</div>
  )  
}

export default Results;