import { useState } from "react";

const Car = () => {
    // state of the car 
    const [brand, setBrand ] = useState("");
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");
    const [year, setYear] = useState("");

    return (
        <div>
            <form>
                <label htmlFor="brand">
                   brand
                   <input
                      id="brand"
                      value={brand}

                      placeholder="brand"
                      onChange={(e) => setBrand(e.target.value)}
                   />
                </label>

                <label htmlFor="model">
                   model 

                   <input
                      id="model"
                      value={model}
                      placeholder="model"
                      onChange={(e => setModel(e.target.value))}
                   />
                </label>

                <label htmlFor="color">
                    color
                    <input
                       id="color"
                       value={color}
                       placeholder="color"
                       onChange={(e) => setColor(e.target.value)}
                    />

                </label>

                <label htmlFor="year">
                   year
                   <input 
                      id="year"
                      value={year}
                      placeholder="year"
                      onChange={(e) =>  setYear(e.target.value)}
                   />
                </label>
            </form>
        </div>
    )

}

export default Car;