function login(e){
    e.preventDefault()
    let users = JSON.parse(localStorage.getItem('users'))||[];
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    for(let i=0 ;i<users.length;i++){
        
        if(users[i].password==password && users[i].username==username){
            console.log('111');
            localStorage.setItem('checkLogin',JSON.stringify(users[i].idUser))
            if(users[i].password===1234 && users[i].username==='admin'){
                console.log('cào');
                window.location.href='../html/admin.html';
                return;
            }
                console.log('111');
                window.location.href='../index.html';
        }
        
    }
    myFunction('tài không khoản tồn tại')
}


function myFunction(text) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    x.innerHTML = text;
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }