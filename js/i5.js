

function validate(){
    //Считаем значения из полей name и email в переменные x и y
    let x=document.forms["form"]["name"].value;
    let y=document.forms["form"]["surname"].value;
    let a=document.forms["form"]["password"].value;
    let b=document.forms["form"]["confirm_password"].value;
    let u=document.forms["form"]["email"].value;
    let z=document.forms["form"]["select"].value;
    let t=document.forms["form"]["average"].value;
    let d=document.forms["form"]["count"].value;
    if (x.length<=3) {
       document.getElementById("x").innerHTML="*данное поле поле должно иметь длину более 3 символов";
       return false;
    }
    if (y.length<=6 || y.length>=150){
       document.getElementById("y").innerHTML="*данное поле поле должно иметь длину не менее 6 символов и не более 150";
       return false;
    }
   
    if (a.length==0){
        document.getElementById("a").innerHTML="*данное поле обязательно для заполнения";
        return false;
     }
     
     if (typeof b !== 'number') {
        document.getElementById("b").innerHTML="данное поле принимает только числа";
        return false;
     }
     if (u.length==0){
        document.getElementById("u").innerHTML="*данное поле обязательно для заполнения";
        return false;
     }
     if (typeof t !== 'number') {
        document.getElementById("t").innerHTML="данное поле принимает только числа";
        return false;
     }
     if (typeof d !== 'number') {
        document.getElementById("d").innerHTML="данное поле принимает только числа";
        return false;
     }
   
    return true;
 }
 