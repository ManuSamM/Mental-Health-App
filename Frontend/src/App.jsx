import Home from './Home/Home';
import Output from './Output/Output';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/output' Component={Output} />
    </Routes>
  )
}

export default App