import React, { useEffect } from 'react'
import manageEventListeners from 'utils/manageEventListeners'

const App = (props) => {
  const { children } = props

  const setFullScreen = () => {
    document.documentElement.requestFullscreen?.()
  }

  useEffect(() => {
    const eventNames = ['keydown', 'touchstart', 'mousemove']

    manageEventListeners(document, eventNames, setFullScreen)

    return () => {
      manageEventListeners(document, eventNames, setFullScreen, false)
    }
  }, [])

  return (
    <>
      <div>{children}</div>
    </>
  )
}

export default App
