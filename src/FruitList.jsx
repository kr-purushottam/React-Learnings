import { useState } from "react";

function FruitList() {
    const[fruits, setFruits] = useState(["Apple", "Banana", "Oranges"])
    const[typedFruit, setTypedFruit] = useState("");

    function addFruitHandler() {
        const fruitToAdd = typedFruit.trim();

        if(fruitToAdd === "") {
            alert("Invalid fruit name");
            setTypedFruit("")
            return;
        }
        //for case sensitive
        // if(fruits.includes(fruitToAdd)) {
        //     alert("fruit already Incuded in the list");
        //     setTypedFruit("");
        //     return;
        // }

        //for case insensitive
        const res = fruits.some(fruit => fruit.toLowerCase() === fruitToAdd.toLowerCase());
        
        if(res) {
            alert("fruit already Incuded in the list");
            setTypedFruit("");
            return
        }
    
        setFruits([...fruits, fruitToAdd]);
        setTypedFruit("");
    }

    function clearFruitHandler() {
        setFruits([]);
        setTypedFruit("");
    }



    return(
        <div>
            <input 
            type="text" 
            placeholder="Type Fruit Name : " 
            value={typedFruit} 
            onChange={(event) => setTypedFruit(event.target.value)}
            />

            <button onClick={addFruitHandler}>Add Fruit</button>
            <button onClick={clearFruitHandler}>Clear</button>

            <h2>List of Fruits: </h2>

            <ul>
                {fruits.map((fruit, index) => (<li key={index}>{fruit}</li>))}
            </ul>
        </div>
    );
}

export default FruitList