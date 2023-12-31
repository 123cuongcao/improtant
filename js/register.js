function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function createId() {
    return (Math.floor(Math.random() * 9999999999999 + new Date().getMilliseconds())).toString()
}

let users = JSON.parse(localStorage.getItem("users"))||[];

/* push admin */
// let userInfor={
//     email:'zaditcuong@gmail.com',
//     password:1234,
//     username:'admin',
//     cart:[],
//     idUser:createId()
// }
// users.push(userInfor);
localStorage.setItem('users',JSON.stringify(users));



function register(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if(!isEmail(email)){
        myFunction('email không đúng định dạng')
        return;
    }
    
    if(password!=confirmPassword || password.length<4){
        myFunction('kiểm tra lại mật khẩu')
        return;
    }
    let userInfor={
        email:email,
        password:password,
        username:username,
        cart:[],
        idUser:createId(),
    }
    let checkRegister=users.find((item)=>{
        return item.email==email;
    })
    if(checkRegister){
        myFunction('email đã tồn tại')
        return;
    }
   
    users.push(userInfor);
    localStorage.setItem('users',JSON.stringify(users));
    window.location.href='../html/login.html'

}

function myFunction(text) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    x.innerHTML = text;
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  