
let email = document.getElementById("Email");
let password = document.getElementById("Password");
let sign = document.getElementById("sign");


  

 // function validate(){


 /*
    var em=document.forms["form"]["email"].value;
    var pass=document.forms["form"]["password"].value;
    console.log (em)
    let raw = localStorage.getItem('admin');
    let person = JSON.parse(raw);
    sign.onclick = function() {
        if ((em == person.email) && (pass == person.password)) {
            
                window.alert("logging");
               
            }
            else
                window.alert("Вы не зарегистрированы в системе!");
      }*/
 
//}



let movies = [];
const addMovie = (ev)=>{
    ev.preventDefault();  
    let movie = {
        email: document.getElementById('Email').value,
        password: document.getElementById('Password').value
    }
    movies.push(movie);
    document.forms[0].reset(); 
    let raw = localStorage.getItem('admin');
    let person = JSON.parse(raw);
    if ((movie.email == person.email) && (movie.password == person.password)) {
        window.alert("Вы являетесь администратором");
        document.location.href = './index4.html'
        
    }
    else
        window.alert("Вы не зарегистрированы в системе!");
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('sign').addEventListener('click', addMovie);
});