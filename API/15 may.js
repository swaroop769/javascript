function swaroop()
{
  fetch("https://iplocate.io/api/lookup")
       .then((res)=>res.json())
       .then((data)=>scoop(data))
       .catch((err)=>console.log(err))
//asychronus putting the data fron front end//
//async function
//const res=await fetch("https://iplocate.io/api/lookup")
//const data=await res.json()
//scoop(data)
}
swaroop();
function scoop(a)
{
const x =document.createElement('p')
x.textContent= "Enter Your City  " + a.city;
document.getElementById('main').
appendChild(x)
}


document.addEventListener('click',swaroop)