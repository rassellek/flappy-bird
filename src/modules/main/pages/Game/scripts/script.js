import React, { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setUser, setBirdId, setScore } from 'modules/main/store/mainSlice'
import { setLeaders, setBoard } from 'modules/main/store/leadersSlice'

import flySound from '../../../../../assets/audio/fly_2.mp3'
import scoreSound from '../../../../../assets/audio/score.mp3'
import loseSound from '../../../../../assets/audio/lose.mp3'

const Canvas = (props) => {
  const canvasRef = useRef(null)

  const { user, birdId, scoreUser } = useSelector((state) => state.mainReducer)
  const { leaders, board } = useSelector((state) => state.leadersReducer)
  const dispatch = useDispatch()

  const [list, setList] = useState([])

  useEffect(() => {
    setList([...Array.from(board)])
  }, [])

  const leaderData = {
    userName: '',
    pointsUser: 0,
  }

  window.onload = function () {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = 1920
    canvas.height = 1080

    // Изображения
    let bird = new Image() // Создание объекта
    let bg = new Image() // Создание объекта
    let cloud_1 = new Image() // Создание объекта
    let cloud_2 = new Image() // Создание объекта
    let cloud_3 = new Image() // Создание объекта
    let cloud_4 = new Image() // Создание объекта
    let cloud_5 = new Image() // Создание объекта
    let cloud_6 = new Image() // Создание объекта
    let cloud_7 = new Image() // Создание объекта
    let cloud_8 = new Image() // Создание объекта
    let fg = new Image() // Создание объекта
    let pipeUp = new Image() // Создание объекта
    let pipeBottom = new Image() // Создание объекта

    bird.src = require(`../../../../../assets/images/bird/bird_${birdId}.png`) // Указание нужного изображения
    bg.src = require('../../../../../assets/images/bg/bg.png') // Аналогично
    fg.src = require('../../../../../assets/images/bg/fg.png') // Аналогично
    pipeUp.src = require('../../../../../assets/images/pipeUp.png') // Аналогично
    pipeBottom.src = require('../../../../../assets/images/pipeBottom.png') // Аналогично
    cloud_1.src = require('../../../../../assets/images/bg/cloud_1.png') // Аналогично
    cloud_2.src = require('../../../../../assets/images/bg/cloud_2.png') // Аналогично
    cloud_3.src = require('../../../../../assets/images/bg/cloud_3.png') // Аналогично
    cloud_4.src = require('../../../../../assets/images/bg/cloud_4.png') // Аналогично
    cloud_5.src = require('../../../../../assets/images/bg/cloud_5.png') // Аналогично
    cloud_6.src = require('../../../../../assets/images/bg/cloud_6.png') // Аналогично
    cloud_7.src = require('../../../../../assets/images/bg/cloud_7.png') // Аналогично
    cloud_8.src = require('../../../../../assets/images/bg/cloud_8.png') // Аналогично

    // Звук
    let fly = new Audio(flySound) // Создание аудио объекта
    let score_audio = new Audio(scoreSound) // Создание аудио объекта
    let lose = new Audio(loseSound) // Создание аудио объекта

    // Создание блоков
    let pipe = []

    pipe[0] = {
      x: canvas.width,
      y: 0,
    }

    // Создание блоков
    let pipe2 = []

    pipe2[0] = {
      x: canvas.width,
      y: 0,
    }

    // Создание блоков
    let pipe3 = []

    pipe3[0] = {
      x: canvas.width + 198,
      y: 0,
    }

    let mountains = []

    mountains[0] = {
      x: 0,
      y: 0,
    }

    let clouds_1 = []

    clouds_1[0] = {
      x: canvas.width + 100,
      y: Math.floor(Math.random() * 100 + 100),
    }

    let clouds_2 = []

    clouds_2[0] = {
      x: canvas.width + 150,
      y: Math.floor(Math.random() * 100 + 200),
    }

    let clouds_3 = []

    clouds_3[0] = {
      x: canvas.width + 200,
      y: Math.floor(Math.random() * 100 + 300),
    }

    let clouds_4 = []

    clouds_4[0] = {
      x: canvas.width + 250,
      y: Math.floor(Math.random() * 100 + 400),
    }

    let clouds_5 = []

    clouds_5[0] = {
      x: canvas.width + 300,
      y: Math.floor(Math.random() * 100 + 500),
    }

    let clouds_6 = []

    clouds_6[0] = {
      x: canvas.width + 350,
      y: Math.floor(Math.random() * 100 + 600),
    }

    let clouds_7 = []

    clouds_7[0] = {
      x: canvas.width + 400,
      y: Math.floor(Math.random() * 100 + 700),
    }

    let clouds_8 = []

    clouds_8[0] = {
      x: canvas.width + 450,
      y: Math.floor(Math.random() * 100 + 800),
    }

    //Начальные очки
    let score = 0

    // Позиция птички и скорость падения
    let xPos = 250
    let yPos = 250
    let grav = 2

    // Расстояние между препятствиями
    let gap = 140

    // При нажатии на какую-либо кнопку птичка подлетает
    document.addEventListener('keydown', moveUp)
    document.addEventListener('touchstart', moveUp)

    function moveUp() {
      yPos -= 40
      fly.play()
    }

    //Динамичная отрисовка
    function draw() {
      ctx.imageSmoothingEnabled = false

      // Отрисовка бэкраунга
      ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)

      //Движение облаков

      for (let i = 0; i < clouds_1.length; i++) {
        ctx.drawImage(cloud_1, clouds_1[i].x, clouds_1[i].y)
        clouds_1[i].x -= 2.5

        if (clouds_1[i].x == 1500) {
          clouds_1.push({
            x: canvas.width + 100,
            y: Math.floor(Math.random() * 100 + 100),
          })
        }
      }

      for (let i = 0; i < clouds_2.length; i++) {
        ctx.drawImage(cloud_2, clouds_2[i].x, clouds_2[i].y)
        clouds_2[i].x -= 1

        if (clouds_2[i].x == 1000) {
          clouds_2.push({
            x: canvas.width + 150,
            y: Math.floor(Math.random() * 100 + 200),
          })
        }
      }

      for (let i = 0; i < clouds_3.length; i++) {
        ctx.drawImage(cloud_3, clouds_3[i].x, clouds_3[i].y)
        clouds_3[i].x -= 2

        if (clouds_3[i].x == 1300) {
          clouds_3.push({
            x: canvas.width + 200,
            y: Math.floor(Math.random() * 100 + 300),
          })
        }
      }

      for (let i = 0; i < clouds_4.length; i++) {
        ctx.drawImage(cloud_4, clouds_4[i].x, clouds_4[i].y)
        clouds_4[i].x -= 2

        if (clouds_4[i].x == 1300) {
          clouds_4.push({
            x: canvas.width + 250,
            y: Math.floor(Math.random() * 100 + 400),
          })
        }
      }

      for (let i = 0; i < clouds_5.length; i++) {
        ctx.drawImage(cloud_5, clouds_5[i].x, clouds_5[i].y)
        clouds_5[i].x -= 0.5

        if (clouds_5[i].x == 1200) {
          clouds_5.push({
            x: canvas.width + 300,
            y: Math.floor(Math.random() * 100 + 500),
          })
        }
      }

      for (let i = 0; i < clouds_6.length; i++) {
        ctx.drawImage(cloud_6, clouds_6[i].x, clouds_6[i].y)
        clouds_6[i].x -= 2.5

        if (clouds_6[i].x == 1500) {
          clouds_6.push({
            x: canvas.width + 350,
            y: Math.floor(Math.random() * 100 + 600),
          })
        }
      }

      for (let i = 0; i < clouds_7.length; i++) {
        ctx.drawImage(cloud_7, clouds_7[i].x, clouds_7[i].y)
        clouds_7[i].x -= 2.5

        if (clouds_7[i].x == 1500) {
          clouds_7.push({
            x: canvas.width + 400,
            y: Math.floor(Math.random() * 100 + 700),
          })
        }
      }

      for (let i = 0; i < clouds_8.length; i++) {
        ctx.drawImage(cloud_8, clouds_8[i].x, clouds_8[i].y)
        clouds_8[i].x -= 2.5

        if (clouds_8[i].x == 1500) {
          clouds_8.push({
            x: canvas.width + 450,
            y: Math.floor(Math.random() * 100 + 800),
          })
        }
      }

      //Движение препятствий 1
      for (let i = 0; i < pipe.length && score <= 16; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y, 50, 450)
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + 450 + gap, 50, 450)

        pipe[i].x -= 2

        if (pipe[i].x == 1500) {
          pipe.push({
            x: canvas.width + 0,
            y: Math.floor(Math.random() * (0 + 275) - 275),
          })
        }

        // Отслеживание прикосновений
        if (
          (xPos + 50 >= pipe[i].x &&
            xPos <= pipe[i].x + 50 &&
            (yPos <= pipe[i].y + 445 || yPos + 45 >= pipe[i].y + 445 + gap)) ||
          yPos + 45 >= 725
        ) {
          lose.play()
          dispatch(setScore(score))
          leaderData.userName = user
          leaderData.pointsUser = score
          dispatch(setLeaders(leaderData))
          setList(list.push(leaderData))
          dispatch(setBoard(list))
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          canvas.style.display = 'none'
          return
        }

        if (pipe[i].x == 250) {
          score++
          score_audio.play()
        }
      }

      //Движение препятствий 2
      for (let i = 0; i < pipe2.length && score > 16 && score <= 32; i++) {
        ctx.drawImage(pipeUp, pipe2[i].x, pipe2[i].y, 50, 450)
        ctx.drawImage(pipeBottom, pipe2[i].x, pipe2[i].y + 450 + gap, 50, 450)

        pipe2[i].x -= 4

        if (pipe2[i].x == 1500) {
          pipe2.push({
            x: canvas.width + 0,
            y: Math.floor(Math.random() * (0 + 275) - 275),
          })
        }
        // Отслеживание прикосновений
        if (
          (xPos + 50 >= pipe2[i].x &&
            xPos <= pipe2[i].x + 50 &&
            (yPos <= pipe2[i].y + 445 || yPos + 45 >= pipe2[i].y + 445 + gap)) ||
          yPos + 45 >= 725
        ) {
          lose.play()
          dispatch(setScore(score))
          leaderData.userName = user
          leaderData.pointsUser = score
          dispatch(setLeaders(leaderData))
          setList(list.push(leaderData))
          dispatch(setBoard(list))
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          canvas.style.display = 'none'
          return
        }

        if (pipe2[i].x == 248) {
          score++
          score_audio.play()
        }
      }

      //Движение препятствий 3
      for (let i = 0; i < pipe3.length && score >= 32; i++) {
        ctx.drawImage(pipeUp, pipe3[i].x, pipe3[i].y, 50, 450)
        ctx.drawImage(pipeBottom, pipe3[i].x, pipe3[i].y + 450 + gap, 50, 450)

        pipe3[i].x -= 6

        if (pipe3[i].x == 1500) {
          pipe3.push({
            x: canvas.width + 198,
            y: Math.floor(Math.random() * (0 + 275) - 275),
          })
        }

        // Отслеживание прикосновений
        if (
          (xPos + 50 >= pipe3[i].x &&
            xPos <= pipe3[i].x + 50 &&
            (yPos <= pipe3[i].y + 445 || yPos + 45 >= pipe3[i].y + 445 + gap)) ||
          yPos + 45 >= 725
        ) {
          lose.play()
          dispatch(setScore(score))
          leaderData.userName = user
          leaderData.pointsUser = score
          dispatch(setLeaders(leaderData))
          setList(list.push(leaderData))
          dispatch(setBoard(list))
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          canvas.style.display = 'none'
          return
        }

        if (pipe3[i].x == 252) {
          score++
          score_audio.play()
        }
      }

      //Движение и отрисовка флипграунда
      for (let i = 0; i < mountains.length; i++) {
        ctx.drawImage(fg, mountains[i].x, mountains[i].y, canvas.width, canvas.height)
        if (score <= 16) {
          mountains[i].x -= 2
        }
        if (score > 16 && score <= 32) {
          mountains[i].x -= 4
        }
        if (score > 32) {
          mountains[i].x -= 6
        }

        if (mountains[i].x == -10 || mountains[i].x == -8) {
          mountains.push({
            x: ctx.canvas.width - 10,
            y: 0,
          })
        }
      }

      ctx.drawImage(bird, xPos, yPos, 50, 50)

      yPos += grav

      //Имя игрока
      ctx.fillStyle = '#000'
      ctx.font = '36px Verdana'
      ctx.fillText('Score: ' + score, 10, canvas.height - 20)

      //Счёт игрока
      ctx.fillStyle = '#000'
      ctx.font = '36px Verdana'
      ctx.fillText(`Player: ${user}`, 10, canvas.height - 60)

      requestAnimationFrame(draw)
    }

    pipeBottom.onload = draw
  }

  return <canvas ref={canvasRef} {...props} />
}

export default Canvas
