import Home from './Home/Home';
import Appointment from './Appointment/Appointment';
import Articles from './Articles/Articles';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/appointment' Component={Appointment} />
      <Route path='/articles' Component={Articles} />
    </Routes>
  )
}

export default App