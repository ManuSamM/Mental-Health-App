import Home from './Home/Home';
import Output from './Output/Output';
import Articles from './Articles/Articles';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/output' Component={Output} />
      <Route path='/articles' Component={Articles} />
    </Routes>
  )
}

export default App