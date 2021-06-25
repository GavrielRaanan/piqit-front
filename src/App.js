import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Compare from './Compare'
import Image from './Image'
import Home from './Home'
import Error from './Error'

import Navbar from './Navbar'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/compare'>
          <Compare></Compare>
        </Route>
        <Route path='/image/:id'>
          <Image></Image>
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
