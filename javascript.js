 
 const username = document.veera.username;
 const email = document.veera.email;


 const usererror = document.querySelector("#usererror")
 const mailerror = document.querySelector("#mailerror")
 
 function veeraFrom(){
   
    if(username.value == "" ||
       email.value == ""){
       alert("please fill all fileds")
       return false;
    }   
    else if(username.value.length <=2 ||
      username.value.length >=10){
 usererror.innerHTML = "*Username greterthen 2 and  lessthen 10 words*"
 return false;
}
else if(!email.value.endsWith(".com")){
mailerror.innerHTML = "*Email must ends with .com*"
return false;
}
else{
  alert("Thank For Visite !! Contect Number : +91 - 9384143446")
  return true;
}

 }


 