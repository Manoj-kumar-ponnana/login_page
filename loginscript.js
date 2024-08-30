function eyeclick(){
    if(document.getElementById("eyeBlind").classList.value==="d-block"){
        document.getElementById("eye").classList.add("d-block");
        document.getElementById("eyeBlind").classList.add("d-none");
        document.getElementById("eye").classList.remove("d-none");
        document.getElementById("eyeBlind").classList.remove("d-block");
        document.getElementById('pass').type='text'
    }
    else{
        document.getElementById("eye").classList.add("d-none");
        document.getElementById("eyeBlind").classList.add("d-block");
        document.getElementById("eye").classList.remove("d-block");
        document.getElementById("eyeBlind").classList.remove("d-none");
        document.getElementById('pass').type='password'
    }
}
function check(){
    x=document.getElementById('user_id').value
    y=document.getElementById('pass').value
    res=document.getElementById('res')
    if(x=='manoj'&&y=='2002'){
        // res.innerHTML='login successful'
        alert('Logged In Successfully !!')
    }
    else{
        res.innerHTML='invalid credentials !!'
    }
}