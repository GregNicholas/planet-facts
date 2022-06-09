import { useEffect, useState } from "react"

export const useWindowWidth = () => {
  const windowInnerSize = window.innerWidth
  const [windowWidth, setWindowWidth] = useState(windowInnerSize)

  useEffect(() => {
    const changeWindowWidth = () => {
      setWindowWidth([window.innerWidth])
    }
    window.addEventListener("resize", changeWindowWidth)

    return () => window.removeEventListener("resize", changeWindowWidth)
  }, [])

  return windowWidth;
}