import { useState } from 'react';
import './App.css';
import cross from './img/cross.svg'
import circle from './img/circle.svg'
import reset from './img/reset.svg'

function App() {

  const [gameStep, setGameStep] = useState('menu')
  const [mode, setMode] = useState('')
  const [gameMark, setGameMark] = useState('cross')

  const [currentStep, setCurrentStep] = useState('cross')

  const [winner, setWinner] = useState('')
  const [modalWin, setModalWin] = useState(false)

  const [countWinCross, setCountWinCross] = useState(0)
  const [countWinCircle, setCountWinCircle] = useState(0)
  const [countTies, setCountTies] = useState(0)

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

    if(newField[0] === 'cross' && newField[1] === 'cross' && newField[2] === 'cross'){
      setWinner('cross')
      setModalWin(true)
    }

    if(newField[3] === 'cross' && newField[4] === 'cross' && newField[5] === 'cross'){
      setWinner('cross')
      setModalWin(true)
    }

    if(newField[6] === 'cross' && newField[7] === 'cross' && newField[8] === 'cross'){
      setWinner('cross')
      setModalWin(true)
    }

    if(newField[0] === 'cross' && newField[3] === 'cross' && newField[6] === 'cross'){
      setWinner('cross')
      setModalWin(true)
    }

    if(newField[1] === 'cross' && newField[4] === 'cross' && newField[7] === 'cross'){
      setWinner('cross')
      setModalWin(true)
    }

    if(newField[2] === 'cross' && newField[5] === 'cross' && newField[8] === 'cross'){
      setWinner('cross')
      setModalWin(true)
    }

    if(newField[0] === 'cross' && newField[4] === 'cross' && newField[8] === 'cross'){
      setWinner('cross')
      setModalWin(true)
    }

    if(newField[2] === 'cross' && newField[4] === 'cross' && newField[6] === 'cross'){
      setWinner('cross')
      setModalWin(true)
    }

    if(newField[0] === 'circle' && newField[1] === 'circle' && newField[2] === 'circle'){
      setWinner('circle')
      setModalWin(true)
    }

    if(newField[3] === 'circle' && newField[4] === 'circle' && newField[5] === 'circle'){
      setWinner('circle')
      setModalWin(true)
    }

    if(newField[6] === 'circle' && newField[7] === 'circle' && newField[8] === 'circle'){
      setWinner('circle')
      setModalWin(true)
    }

    if(newField[0] === 'circle' && newField[3] === 'circle' && newField[6] === 'circle'){
      setWinner('circle')
      setModalWin(true)
    }

    if(newField[1] === 'circle' && newField[4] === 'circle' && newField[7] === 'circle'){
      setWinner('circle')
      setModalWin(true)
    }

    if(newField[2] === 'circle' && newField[5] === 'circle' && newField[8] === 'circle'){
      setWinner('circle')
      setModalWin(true)
    }

    if(newField[0] === 'circle' && newField[4] === 'circle' && newField[8] === 'circle'){
      setWinner('circle')
      setModalWin(true)
    }

    if(newField[2] === 'cross' && newField[4] === 'cross' && newField[6] === 'cross'){
      setWinner('cross')
      setModalWin(true)
    }
  }

  const gameReset = () => {
    setField([
      '', '', '',
      '', '', '',
      '', '', '',
    ])
    setCurrentStep('cross')
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
          {modalWin === true && (
            <div className='modal'>
              <div className='modal__infoBlock'>
                  <p className='modal__infoBlock_title'>YOU WON!</p>
                  <p className='modal__infoBlock_result'>{winner === 'cross' ? <img src={cross}/> : <img src={circle}/>} TAKES THE ROUND</p>
                  <div className='modal__infoBlock_navBlock'>
                    <button onClick={() => {
                      setGameStep('menu')
                      setModalWin(false)
                      setField([
                        '', '', '',
                        '', '', '',
                        '', '', '',
                      ])
                      setCurrentStep('cross')
                      setCountWinCircle(0)
                      setCountWinCross(0)
                      setCountTies(0)
                    }}>QUIT</button>
                    <button onClick={() => {
                      setModalWin(false)
                      setField([
                        '', '', '',
                        '', '', '',
                        '', '', '',
                      ])
                      setCurrentStep('cross')
                      if(winner === 'cross'){
                        setCountWinCross(prev => prev + 1)
                      }else if(winner === 'circle'){
                        setCountWinCircle(prev => prev + 1)
                      }else{
                        setCountTies(prev => prev + 1)
                      }
                    }}>NEXT ROUND</button>
                  </div>
              </div>
            </div>
          )}
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
                <button className='game__playField_nav_reset' onClick={gameReset}
                >
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
                  <p>{countWinCross}</p>
                </div>
                <div className='game__playField_resultBlock_ties'>
                  <p>TIES</p>
                  <p>{countTies}</p>
                </div>
                <div className='game__playField_resultBlock_opponentResult'>
                  <p>{mode === 'play with PC' ? <p>O CPU</p> : <p>PLAYER</p>}</p>
                  <p>{countWinCircle}</p>
                </div>
              </div>
              <button onClick={() => {
                setGameStep('menu')
                setField([
                        '', '', '',
                        '', '', '',
                        '', '', '',
                      ])
                setCurrentStep('cross')
                setCountWinCircle(0)
                setCountWinCross(0)
                setCountTies(0)
              }} className='game__menu_back'>Back to main menu</button>

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
