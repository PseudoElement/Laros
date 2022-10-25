import { useState } from 'react'

const useHover = () => {
  const [isHover, setIsHover] = useState(false)

  const onMouseEnter = () => {
    setIsHover(true)
  }

  const onMouseLeave = () => {
    setIsHover(false)
  }

  return { isHover, onMouseEnter, onMouseLeave, setIsHover }
}

export default useHover
