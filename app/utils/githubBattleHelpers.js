import axios from 'axios'

const getUserInfo = (username) => {
  return axios.get('https://api.github.com/users/' + username)
}

export const getPlayersInfo = (players) => {
  return axios.all(players.map(username => getUserInfo(username)))
    .then(function (info) {
      return info.map(user => user.data)
    })
    .catch(err => console.log('Error in getPlayersInfo', err))
}