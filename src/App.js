import React, { Suspense } from 'react';
import 'App.css'

import Header from 'components/Header'
import SearchResults from 'pages/SearchResults'
import Detail from 'pages/Detail'
import Error from 'pages/Error'
import Login from 'pages/Login'
import { GifsContextProvider } from 'context/GifsContext'
import { UserContextProvider } from 'context/UserContext'
import { Link, Route, Switch } from "wouter"

const HomePage = React.lazy(() => import('pages/Home'))

export default function App() {

  return (
    <UserContextProvider>
      <div className="App">
        <Suspense fallback={null} >
          <section className="App-content">
            <Header />
            <Link to="/">
              <figure className="App-logo">
                <img alt='Giffy logo' src='/logo.png' />
              </figure>
            </Link>
            <GifsContextProvider>
              <Switch>
                <Route
                  component={HomePage}
                  path="/"
                />
                <Route
                  component={SearchResults}
                  // ? makes the parameter optional
                  path="/search/:keyword/:rating?/:lang?" />
                <Route
                  component={Detail}
                  path="/gif/:id"
                />
                <Route
                  component={Login}
                  path="/login"
                />
                <Route
                  component={Error}
                  path="/:rest*"
                />
              </Switch>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>

  )
}
