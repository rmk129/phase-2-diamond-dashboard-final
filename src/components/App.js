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
  
  function updateDiamonds(diamondToUpdate){
    const updatedDiamonds = allDiamonds.map((dia) => {
      if (dia.id === diamondToUpdate.id){
          return diamondToUpdate
      }
    else {
      return dia
    }
  })
  
  setAllDiamonds(updatedDiamonds)
  } 
  
  useEffect(()=> {
    fetch("http://localhost:3000/diamonds")
    .then((r)=> r.json())
    .then((diamondsData)=> setAllDiamonds(diamondsData) )
  }, [])


 

  return (
    <div>
      <NavBar2/>
     <Switch>
          <Route path="/addform">
              <StockAddForm allDiamonds={allDiamonds} setAllDiamonds={setAllDiamonds} />
          </Route>
          <Route path="/stockdashboard">
              <StockDashboard updateDiamonds={updateDiamonds}   allDiamonds={allDiamonds}/>
          </Route>
          <Route path="/selldashboard">
              <SellDashboard updateDiamonds={updateDiamonds}  allDiamonds={allDiamonds}  />
          </Route>
          <Route exact path="/">
              <Home/>
          </Route>
      </Switch> 
        
        
    </div>
  );
}

export default App;
