import './App.css';
import ToDo from './components/ToDo'
import Pomodoro from './components/Pomodoro'
import Switch from './components/Switch'
import Visual from './components/Visual'
function App() {
  return (
    <div>
        <div className='maket'>
            <Pomodoro class='manager' hours={0} minutes={25}/>
            <ToDo text='Задачи' class='manager'/>
            <Switch class='manager'/>
            <Visual class='visual'/>
        </div>
    </div>
  );
}

export default App;
