import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setBirdId, setScore } from 'modules/main/store/mainSlice'

import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import { RotateIcon } from 'assets/icons'
import desk from '../../../../assets/images/desk.png'
import s from './Game.module.scss'

import volumeOn from '../../../../assets/images/volumeOn.png'
import volumeOff from '../../../../assets/images/volumeOff.png'

import Sound from '../../../../assets/audio/game.mp3'

import Canvas from './scripts/script'

const Game = () => {
  const navigate = useNavigate()

  const { user, birdId, scoreUser } = useSelector((state) => state.mainReducer)

  const [isValid, setIsValid] = useState(true)

  // Звук

  let game = useRef(new Audio(Sound)) // Создание аудио объекта

  if (isValid) {
    game.current.play()
  }

  function playOn() {
    game.current.pause()
    setIsValid(false)
  }

  function playOff() {
    game.current.play()
    setIsValid(true)
  }

  const restart = () => {
    document.location.reload()
    document.location.hash = 'game'
  }

  return (
    <div className={s.root}>
      <div className={s.help}>
        <RotateIcon width='100px' />
        <h1>Пожалуйста переверните устройство</h1>
      </div>

      <Canvas className={s.canvas} />

      <div className={s.restart}>
        <header className={s.header}>GAME OVER</header>
        <form className={s.form}>
          <div className={s.button}>
            <img className={s.desk} src={desk} />
            <div className={s.score}>Your score: {scoreUser} points</div>
          </div>
          <div className={s.button}>
            <img className={s.desk} src={desk} />
            <button className={s.confirm} onClick={() => restart()}>
              Restart game!
            </button>
          </div>
          <div className={s.button}>
            <img className={s.desk} src={desk} />
            <button className={s.confirm} onClick={() => navigate('/leaderboard')}>
              Leaderboard
            </button>
          </div>
          <div className={s.button}>
            <img className={s.desk} src={desk} />
            <button className={s.confirm} onClick={() => navigate('/')}>
              Exit
            </button>
          </div>
        </form>
      </div>

      <button
        className={classNames({ [s.volumeOnInvalid]: !isValid }, { [s.volumeOnValid]: isValid })}
        onClick={() => playOn()}
      >
        <img src={volumeOn} width='50px' />
      </button>

      <button
        className={classNames({ [s.volumeOffValid]: !isValid }, { [s.volumeOffInvalid]: isValid })}
        onClick={() => playOff()}
      >
        <img src={volumeOff} width='50px' />
      </button>
    </div>
  )
}

export default Game
