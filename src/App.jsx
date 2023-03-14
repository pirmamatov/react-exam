import React from 'react'
import {Route,Routes} from "react-router";
import HeaderPages from './components/Header/HeaderPages';
import LogIn from './components/LogIn/Login';
import Register from './components/LogIn/Register';
// import LogRes from './components/LogIn';
import MainPage from './components/Main';
import Products from './components/Products';
import Filter from './components/Products/Filter';
import SavatchaW from './components/Savatcha/Savatcha';
import Likes from './components/SevimliDorilar';
// import Login from './components/SevimliDorilar';
// import i18n from "./components/localization/i18n"

 const App = () => {
  return (
    <Routes>
  <Route path='/' element={<MainPage />}/>
  <Route path='/products' element={<Products />}/>
  {/* <Route path='/login' element = {<LogRes/>}/> */}
  <Route path='/savatcha' element = {<SavatchaW/>}/>
  <Route path='/likes' element = {<Likes/>}/>
  <Route path='/HeaderPages' element = {<HeaderPages/>}/>
  <Route path='/filter' element = {<Filter/>}/>
  <Route path='/login' element = {<LogIn/>}/>
  <Route path='/registration' element = {<Register/>}/>

    </Routes>
  )
}

export default App
