import { useState } from 'react'
import useSwitch from './useSwitch'
import useDate from './useDate'



function App() {
  const [isOn, toggle] = useSwitch()
  const [currentDate] = useDate()

  return (
    <>
      <h1>React Custom Hooks</h1>
      <h3>Esercizio 1 (switch toogle)</h3>
      <p>Il valore è: {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggle}>{!isOn ? "Accendi" : "Spegni"}</button>


      <h3>Esercizio 2: Data e ora corrente</h3>
      <p>{currentDate.toLocaleString()}</p>

    </>
  )
}

export default App
