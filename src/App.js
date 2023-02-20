
import './App.css';
import {Route,Routes} from "react-router-dom";
import SignIn from './components/signin/Signin';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Screen from './components/screen/Screen';
import Cart from './components/cart/Cart';

 

function App() {
  return (
    <div className="App">
     <Routes>
      
      <Route exac path="/" element={<SignIn  />}/>
      <Route exac path='/Screen' element={<Screen/>}/>
      <Route exac path='/Cart' element={<Cart/>}/>
     </Routes>
    </div>
  );
}

export default App;
