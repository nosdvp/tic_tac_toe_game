import { useState } from 'react';
import './App.css';

function App() {

  const [gameStep, setGameStep] = useState('menu')
  const [mode, setMode] = useState('')
  const [gameMark, setGameMark] = useState('cross')

  return (
    <div className="game">
      {gameStep === 'menu' ? (
        <>
          <section className='game__menu'>
            <div>XO</div>
            <div className='game__menu_blockChoise'>
              <p className='game__menu_blockChoise_title'>PICK PLAYER 1'S MARK</p>
              <div className='game__menu_blockChoise_blockForSelect'>
                <button 
                  onClick={() => setGameMark('cross')}
                  className={gameMark === 'cross' ? 'game__menu_blockChoise_blockForSelect_XActive' : 'game__menu_blockChoise_blockForSelect_XInactive'}
                >
                  <div></div>
                </button>
                <button 
                  onClick={() => setGameMark('zero')}
                  className={gameMark === 'zero' ? 'game__menu_blockChoise_blockForSelect_OActive' : 'game__menu_blockChoise_blockForSelect_OInactive'}
                >
                  <div></div>
                </button>
              </div>
              <p className='game__menu_blockChoise_subTitle'>REMEMBER: X GOES FIRST</p>
            </div>
            <button
              className='game__menu_playWithPC'
              onClick={() => setMode('play with PC')}
            >NEW GAME (VS CPU)</button>
            <button
              className='game__menu_playWithPlayer'
              onClick={() => setMode('play with player')}
            >NEW GAME (VS PLAYER)</button>
          </section>
        </>
      ) : (
        <></>
      )}
      
    </div>
  );
}

export default App;
