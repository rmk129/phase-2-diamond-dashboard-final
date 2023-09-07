import React, {useState} from "react";
import { useHistory } from "react-router-dom";



function StockAddForm({setAllDiamonds, allDiamonds}) {
   const [shape, setShape] = useState("Round")
   const [color, setColor] = useState("D")
   const [clarity, setClarity] = useState("VS1")
   const [cut, setCut] = useState("Excellent")
   const [weight, setWeight] = useState("")
   const [cost, setCost] = useState("")
   const [price, setPrice] = useState("")
   const history = useHistory();

  function handleWeightChange(e){
    setWeight(e.target.value);
  } 

  function handlePriceChange(e){
    setPrice(e.target.value);
  }

  function handleCostChange(e){
    setCost(e.target.value);
  }
  
  function handleShapeChange(e){
    setShape(e.target.value)
  }

  function handleColorChange(e){
    setColor(e.target.value)
  }

  function handleClarityChange(e){
    setClarity(e.target.value)
  }

  function handleCutChange(e){
    setCut(e.target.value)
  }

  function addDiamond(newDiamond){
    setAllDiamonds([...allDiamonds, newDiamond])
  }

  function handleSubmit(event){
    event.preventDefault();
    const formData = {
        shape: shape,
        color: color,
        clarity: clarity,
        cut: cut,
        weight: weight,
        cost: cost,
        price: price,
        sell: "No"

    }

    const configObj = {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    }

    fetch('http://localhost:3000/diamonds', configObj)
    .then(res => res.json())
    .then(data => addDiamond(data))
    history.push("/stockdashboard")
    alert("Your Diamond has been added!")

  }

return (   
   <div>
        <form onSubmit={handleSubmit} >
            <h1>Add Diamonds to Stock</h1>
            <hr/>
            <label>Shape
                <select value={shape} onChange={handleShapeChange} >
                    <option value="Round">Round</option>
                    <option value="Oval">Oval</option>
                    <option value="Radiant">Radiant</option>
                    <option value="Emerald">Emerald</option>
                </select>
            </label>
            <br/>
            <label>Color
                <select value={color} onChange={handleColorChange}>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>
            </label>
            <br/>
            <label>Clarity
                <select value={clarity} onChange={handleClarityChange}>
                    <option value="VS1">VS1</option>
                    <option value="VS2">VS2</option>
                    <option value="SI1">SI1</option>
                </select>
            </label>
            <br/>
            <label>Cut
                <select value={cut} onChange={handleCutChange}>
                    <option value="Excellent">Excellent</option>
                    <option value="Very Good">Very Good</option>
                    <option value="Good">Good</option>
                </select>
            </label>
            <br/>
            <label>Carat Weight(ct)
                <input onChange={handleWeightChange} type="number" value={weight} />
            </label>
            <br/>
            <label>Cost $
                <input onChange={handleCostChange} type="number" value={cost} />
            </label>
            <br/>
            <label>Selling Price $
                <input onChange={handlePriceChange} type="number" value={price} />
            </label>
            <br/>
            <button type="submit">Add Diamond</button>
        </form>
    </div>


    )
}

export default StockAddForm;