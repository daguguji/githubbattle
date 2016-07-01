import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Home from '../components/Home'
import Main from '../components/Main'
import PromptContainer from '../containers/PromptContainer'
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='playerOne' header='player one' component={PromptContainer} />
      <Route path='playerTwo/:playerOne' header='player two' component={PromptContainer} />
      <Route path='battle' component={ConfirmBattleContainer} />
    </Route>
  </Router>
)

export default routes