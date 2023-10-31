import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';
function LightSwitch(props) {
  const {setThemeName, themeName} = useTheme()

  function lighSwitchHandle(value){
    value.toLowerCase() === 'day' ? setThemeName('day') : setThemeName('night')
  }
  return (
    <div className="light-switch day">
      <div 
        className="on"
        onClick={(e)=>lighSwitchHandle(e.target.innerHTML)} 
          >
            DAY</div>
      <div 
        className="off"
        onClick={(e)=>lighSwitchHandle(e.target.innerHTML)}  
          >
            NIGHT</div>
    </div>
  );
}

export default LightSwitch;