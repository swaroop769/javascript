function swaroop()
{
  fetch('https://dummyjson.com/quotes/random')
       .then((res)=>res.json())
       .then((data)=>displayData(data))
       .catch((err)=>console.log(err))
        
}
setInterval(function()
{
  swaroop()
},400)
  

function displayData(b)
{
document.getElementById('main').textContent=''
 let x= document.createElement('p')
 x.textContent=b.quote;
 let y=document.createElement('p')
 y.textContent=b.author;
 document.getElementById('main').
 append(x,y)
}