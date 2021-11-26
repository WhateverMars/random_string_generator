let min = 0;
let max = 10;
let length = 10;
let i = 0;
    
let generatedNumber = Math.floor(Math.random() * max) + min;
    
function generatedChar(){
    return Math.floor(Math.random() * 26) + 97;
} 
    
let generatedString = [];
    
for(i =0; i<length; i++){
    let new_char = generatedChar();
        
    generatedString.push(String.fromCharCode(new_char));
        
}

let word = generatedString.join('');
    
    
console.log(word);