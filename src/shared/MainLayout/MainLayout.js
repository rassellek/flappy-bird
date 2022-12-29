import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RotateIcon } from '../../assets/icons'

import s from './MainLayout.module.scss'

const MainLayout = (props) => {
  const navigate = useNavigate()

  return (
    <>
      <div className={s.root}>
        <header className={s.header}>FLAPPY BIRD</header>
        <div className={s.children}>{props.children}</div>
        <footer className={s.footer}>
          <p>© This page is not intended for commercial use.</p>
        </footer>
      </div>
      <div className={s.help}>
        <RotateIcon width='100px'/>
        <h1>Пожалуйста переверните устройство</h1>
      </div>
    </>
  )
}

export default MainLayout
