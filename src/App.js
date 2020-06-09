import React from 'react';
import HomePage from './pages/home'
import MoviesPage from './pages/discover'
import MoviePage from './pages/movie'
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom'
import Header from './components/header/header'
function App() {
  return (
    <Router>
      <div className="App">
        <content>
          <Header />
          <Switch>
            <Route path='/movies/:movieId'>
              <MoviePage />
            </Route>

            <Route path='/discover/:searchtext?'>
              <MoviesPage />
            </Route>
            <Route path='/'>
              <HomePage />
            </Route>

          </Switch>
        </content>
      </div>
    </Router>
  );
}

export default App;
