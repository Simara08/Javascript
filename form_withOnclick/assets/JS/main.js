let btn=document.querySelector(".bot")
btn.onclick = function(){
    let named = document.querySelector(".name").value;
    let surname = document.querySelector(".surname").value;
    let email = document.querySelector(".email").value;
    let age = parseInt(document.querySelector(".age").value);
    let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let namevalid = false;
    let surnamevalid = false;
    let emailvalid = false;
    let agevalid = false;
    let valid = false;
    if(named !== "" && named !== " " && named[0] === named[0].toUpperCase() && named.length > 3){
        namevalid = true;
    }
    else{
        alert("Name is not correct");
    }
    if(surname !== "" && surname !== " " && surname[0] === surname[0].toUpperCase() && surname.length > 3){
        surnamevalid = true;
    }
    else{
        alert("Surname is not correct");
    }
    for (const element of email) {
        if(email !== "" && email ===regex){
            emailvalid = true;
        }
        else{
            alert("Email is not correct");
        }
    }
        
    if(age > 0){
        agevalid = true;
    }
    
    if (namevalid && surnamevalid && emailvalid && agevalid) {
        valid = true;
    }
    if (valid) {
        document.getElementById("pname").innerHTML += "<span style='color:rgb(148, 148, 148)'> " + named + "</span>";
        document.getElementById("psurname").innerHTML += "<span style='color:rgb(148, 148, 148)'> " + surname + "</span>";
        document.getElementById("pemail").innerHTML += "<span style='color:rgb(148, 148, 148)'> " + email + "</span>";
        document.getElementById("page").innerHTML += "<span style='color:rgb(148, 148, 148)'> " + age + "</span>";
        document.getElementById("table").style.display = "none";
        document.getElementById("result").style.display = "block";
    }  
    
};