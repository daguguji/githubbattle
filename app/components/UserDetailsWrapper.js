import React, {Component, PropTypes} from 'react';

const UserDetailsWrapper = (props) => {
  return (
    <div className="col-sm-6">
      <h3>{props.header}</h3>
      {props.children}
    </div>
  )
}

UserDetailsWrapper.propTypes = {
  header: PropTypes.string.isRequired
};

export default UserDetailsWrapper;