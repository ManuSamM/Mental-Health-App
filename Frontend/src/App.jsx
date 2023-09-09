import Home from './Home/Home';
import Appointment from './Appointment/Appointment';
import Articles from './Articles/Articles';
import { Route, Routes } from 'react-router-dom';
import AppointmentSignup from './AppointmentSignup/AppointmentSignup';
import Home2 from './Home2/Home2';
import AboutUs from './AboutUs/AboutUs';
function App() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/appointment/login' Component={Appointment} />
      <Route path='/articles' Component={Articles} />
      <Route path='/appointment/signup' Component={AppointmentSignup} />
      <Route path='/home2' Component={Home2} />
      <Route path='/aboutus' Component={AboutUs}/>
    </Routes>
  )
}

export default App