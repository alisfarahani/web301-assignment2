import React, { Component } from 'react';
import PokemanList from '../PokemonList/PokemanList';
import styles from '../layout/Main.module.css';


class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.main}>
                <PokemanList/>
            </div>
         );
    }
}
 
export default Main;