import logo from './logo.svg';
import './App.css';
import ControlBox from './components/ControlBox';
import {changeBodyColor} from './utils'
import {useEffect} from 'react'

function App() {
    useEffect(()=>{
        const body = document.querySelector('body');
        const inputs = [...document.querySelectorAll('input')]
        const outputs = [...document.querySelectorAll('output')]
        inputs[0].value = '2'
        inputs[1].value = '105'
        inputs[2].value = '164'
        outputs[0].innerText = inputs[0].value
        outputs[1].innerText = inputs[1].value
        outputs[2].innerText = inputs[2].value

        const h2 = document.querySelector('h2');
        h2.innerText = '#0269a4'

    })


    return (
        <ControlBox />
    )
}

export default App;
