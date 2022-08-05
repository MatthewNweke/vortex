function getPasswordStrength(password){
  let s = 0;
  if(password.length > 6){
    s++;
  }
  if(password.length > 10){
    s++;
  }
  if(/[A-Z]/.test(password)){
    s++;
  }
  if(/[0-9]/.test(password)){
    s++;
  }
  if(/[^A-Za-z0-9]/.test(password)){
    s++;
  }
  return s;
}
document.querySelector("#id_password1").addEventListener("focus",function(){
  document.querySelector(".pw-strength").style.display = "block";
});
document.querySelector("#id_password1").addEventListener("keyup",function(e){
  let password = e.target.value;
  let strength = getPasswordStrength(password);
  let passwordStrengthSpans = document.querySelectorAll(".pw-strength span");
  strength = Math.max(strength,1);
  passwordStrengthSpans[1].style.width = strength*20 + "%";
  if(strength < 2){
    // passwordStrengthSpans[1].innerText = "Weak";
    passwordStrengthSpans[1].style.color = "#d13636";
    passwordStrengthSpans[0].style.background = "#27AE60";
    passwordStrengthSpans[0].style.width = "25%";
  } else if(strength >= 2 && strength <= 4){
    // passwordStrengthSpans[1].innerText = "Medium";
    passwordStrengthSpans[1].style.color = "#e6da44";
    passwordStrengthSpans[0].style.background = "#27AE60";
    passwordStrengthSpans[0].style.width = "50%";
  } else {
    // passwordStrengthSpans[1].innerText = "Strong";
    passwordStrengthSpans[1].style.color = "#d86701";
    passwordStrengthSpans[0].style.background = "#27AE60";
    passwordStrengthSpans[0].style.width = "100%";
  }
});



 