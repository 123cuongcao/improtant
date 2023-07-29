function login(e){
    e.preventDefault()
    let users = JSON.parse(localStorage.getItem('users'))||[];
   
   
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    for(let i=0 ;i<users.length;i++){
        // console.log(users[i].password);
        // console.log(password);
        console.log(typeof users[i].password);
        console.log(typeof users[i].username);
        if(users[i].password==password && users[i].username==username){
            localStorage.setItem('checkLogin',JSON.stringify(users[i].idUser))
            if(users[i].password===1234 && users[i].username==='admin'){
                console.log('cào');
                window.location.href='../html/admin.html';
                return;
            }
                window.location.href='../index.html';
        }
        else{
            return
        }
    }
}
