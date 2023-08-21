
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import Player from './pages/Player';
import Tvshows from './pages/Tvshows';
import Netflix from './pages/Netflix';
import Moviepage from './pages/Moviepage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element ={<Loginpage/>}></Route>
        <Route exact path='/signup' element ={<Signuppage/>}></Route>
        <Route exact path='/player' element ={<Player/>}></Route>
        <Route exact path='/tv' element ={<Tvshows/>}></Route>
        <Route exact path='/' element ={<Netflix/>}></Route>
        <Route exact path='/movie' element ={<Moviepage/>}></Route>
      </Routes>
    
    </BrowserRouter>
    
    </div>
  );
}

export default App;
