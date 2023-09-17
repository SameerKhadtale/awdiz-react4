// import logo from'./logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Counter from './components/Counter';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Counter' element={<Counter/>}/>
        <Route path='/Homepage' element={<Homepage/>}/>
      </Routes>
      <h1>Hello All</h1>
    </div>
  );

}

export default App;
