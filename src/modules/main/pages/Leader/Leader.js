import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setBirdId, setScore } from 'modules/main/store/mainSlice'
import { setLeaders } from 'modules/main/store/leadersSlice'

import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import { RotateIcon } from 'assets/icons'
import desk from '../../../../assets/images/desk.png'
import s from './Leader.module.scss'

const Leader = () => {
  const navigate = useNavigate()

  const { user, birdId, scoreUser } = useSelector((state) => state.mainReducer)
  const { leaders, board } = useSelector((state) => state.leadersReducer)
  const dispatch = useDispatch()

  //Filtter
  for (let i = 0; i < board.length; i++) {
    for (let j = i + 1; j < board.length; j++) {
      if (board[i]['userName'] == board[j]['userName']) {
        if (board[i]['pointsUser'] >= board[j]['pointsUser']) {
          board[j]['pointsUser'] = 0
        } else {
          board[i]['pointsUser'] = 0
        }
      }
    }
  }

  
      // document.location.reload()

 

  //Sort
  let str = ''

  board
    .filter((item) => item.pointsUser !== 0)
    .sort((a, b) => parseFloat(b.pointsUser) - parseFloat(a.pointsUser))
    .map((x) => {
      str += `Score: ${x.pointsUser} ----- User: ${x.userName}\n`
    })

 

  return (
    <div className={s.root}>
      <div className={s.help}>
        <RotateIcon width='100px' />
        <h1>Пожалуйста переверните устройство</h1>
      </div>

      <div className={s.restart}>
        <header className={s.header}>LEADERBOARD</header>
        <form className={s.form}>
          <div className={s.buttonLeader}>
            <div className={s.score}> {str} </div>
          </div>
          <div className={s.button}>
            <img className={s.desk} src={desk} />
            <button className={s.confirm} onClick={() => navigate('/')}>
              Exit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Leader
