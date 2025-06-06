function fetchData()
{
  fetch("https://official-joke-api.appspot.com/random_joke")
       .then((res)=> res.json())
       .then((data)=>displayData(data))
       .catch((err)=>console.log(err))
}
fetchData();
function displayData(a)
{
  const x=document.createElement('h2')
  x.textContent=a.setup;
  const y=document.createElement('h3')
  y.textContent=a.punchline;
  document.getElementById('main').
  append(x,y)
}