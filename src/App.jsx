import { useState } from 'react'
import useSwitch from './useSwitch'


function App() {
  const [isOn, toggle] = useSwitch()

  return (
    <>
      <h1>React Custom Hooks</h1>
      <h3>Esercizio 1 (switch toogle)</h3>
      <p>Il valore è: {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggle}>{!isOn ? "Accendi" : "Spegni"}</button>
    </>
  )
}

export default App
