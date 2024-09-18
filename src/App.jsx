import { StrictMode } from 'react';
import ReactDom from "react-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Route and our components 
import {Route, Routes} from "react-router-dom"
import Currencies from './pages/Currencies';
import MainPage from './pages/MainPage';
import Price from './pages/Price';
import Nav from './components/Nav';

function App() {
// we will use the route component, path attribute, and element attribute to specify each route.
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path= "/" element = {<MainPage/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/price" element ={<Price/>}/>
        <Route path="/price/:symbol" element={<Price/>}/>
      </Routes>
    </div>
  );
}

export default App
