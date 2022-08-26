import "./AnotherComponent";
import AnotherComponent from "./AnotherComponent";
import "./CustomerData";
import "./Car";
import "./Nav"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import CustomerData from "./CustomerData";
import Car from "./Car";
import "./Home";
import Home from "./Home";
import "./About";
import About from "./About";

import "./Shop";
import Shop from "./Shop";

import Nav from "./Nav";

function App() {
  return (
    <div className="App">
       <h1>Hello and Welcome</h1>
         <AnotherComponent />
         <CustomerData />
         <div>
            <h2>Cars</h2>
            <Car />
         </div>
         <div>
          <BrowserRouter>
            <Routes>
              <Nav />
              
                 <Route exact path="/">
                     <Home />
                 </Route>

                 <Route path="/about">
                   <About />
                 </Route>

                 <Route path="/shop">
                   <Shop />
                 </Route>
             

            </Routes>
            </BrowserRouter>
            
         </div>
    </div>

    
  );
}

export default App;
