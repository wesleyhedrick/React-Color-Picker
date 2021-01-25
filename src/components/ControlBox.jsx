import {useState} from 'react'
import Control from "./Control";


export default function ControlBox(){
    const colorNames = ['R','G','B'];
    const initialColor = [2, 105, 164];
    
    return (
        <div className="container">
           <h2>#0269a4</h2>
           {colorNames.map((color, idx) => <Control key={idx} color={colorNames[idx]}/> )}
        </div>
    )
}