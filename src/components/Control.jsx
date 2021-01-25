import {useState} from 'react'
import {createHex} from '../utils'

export default function Control({color, initialValue}){
    const [colorValue, changeColorValue] = useState(255)
    
    function handleChange(e){
        changeColorValue(e.target.value)
        const hexString = createHex(e.target.value, e.target.name)
    }
    
    return (
        <div className="controls">
            <label htmlFor="">{color}</label>
            <input onChange={handleChange} type="range" name={color} id="" min="0" max="255"/>
            <output>{colorValue}</output>
        </div>
    )
}