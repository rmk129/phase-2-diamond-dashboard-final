import React, {useState} from "react";
import Filter from "./Filter";
import DenseTable from "./Table";


function StockDashboard({allDState}) {
    const [sortBy, setSortBy] = useState("Carat Weight")
    const [filterBy, setFilterBy] = useState("All")

    const sortedDiamonds = [...allDState].sort(function(a, b) {
        if (sortBy === "Carat Weight"){
            return parseFloat(a.weight) - parseFloat(b.weight);
        }
        else {
          return parseFloat(a.price) - parseFloat(b.price);
        }
     });
     
     const newAllDiamonds = sortedDiamonds.filter((diamond)=> 
            filterBy === "All" ? true : diamond.shape === filterBy)
  console.log(newAllDiamonds)

return (
    <div>
        <h1>StockDashboard</h1>
        <hr/>
        <Filter sortBy={sortBy} setSortBy={setSortBy} filterBy={filterBy} setFilterBy={setFilterBy} />
        <hr/>
        <DenseTable newAllDiamonds={newAllDiamonds} />
    </div>


    )
}

export default StockDashboard;