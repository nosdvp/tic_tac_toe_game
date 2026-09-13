import { useState } from 'react';
import './App.css';
import cross from './img/cross.svg'
import circle from './img/circle.svg'
import reset from './img/reset.svg'
import crossSilver from './img/cross-silver.svg'
import circleSilver from './img/circle-silver.svg'

function App() {

  const [gameStep, setGameStep] = useState('menu')
  const [mode, setMode] = useState('')
  const [gameMark, setGameMark] = useState('cross')

  const [currentStep, setCurrentStep] = useState('cross')

  const [winner, setWinner] = useState('')
  const [modalWin, setModalWin] = useState(false)

  const [field, setField] = useState([
    '', '', '',
    '', '', '',
    '', '', '',
  ])

  const changeStep = (index) => {

    if (field[index] !== '') {
      return
    }

    const newField = [...field]
    newField[index] = currentStep
    setField(newField)

    currentStep === 'cross' ? setCurrentStep('circle') : setCurrentStep('cross')

    if(field[0] === 'cross' && field[1] === 'cross' && field[2] === 'cross'){
      setWinner('cross')
      setModalWin('true')
    }

    if(field[3] === 'cross' && field[4] === 'cross' && field[5] === 'cross'){
      setWinner('cross')
      setModalWin('true')
    }

    if(field[6] === 'cross' && field[7] === 'cross' && field[8] === 'cross'){
      setWinner('cross')
      setModalWin('true')
    }

    if(newField[0] === 'cross' && newField[3] === 'cross' && newField[6] === 'cross'){
      setWinner('cross')
      setModalWin('true')
    }

    if(field[1] === 'cross' && field[4] === 'cross' && field[7] === 'cross'){
      setWinner('cross')
      setModalWin('true')
    }

    if(field[2] === 'cross' && field[5] === 'cross' && field[8] === 'cross'){
      setWinner('cross')
      setModalWin('true')
    }

    if(field[0] === 'cross' && field[4] === 'cross' && field[8] === 'cross'){
      setWinner('cross')
      setModalWin('true')
    }

    if(field[0] === 'circle' && field[1] === 'circle' && field[2] === 'circle'){
      setWinner('circle')
      setModalWin('true')
    }

    if(field[3] === 'circle' && field[4] === 'circle' && field[5] === 'circle'){
      setWinner('circle')
      setModalWin('true')
    }

    if(field[6] === 'circle' && field[7] === 'circle' && field[8] === 'circle'){
      setWinner('circle')
      setModalWin('true')
    }

    if(field[0] === 'circle' && field[3] === 'circle' && field[6] === 'circle'){
      setWinner('circle')
      setModalWin('true')
    }

    if(field[1] === 'circle' && field[4] === 'circle' && field[7] === 'circle'){
      setWinner('circle')
      setModalWin('true')
    }

    if(field[2] === 'circle' && field[5] === 'circle' && field[8] === 'circle'){
      setWinner('circle')
      setModalWin('true')
    }

    if(field[0] === 'circle' && field[4] === 'circle' && field[8] === 'circle'){
      setWinner('circle')
      setModalWin('true')
    }
  }

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
          {mode === 'play with player' ? (
            <section className='game__playField'>

              <div className='game__playField_nameMode'>Play with Player</div>
              <div className='game__playField_markIndicate'>
                <p>Current step player: {currentStep === 'cross' ? <img className='stepCross' src={cross}/> : <img className='circleCross' src={circle}/>}</p>
              </div>

              <div className='game__playField_nav'>
                <div className='game__playField_nav_img'>
                  <img src={cross}/>
                  <img src={circle}/>
                </div>
                <button className='game__playField_nav_reset'>
                  <img src={reset}/>
                </button>
              </div>

              <div className='game__playField_fieldBlock'>
                <button onClick={() => changeStep(0)}>
                  {field[0] === 'cross' && <img src={cross}/>}
                  {field[0] === 'circle' && <img src={circle}/>}
                </button>
                <button onClick={() => changeStep(1)}>
                  {field[1] === 'cross' && <img src={cross}/>}
                  {field[1] === 'circle' && <img src={circle}/>}
                </button>
                <button onClick={() => changeStep(2)}>
                  {field[2] === 'cross' && <img src={cross}/>}
                  {field[2] === 'circle' && <img src={circle}/>}
                </button>
                <button onClick={() => changeStep(3)}>
                  {field[3] === 'cross' && <img src={cross}/>}
                  {field[3] === 'circle' && <img src={circle}/>}
                </button>
                <button onClick={() => changeStep(4)}>
                  {field[4] === 'cross' && <img src={cross}/>}
                  {field[4] === 'circle' && <img src={circle}/>}
                </button>
                <button onClick={() => changeStep(5)}>
                  {field[5] === 'cross' && <img src={cross}/>}
                  {field[5] === 'circle' && <img src={circle}/>}
                </button>
                <button onClick={() => changeStep(6)}>
                  {field[6] === 'cross' && <img src={cross}/>}
                  {field[6] === 'circle' && <img src={circle}/>}
                </button>
                <button onClick={() => changeStep(7)}>
                  {field[7] === 'cross' && <img src={cross}/>}
                  {field[7] === 'circle' && <img src={circle}/>}
                </button>
                <button onClick={() => changeStep(8)}>
                  {field[8] === 'cross' && <img src={cross}/>}
                  {field[8] === 'circle' && <img src={circle}/>}
                </button>
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
              <button onClick={() => setGameStep('menu')} className='game__menu_back'>Back to main menu</button>

            </section>
          ) : (
            <>
            </>
          )}
        </>
      )}
      
    </div>
  );
}

export default App;
