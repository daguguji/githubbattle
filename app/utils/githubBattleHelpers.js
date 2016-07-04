import axios from 'axios'

const getUserInfo = (username) =>  axios.get('https://api.github.com/users/' + username)

export const getPlayersInfo = (players) => axios.all(players.map(username => getUserInfo(username)))
  .then((info) => info.map(user => user.data))
  .catch(err => console.warn('Error in getPlayersInfo', err))

const getRepos = (username) => axios.get('https://api.github.com/users/' + username + '/repos')

const getTotalStars = (repos) => repos.data.reduce((prev, current) => prev + current.stargazers_count, 0)


const getPlayersData = (player) => {
  return getRepos(player.login)
    .then(getTotalStars)
    .then((totalStars) => {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

const calculateScores = (players) =>  [players[0].followers * 3 + players[0].totalStars, players[1].followers * 3 + players[1].totalStars]

export const battle = (players) => {
  const playerOneData = getPlayersData(players[0])
  const playerTwoData = getPlayersData(players[1])
  return axios.all([playerOneData, playerTwoData])
    .then(calculateScores)
    .catch(err => console.warn('Error in battle', err))
}