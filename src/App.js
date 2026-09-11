import { useState } from 'react';
import './App.css';
import cross from './img/cross.svg'
import circle from './img/circle.svg'

function App() {

  const [gameStep, setGameStep] = useState('menu')
  const [mode, setMode] = useState('')
  const [gameMark, setGameMark] = useState('cross')

  return (
    <div className="game">
      {gameStep === 'menu' ? (
        <>
          <section className='game__menu'>
            <div className='game__menu_title'>
              <img src={cross}/>
              <img src={circle}/>
            </div>
            <div className='game__menu_blockChoise'>
              <p className='game__menu_blockChoise_title'>PICK PLAYER 1'S MARK</p>
              <div className='game__menu_blockChoise_blockForSelect'>
                <button 
                  onClick={() => setGameMark('cross')}
                  className={gameMark === 'cross' ? 'game__menu_blockChoise_blockForSelect_XActive' : 'game__menu_blockChoise_blockForSelect_XInactive'}
                >
                  <img src={cross}/>
                </button>
                <button 
                  onClick={() => setGameMark('zero')}
                  className={gameMark === 'zero' ? 'game__menu_blockChoise_blockForSelect_OActive' : 'game__menu_blockChoise_blockForSelect_OInactive'}
                >
                  <img src={circle}/>
                </button>
              </div>
              <p className='game__menu_blockChoise_subTitle'>REMEMBER: X GOES FIRST</p>
            </div>
            <button
              className='game__menu_playWithPC'
              onClick={() => {
                setMode('play with PC') 
                setGameStep('play')
              }}
            >NEW GAME (VS CPU)</button>
            <button
              className='game__menu_playWithPlayer'
              onClick={() => {
                setMode('play with player')
                setGameStep('play')
              }}
            >NEW GAME (VS PLAYER)</button>
          </section>
        </>
      ) : (
        <>
        <section className='game__playField'>

          <div className='game__playField_fieldBlock'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
          </div>

          <div className='game__playField_resultBlock'>
            <div className='game__playField_resultBlock_playerResult'>
              {gameMark === 'cross' ? <p>X (YOU)</p> : <p>O (YOU)</p>}
              <p>14</p>
            </div>
            <div className='game__playField_resultBlock_ties'>
              <p>TIES</p>
              <p>10</p>
            </div>
            <div className='game__playField_resultBlock_opponentResult'>
              <p>{mode === 'play with PC' ? <p>O CPU</p> : <p>PLAYER</p>}</p>
              <p>9</p>
            </div>
          </div>
        </section>
        </>
      )}
      
    </div>
  );
}

export default App;
