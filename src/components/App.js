import React, {useEffect, useState} from "react";
import Home from "./Home"
import StockAddForm from "./StockAddForm"
import StockDashboard from "./StockDashboard/StockDashboard";
import SellDashboard from "./SellDiamonds/SellDashboard";
import NavBar2 from "./NavBar2";
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [allDiamonds, setAllDiamonds] = useState([])
  const [sellDiamonds, setSellDiamonds] = useState([])
  
  useEffect(()=> {
    fetch("http://localhost:3000/diamonds")
    .then((r)=> r.json())
    .then((diamondsData)=> setAllDiamonds(diamondsData) )
  }, [])

  useEffect(()=> {
    fetch("http://localhost:3000/diamondsToSell")
    .then((r)=> r.json())
    .then((diamondsData)=> setSellDiamonds(diamondsData) )
  }, [])


 

  return (
    <div>
      <NavBar2/>
     <Switch>
          <Route path="/addform">
              <StockAddForm allDiamonds={allDiamonds} setAllDiamonds={setAllDiamonds} />
          </Route>
          <Route path="/stockdashboard">
              <StockDashboard sellDiamonds={sellDiamonds} setSellDiamonds={setSellDiamonds} allDiamonds={allDiamonds}/>
          </Route>
          <Route path="/selldashboard">
              <SellDashboard  allDiamonds={allDiamonds}  />
          </Route>
          <Route exact path="/">
              <Home/>
          </Route>
      </Switch> 
        
        
    </div>
  );
}

export default App;
