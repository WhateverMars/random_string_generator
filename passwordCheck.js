// password requirements
// at least 8 characters
// Upper case and lower

function checkPassword(password){
    let hasLower = 0
    let hasUpper = 0

    for(let i = 0; i < password.length; i++) {

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
        ReqLower.display = 'block';
    }else{
        ReqLower.display = 'none'
    }

    if(!hasUpper){
        ReqUpper.display = 'block';
    }else{
        ReqUpper.display = 'none'
    }

    if(password.length < 8){
        ReqLen.display = 'block';
    }else{
        ReqLen.display = 'none'
    }
    
    if(hasUpper && hasLower && password.length >= 8){

        console.log('password is good')
        return 1
    }else{
        return 0
    }
}

document.addEventListener('DOMContentLoaded',() => {

    console.log(document.title)
    document.querySelector('#registerBtn').disabled = 'true'
    
    document.querySelector('#password').onkeyup = () => {

        let password = document.querySelector('#password').value
        checkPassword(password)

    }

    document.querySelector('#confirmation').onkeyup = () => {
        if(document.querySelector('#username') != '' && checkPassword(document.querySelector('#password').value) && document.querySelector('#confirmation').value == document.querySelector('#password').value){
            document.querySelector('#registerBtn').disabled = false
            
            console.log('ready to submit')
        }

    }

})