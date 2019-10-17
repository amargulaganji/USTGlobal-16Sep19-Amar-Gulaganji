function errors(){
    len = document.getElementById('uname').value;
    if(len.length<7){
        let er = document.getElementById('error');
        document.getElementById('error').textContent="Invalid Uname";
        er.style.color = 'red';
        er.style.fontSize = '10px';
        er.style.marginLeft = '10px';
    }else{
        let er = document.getElementById('error');
        document.getElementById('error').textContent="";
    }
}


function showPassword() {
    var passelement = document.getElementById("pass");
    if (passelement.type === "password") {
        passelement.type = "text";
    } else {
        passelement.type = "password";
    }
  }

function count(){
    let un = document.getElementById('uname').value;
    let p = document.getElementById('pass').value;
     
    if(un.length > 7 && p.length > 7){
    document.getElementById('login').disabled = false;
}else{
    document.getElementById('login').disabled = true;
}
}
 