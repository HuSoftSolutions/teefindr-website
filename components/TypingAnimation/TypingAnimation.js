import React, { useState, useEffect } from 'react'

const Typewriter = ({ text, style }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setCurrentText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }
    }, 100)

    return () => clearInterval(intervalId)
  }, [text, currentIndex])

  useEffect(() => {
    const resetIntervalId = setInterval(() => {
      setCurrentText('')
      setCurrentIndex(0)
    }, 8000)

    return () => clearInterval(resetIntervalId)
  }, [])

  return <div className={style} style={{height: 50}}>{currentText}</div>
}

export default Typewriter
