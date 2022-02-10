function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
const email=document.querySelector(".email")
const text=document.querySelector(".text")
const error=document.querySelector(".error")
const p=document.querySelector(".msg")
email.addEventListener('submit',(e)=>{
    e.preventDefault();
    const emlval=text.value;
   if(!isValidEmail(emlval))
   {
    error.classList.add("active")
    p.classList.add("active")
   }
   else{
    error.classList.remove("active")
    p.classList.remove("active")
   }
})