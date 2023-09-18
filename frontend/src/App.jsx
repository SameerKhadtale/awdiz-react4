import './App.css';
import {Routes, Route} from 'react-router-dom';
// import Counter from './components/Counter';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/Counter' element={<Counter/>}/> */}
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      {/* <h1>Hello All</h1> */}
    </div>
  );

}

export default App;
