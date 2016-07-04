import React, {Component} from 'react'

const Main = (props) => {
  return (
    <div className="main-container">
      {props.children}
    </div>
  )
}

export default Main;