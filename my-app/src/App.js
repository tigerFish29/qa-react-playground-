import "./AnotherComponent";
import AnotherComponent from "./AnotherComponent";
import "./CustomerData";
import "./Car";

import './App.css';
import CustomerData from "./CustomerData";
import Car from "./Car";

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
    </div>

    
  );
}

export default App;
