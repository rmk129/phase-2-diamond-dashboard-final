import React, {useEffect, useState} from "react";
import Home from "./Home"
import StockAddForm from "./StockAddForm"
import StockDashboard from "./StockDashboard";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";


function App() {
  const [allDiamonds, setAllDiamonds] = useState([])
  
  useEffect(()=> {
    fetch("http://localhost:3000/diamonds")
    .then((r)=> r.json())
    .then((diamondsData)=> setAllDiamonds(diamondsData) )
  }, [])

 

  return (
    <div>
      <NavBar/>
     <Switch>
          <Route path="/addform">
              <StockAddForm allD={allDiamonds} setAllD={setAllDiamonds} />
          </Route>
          <Route path="/dashboard">
              <StockDashboard allDiamonds={allDiamonds}/>
          </Route>
          <Route exact path="/">
              <Home/>
          </Route>
      </Switch> 
        
        
    </div>
  );
}

export default App;
