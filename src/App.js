import React, { useEffect } from 'react'

const App = (props) => {
  document.addEventListener('keydown', fullScrean)
  document.addEventListener('touchstart', fullScrean)
  document.addEventListener('mousemove', fullScrean)

  function fullScrean() {
    document.documentElement.requestFullscreen()
  }

  useEffect(() => {}, [])

  return (
    <>
      <div>{props.children}</div>
    </>
  )
}

export default App
