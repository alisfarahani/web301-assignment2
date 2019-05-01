import React, { Component } from 'react';
//Material UI Components:
import AppBarUi from '@material-ui/core/AppBar';
import AppBarStyles from '../layout/PokemonBar.module.css';
import Toolbar from '@material-ui/core/Toolbar';

class PokemonBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
				<AppBarUi className={AppBarStyles.pokemonBar}>
					<Toolbar className={AppBarStyles.toolbar} >
                    <img src={require('../../Assets/pokedex.png')} alt="appBarImg"/>
                    <div className={AppBarStyles.image}>
                    <img src={require('../../Assets/ball.png')} alt="pokeImg"/>
                    </div>
                
					</Toolbar>
				</AppBarUi>
			</div>
         );
    }
}
 
export default PokemonBar;