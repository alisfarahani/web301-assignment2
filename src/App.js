import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import Main from '../src/components/layout/Main';
import PokemanBar from '../src/components/layout/PokemonBar';
import Pokemon from '../src/components/Pokemon/Pokemon';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (

      <Router>
        <div className={styles.app}>
          <PokemanBar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/pokemon/:pokemonId" component={Pokemon} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
