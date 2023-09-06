import React from "react";



function Home() {
    

 return (   
    <div>
        <h1>Welcome To Your Diamond Inventory</h1>
        <h2>Here, you will be able to view your entire diamond inventory and filter it based on shape, carat weight
            and selling price
            </h2>
            <hr/>
            <img
            src="https://www.pngmart.com/files/1/Transparent-Loose-Diamonds-PNG.png"
            alt="Diamonds"
            width="1000px"
            length="500px"
            className="center"
            />
        <h2>As well, you can add newly purchased diamonds to your inventory by clicking on the Add Stock and
            completing the form. Once submitted, you will be redirected to the stock dashboard to view your diamonds.
        </h2>
    </div>

 )
}

export default Home;