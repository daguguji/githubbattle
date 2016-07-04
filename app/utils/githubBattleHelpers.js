import axios from 'axios'

const getUserInfo = (username) => {
  return axios.get('https://api.github.com/users/' + username)
}

export const getPlayersInfo = (players) => {
  return axios.all(players.map(username => getUserInfo(username)))
    .then(function (info) {
      return info.map(user => user.data)
    })
    .catch(err => console.warn('Error in getPlayersInfo', err))
}

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos')
}

function getTotalStars(repos) {
  return repos.data.reduce(function (prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

function getPlayersData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

export const battle = (players) => {
  const playerOneData = getPlayersData(players[0])
  const playerTwoData = getPlayersData(players[1])
  return axios.all([playerOneData, playerTwoData])
    .then(calculateScores)
    .catch(err => console.warn('Error in battle', err))
}