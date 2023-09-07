import React, {useState} from "react";
import SellTable from "./SellTable";
import SellForm from "./SellCustomerForm";


function SellDashboard({allDiamonds}){

  const sellDiamonds = allDiamonds.filter((dia)=> dia.sell === "Yes")

    return (
        <div>
            <h1>Sales Portal</h1>
            <hr/>
          <SellTable sellDiamonds={sellDiamonds} />
            <hr/>
            <SellForm/>
        </div>
    
    
        )
}

export default SellDashboard;