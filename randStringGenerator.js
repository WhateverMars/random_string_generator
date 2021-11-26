
// this fn generates a character which can only be a lower case letter
function generatedChar(){
    return Math.floor(Math.random() * 26) + 97;
} 
    
// this fn generates a string of given length using the above char generator
function generatedString(length){

    let generatedString = [];
    let i = 0;
    for(i = 0; i<length; i++){

        let new_char = generatedChar();
        
        generatedString.push(String.fromCharCode(new_char));
        
    }

    // this converts the array into a string
    let word = generatedString.join('');

    return word
}


document.addEventListener('DOMContentLoaded', () => {

    document.onkeyup = () => {
        let stringLength = document.querySelector('#stringLength').value
        document.querySelector('#result').innerHTML = generatedString(stringLength)
    }
})