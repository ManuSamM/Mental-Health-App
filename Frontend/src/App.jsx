import Home from './Home';
import Output from './Output';
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