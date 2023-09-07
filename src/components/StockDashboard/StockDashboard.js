import React, {useState} from "react";
import Filter from "./Filter";
import StockTable from "./Table";


function StockDashboard({allDiamonds, sellDiamonds, setSellDiamonds}) {
    const [sortBy, setSortBy] = useState("Carat Weight")
    const [filterBy, setFilterBy] = useState("All")

    const sortedDiamonds = [...allDiamonds].sort(function(a, b) {
        if (sortBy === "Carat Weight"){
            return parseFloat(a.weight) - parseFloat(b.weight);
        }
        else {
          return parseFloat(a.price) - parseFloat(b.price);
        }
     });
     
     const newAllDiamonds = sortedDiamonds.filter((diamond)=> 
            filterBy === "All" ? true : diamond.shape === filterBy)

    const newAllDiamonds2 = newAllDiamonds.filter((dia)=> dia.sell === "No")


return (
    <div>
        <h1>StockDashboard</h1>
        <hr/>
        <Filter sortBy={sortBy} setSortBy={setSortBy} filterBy={filterBy} setFilterBy={setFilterBy} />
        <hr/>
        <StockTable sellDiamonds={sellDiamonds} setSellDiamonds={setSellDiamonds} newAllDiamonds2={newAllDiamonds2} />
    </div>


    )
}

export default StockDashboard;