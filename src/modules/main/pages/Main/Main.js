import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MainLayout } from '../../../../shared'
import { Input } from './components/Index'

import desk from '../../../../assets/images/desk.png'
import s from './Main.module.scss'

import { setUser, setBirdId, setGame } from 'modules/main/store/mainSlice'

const Main = () => {
  //Навигация
  const navigate = useNavigate()

  //Redux
  const { user, birdId, gameIsRun } = useSelector((state) => state.mainReducer)
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [id, setId] = useState('1')
  const [isNameInvalid, setIsNameInvalid] = useState(false)
  const [isErrorNameMessage, setIsErrorNameMessage] = useState('')

  const [style, setStyle] = useState(true)

  const onSubmit = (event) => {
    event.preventDefault()

    const formData = {
      name,
      id,
    }

    let isValid = true

    if (formData.name === '') {
      setIsNameInvalid(true)
      setIsErrorNameMessage('Inter your name')
      isValid = false
    }
    if (isValid) {
      dispatch(setBirdId(id))
      dispatch(setUser(name))
      console.log(formData)
    }
  }

  const confirm = () => {
    setStyle(false)
  }

  const start = () => {
    dispatch(setGame(false))
    navigate('/game')
    document.location.reload(true)
  }

  return (
    <MainLayout>
      <div className={s.root}>
        <div className={classNames({ [s.start]: !style }, { [s.main]: style })}>
          <form className={s.form} onSubmit={onSubmit}>
            <div className={s.button}>
              <img className={s.desk} src={desk} />
              <Input
                value={name}
                placeholder={'Inter your name'}
                name={'name'}
                onChange={(event) => {
                  setIsNameInvalid(false)
                  setName(event.target.value)
                }}
                isInvalid={isNameInvalid}
                errorMessage={isErrorNameMessage}
                label={'Name'}
              />
            </div>
            <div className={s.button}>
              <img className={s.desk} src={desk} />
              <select
                className={s.select}
                name='pets'
                id='pet-select'
                onChange={(event) => {
                  setId(event.target.value)
                }}
              >
                <option value=''>--Choose a hero--</option>
                <option value='1'>Flappy Bird</option>
                <option value='2'>Angry Bird</option>
                <option value='3'>Suspicious Bird</option>
                <option value='4'>Stupid Bird</option>
                <option value='5'>Square Bird</option>
                <option value='6'>Gold Bird</option>
              </select>
            </div>

            <div className={s.button}>
              <img className={s.desk} src={desk} />
              <button type={'submit'} className={s.confirm} onClick={() => confirm()}>
                Сonfirm
              </button>
            </div>
          </form>
        </div>
        <div className={classNames({ [s.start]: style }, { [s.main]: !style })}>
          <form className={s.form}>
            <div className={s.button}>
              <img className={s.desk} src={desk} />
              <button type={'submit'} className={s.confirm} onClick={() => start()}>
                Start game!
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  )
}

export default Main
