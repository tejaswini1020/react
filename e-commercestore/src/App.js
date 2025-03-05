import React,{useState} from 'react';
import { BrowserRouter as Router , Routes , Route , Navigate} from 'react-router-dom';
import Login from "./login";
import Product from "./product";
import "./style.css";

function App(){
const[isLoggedIn , setIsLoggedIn]=useState(false);

return(
<Router>
  <Routes>
    <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
    <Route path="/product" element={isLoggedIn  ? <Product/> : <Navigate to="/"/>}/>
  </Routes>
</Router>
);
}
export default App;