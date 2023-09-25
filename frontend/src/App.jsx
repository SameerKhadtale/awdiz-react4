import './App.css';
import {Routes, Route} from 'react-router-dom';
// import Counter from './components/Counter';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Effect1 from './components/13-09/Effect1';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/counter' element={<Counter/>}/>
        <Route exact path='/effect1' element={<Effect1/>}/>
        
      </Routes>
    </div>
  );

}

export default App;
