function swaroop()
{
  const inp=document.getElementById('inp').value 
  fetch(`https://api.openweathermap.org/data/2.5/find?q=${inp}&appid=5796abbde9106b7da4febfae8c44c232&units=metric`,)
        .then((res)=>res.json())
        .then((data)=>wwe (data.list[0]))
        .catch((err)=>console.log(err))
 }


document.getElementById('btn').addEventListener('click',swaroop);
const x=document.getElementById('output')
function wwe(a)
{
  console.log(a);
  const y=document.createElement('p')
  y.textContent="latitude: " + a.coord.lat +"longitude:" +a.coord.lon;
  const z = document.createElement('p')
  z.innerHTML=a.main.temp+"<sup>o</sup> c";
  const u= document.createElement('p')
  u.textContent=a.weather[0].main;
  x.append(y,z,u)
}


