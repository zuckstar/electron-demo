import  { useEffect, useState } from 'react'

const useKeyPress = (targetKeyCode: string) => {
  const [keyPressed, setKeyPressed] = useState(false)
  const keyDownHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKeyCode) {
      setKeyPressed(true)
    }
  }
  const keyUpHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKeyCode) {
      setKeyPressed(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyUpHandler)
    return () => {
      document.removeEventListener('keydown', keyDownHandler)
      document.removeEventListener('keyup', keyUpHandler)
    }
  }, [])

  return keyPressed
}

export default useKeyPress