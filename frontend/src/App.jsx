import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Effect1 from './components/13-09/Effect1';
import Effect2 from './components/13-09/Effect2';
import Effect3 from './components/15-09/Effect3';
import Effect4 from './components/15-09/Effect4';
import Params from './components/15-09/Params';
import SingleProduct from './components/15-09/SingleProduct'
import UseMemo from './components/6-10/UseMemo';
import UseCallback from './components/7-10/UseCallback';
import Mapping from './components/16-09/Mapping';
import UseReducer from './components/8-10/UseReducer';
import TestReducer from './components/8-10/TestReducer';
import Ternary from './components/16-09/Ternary';

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
        <Route exact path='/effect2' element={<Effect2/>}/>
        <Route exact path='/effect3' element={<Effect3/>}/>
        <Route exact path='/effect4' element={<Effect4/>}/>
        <Route exact path='/params' element={<Params/>}/>
        <Route exact path='/singleProoduct/id:' element={<SingleProduct/>}/>
        <Route exact path='/mapping' element={<Mapping names={["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Saturday"]}/>}/>
        <Route exact path='use-memo' element={<UseMemo/>}/>
        <Route exact path='use-callback' element={<UseCallback/>}/>
        <Route exact path='use-reducer' element={<UseReducer/>}/>
        <Route exact path='test-reducer' element={<TestReducer/>}/>
        <Route exct path= 'ternary' element={<Ternary isUserLoggedIn={true}/>}/>
      </Routes>
    </div>
  );

}

export default App;
