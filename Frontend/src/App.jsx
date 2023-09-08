import Home from './Home/Home';
import Appointment from './Appointment/Appointment';
import Articles from './Articles/Articles';
import { Route, Routes } from 'react-router-dom';
import AppointmentSignup from './AppointmentSignup/AppointmentSignup';
import Home2 from './Home2/Home2';
function App() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/appointment/login' Component={Appointment} />
      <Route path='/articles' Component={Articles} />
      <Route path='/appointment/signup' Component={AppointmentSignup} />
      <Route path='/home2' Component={Home2} />
    </Routes>
  )
}

export default App