//password requirements
// at least 8 characters
// Upper case and lower



function checkPassword(password){
    let hasLower = 0
    let hasUpper = 0
    //let hasSpecial = 0
    for(let i = 0; i<password.length; i++) {
        //console.log(password[i])
        asciiChar = password.charCodeAt(i)
        if (asciiChar >= 65 && asciiChar <= 90){
            hasUpper += 1
        }else if(asciiChar >= 97 && asciiChar <= 122){
            hasLower += 1
        }
    }

    let ReqLen = document.querySelector('#ReqLen').style;
    let ReqUpper = document.querySelector('#ReqUpper').style;
    let ReqLower = document.querySelector('#ReqLower').style;

    if (!hasLower){
        //console.log('has no lower')
        ReqLower.display = 'block';
    }else{
        ReqLower.display = 'none'
    }
    if(!hasUpper){
        //console.log('has no upper')
        ReqUpper.display = 'block';
    }else{
        ReqUpper.display = 'none'
    }
    if(password.length < 8){
        //console.log('password is too short')
        ReqLen.display = 'block';
    }else{
        ReqLen.display = 'none'
    }
    
    if(hasUpper && hasLower && password.length >= 8){
        console.log('password is good')
    }
}

document.addEventListener('DOMContentLoaded',() => {
    console.log(document.title)
    
    document.querySelector('#password').onkeyup = () => {
        let password = document.querySelector('#password').value
        if (password != ""){
            //console.log(password)
            checkPassword(password)
        }else{
            console.log('password is blank')
        }
        
    }

})