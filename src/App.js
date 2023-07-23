import './App.css';
// import TempLogin from "./TempLogin";
// import VerifiedLogin from './VerifiedLogin';
import Dashboard from './Authentication Folder/Dashboard';
import Auth from './Authentication Folder/Auth';
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Authentication from './Authentication';
// import Dash from './Dash';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
       <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/dash' element = {<Dashboard/>}/>
       </Routes>
      </BrowserRouter>    

    {/* <BrowserRouter>
     <Routes>
      <Route path='/' element={<Authentication/>}/>
      <Route path='/dash' element={<Dash/>}/>
     </Routes>
    </BrowserRouter> */}

    </div>
  );
}

export default App;
