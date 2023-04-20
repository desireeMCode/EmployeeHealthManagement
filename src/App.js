import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./components/Login.js";
import ViewInsurances from "./components/ViewInsurances";
import {InsertInsurance} from './components/InsertInsurance'
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
  
          <Route exact path="/" element={<Home/>} />
          <Route  path='/Login' element={<Login />}>,</Route>
          <Route path = '/viewinsurances' element = {<ViewInsurances/>}/>
          <Route path = '/insertinsurance' element = {<InsertInsurance/>}/>


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
