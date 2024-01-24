import './App.css';
import { useState } from 'react';
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
import StyledComponents from './components/16-09/StyledComponents';
import Counterse from './components/16-09/Counterse';
import DynamicStyles from './components/20-09/DynamicStyles';
import ChildrenProp from './components/22-09/ChildrenProp';
import Register2 from './components/22-09/Register2';
import CustomHooks from './components/13-10/CustomHooks';
import CustomHooksLS from './components/13-10/CustomHooksLS';
import { ClassComponent } from './components/29-09/ClassComponent';
import PageNotFound from './components/29-09/PageNotFound';
import Products from './components/30-09/Products';
import SingleProductNew from './components/1-10/SingleProductNew';
import AddProduct from './components/04-10/AddProduct';
import YourProducts from './components/YourProducts';
import UpdateProduct from './components/UpdateProduct';

function App() {
  const[loggedIn,setIsLoggedIn]=useState(false)
  return (
    <div className="App">
      <Routes>
        <Route path = '*' element={<PageNotFound/>}/>
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
        <Route exact path='/use-memo' element={<UseMemo/>}/>
        <Route exact path='/use-callback' element={<UseCallback/>}/>
        <Route exact path='/use-reducer' element={<UseReducer/>}/>
        <Route exact path='/test-reducer' element={<TestReducer/>}/>
        <Route exct path= '/ternary' element={<Ternary isUserLoggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route exact path= '/styled-components' element= {<StyledComponents/>}/>
        <Route exact path= '/counterse' element= {<Counterse/>}/>
        <Route exact path= '/dynamic-styles' element= {<DynamicStyles/>}/>
        <Route exact path= '/children-prop' element= {<ChildrenProp/>}/>
        <Route exact path= '/register2' element= {<Register2/>}/>
        <Route exact path= '/custom-hook' element= {<CustomHooks/>}/>
        <Route exact path= '/custom-hook-ls' element= {<CustomHooksLS/>}/>
        <Route exact path= '/class-component' element= {<ClassComponent/>}/>
        <Route exact path= '/products' element= {<Products/>}/>
        <Route exact path= '/single-product/:id' element= {<SingleProductNew/>}/>
        <Route exact path= '/add-product' element= {<AddProduct/>}/>
        <Route exact path= '/your-products' element= {<YourProducts/>}/>
        <Route exact path= '/update-product' element= {<UpdateProduct/>}/>
    </Routes>
    </div>
  );

}

export default App;
