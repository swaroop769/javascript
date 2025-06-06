function fetchData()
{
  fetch("https://randomuser.me/api")
      .then((res)=>res.json())
      .then((data)=>displayData(data))
      .catch((err)=>console.log(err))
}
fetchData()

setInterval(function()
{
  fetchData()
},8000);


function displayData(a)
{
  document.getElementById('main').textContent=''
  let x=document.createElement('img')
  x.src=a.results[0].picture.large;
  //x.alt=a.thumbnail;
  
  let y=document.createElement('h2')
  y.textContent=a.results[0].name.first;
 
  let z=document.createElement('p')
  z.textContent=a.results[0].phone;

  let u=document.createElement('p')
  u.textContent=a.results[0].location.city;
  document.getElementById('main').
  append(x,y,z,u)
}