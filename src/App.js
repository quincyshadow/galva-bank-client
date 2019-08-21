import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopNav from './components/layout/TopNav'
import Login from './components/auth/Login'

function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
