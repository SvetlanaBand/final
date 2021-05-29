function validate(){
    //Считаем значения из полей name и email в переменные x и y
    let x=document.forms["form"]["name"].value;
    let y=document.forms["form"]["surname"].value;
    let a=document.forms["form"]["password"].value;
    let b=document.forms["form"]["confirm_password"].value;
    let u=document.forms["form"]["email"].value;
   
    if (x.length<=6) {
       document.getElementById("x").innerHTML="*данное поле поле должно иметь длину боллее 6 символов";
       return false;
    }
    if (y.length<=6){
       document.getElementById("y").innerHTML="*данное поле поле должно иметь длину боллее 6 символов";
       return false;
    }
   
    if (a.length==0){
        document.getElementById("a").innerHTML="*данное поле обязательно для заполнения";
        return false;
     }
     
     if (b.length==0 || b!=a) {
        document.getElementById("b").innerHTML="пароли не совпадают";
        return false;
     }
     if (u.length==0){
        document.getElementById("u").innerHTML="*данное поле обязательно для заполнения";
        return false;
     }

     
    //Проверим содержит ли значение введенное в поле email символы @ и .
    let at=u.indexOf("@");
    let dot=u.indexOf(".");
    //Если поле не содержит эти символы знач email введен не верно
    if (at<1 || dot <1){
       document.getElementById("u").innerHTML="*email введен не верно";
       return false;
    }
   
    return true;
 }
 