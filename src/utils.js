function changeBodyColor(){
    const body = document.querySelector('body');
    const colors = [33, 100, 150];
    body.style.background = `#fffeee`
    return colors
}

function createHex(num, name){
    const inputs = document.querySelectorAll('input');
    const body = document.querySelector('body');
    const h2 = document.querySelector('h2');
    const inputValues = [];
    inputs.forEach(item => inputValues.push(item.value));
    const hexString = '#' + inputValues.map(item => convertToHex(item)).join('')
    h2.innerText = hexString
    body.style.background = hexString
    return hexString 
}

function convertToHex(num){
    const int = parseInt(num, 10)
    const hexSegment = int.toString(16).length < 2? '0'+ int.toString(16):int.toString(16);
    return hexSegment
}

export { changeBodyColor, createHex }