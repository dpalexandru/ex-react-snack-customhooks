import { useEffect, useState } from "react"

const useCustomPointer = (component) => {
  const [position, setPosizione] = useState({ x: 0, y: 0 })


  useEffect(() => {
    const hedleMouseMovie = event => {
      setPosizione({ x: event.clientX, y: event.clientY })
    }
    document.addEventListener("mousemove", hedleMouseMovie)
    return () => document.removeEventListener("mousemove", hedleMouseMovie)
  }, [])
  return (
    <div style={{
      position: "fixed",
      top: position.y,
      left: position.x,
      transform: "translate(-50%,-50%)",
      cursor: "none"

    }}>
      {
        component
      }
    </div>
  )
}



export default useCustomPointer