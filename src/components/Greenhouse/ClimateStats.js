import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';
import { useEffect, useState } from 'react';

function ClimateStats() {
  const {humidity, climate} = useClimate()
  const [thermostat, setThermostat] = useState(0)
  const [humidifier, setHumidifier] = useState(0)
  useEffect(()=>{
    
  },[humidity, climate])

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {"x"}°F
      </div>
      <div className="humidity">
        Humidity {"y"}%
      </div>
    </div>
  )
}

export default ClimateStats;