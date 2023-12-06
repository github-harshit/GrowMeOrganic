

import './App.css'; 
import Form from './Pages/Form';
import {Routes, Route} from "react-router-dom"; 
import Home from './Pages/Home';

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element= {<Form/>}/>
      <Route path='/home' element= {<Home/>}/>
     </Routes>
     
    </>
  )
}

export default App
