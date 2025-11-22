import React, { useState } from 'react'

const useSwitch = (InitialValue = false) => {

  const [isOn, setIsOn] = useState(InitialValue)

  function toggle() {
    if (isOn) {
      setIsOn(false)
    } else {
      setIsOn(true)
    }
  }
  return [isOn, toggle]
}

export default useSwitch