"use client"
import { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0)
    const [subanAllah, setsubanAllah] = useState(0)

    return (
        <div>

<h1> Counter: {counter} </h1>
      <h1> Counter2: {subanAllah} </h1>
   <button className=" btn" onClick={()=> setCounter(counter + 1) } > Increase </button>
   <button className=" btn" onClick={()=> setCounter(counter - 1)} > Decrease </button>


   <button className=" btn" onClick={()=> setsubanAllah(subanAllah + 1) } > subanAllah </button>
            
        </div>
    );
};

export default Counter;