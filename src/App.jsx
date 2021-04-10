import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import routes from '@/routes';

// import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Switch>
        {
          routes.map(route => {
            return(
              <Route exact key={route.path} path={route.path}>
                <route.comments />
              </Route>
            )
          })
        }
      </Switch>
    </Router>
  )
}

export default App
