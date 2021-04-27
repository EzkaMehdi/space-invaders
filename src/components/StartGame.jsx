import React from 'react';


class StartGame extends React.Component {

  render() {

      // Si il ne reste aucun alien ou si on a perdu le jeu.
    if (this.state.displayAlien.length !== 0 && (this.state.displayAlien.indexOf(true) === -1 || this.state.lostGame)) {
        return (
          <div className='container'>
  
            <img className='banner' src={Banner} alt='Title Game Banner' />
  
            <img className='grandpaImg' src={Grandpa} alt='Space Invader Grandpa' />
  
            <img className='grandmaImg' src={Grandma} alt='Space Invader Grandma' />
  
            <span className='grandpa'> Grandpa </span>
            <span className='grandma'> Grandma </span>
    )
  }
}



export default StartGame;