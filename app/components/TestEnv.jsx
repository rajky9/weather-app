import React from 'react'
import { getWeather } from '../data/weather'

const TestEnv = async () => {
  const data = await getWeather("Bratislava")
  console.log(data);
  return (
    <div>

    </div>
  )
}

export default TestEnv