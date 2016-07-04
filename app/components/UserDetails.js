import React, {Component, PropTypes} from 'react';

const UserDetails = (user) => {
  return (
    <div>
      {!!user.score && <li className="list-group-item"><h3>Score: {user.score}</h3></li>}
      <li className="list-group-item"><img src={user.data.avatar_url} className="img-responsive img-rounded" /></li>
      <li className="list-group-item"><h3>userName: {user.data.login}</h3></li>
      <li className="list-group-item">company: {user.data.company}</li>
      <li className="list-group-item">blog: <a href={user.data.blog}>{user.data.blog}</a></li>
      <li className="list-group-item">email: {user.data.email}</li>
      <li className="list-group-item">bio: {user.data.bio}</li>
      <li className="list-group-item">public_repos: {user.data.public_repos}</li>
      <li className="list-group-item">public_gists: {user.data.public_gists}</li>
      <li className="list-group-item">followers: {user.data.followers}</li>
      <li className="list-group-item">following: {user.data.following}</li>
    </div>
  )  
}

UserDetails.propTypes = {
  score: PropTypes.number,
  data: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    email: PropTypes.string,
    bio: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
    public_gists: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
};

export default UserDetails;