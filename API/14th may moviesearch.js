function swaroop()
{
const swa= document.getElementById('swa').value 
fetch(`https://www.omdbapi.com/?apikey=7bd91a6d&s=${swa}`)
     .then((res)=>res.json())
     .then((data)=>wwe(data.Search))
     .catch((err)=>console.log(err))
}
document.getElementById('scoop').addEventListener('click',swaroop);
const x=document.getElementById('output')
function wwe(d)
{
  console.log(d)
  d.forEach((c,i) => 
  {
  const moviediv=document.createElement('div')  
  moviediv.classList.add('movie')
const y=document.createElement('img')
y.src=c.Poster;
const z=document.createElement('h1')
z.textContent=c.Title;
const u=document.createElement('p')
u.textContent=c.Year;
const v=document.createElement('a')
v.href=`https://www.imdb.com/title/${c.imdbID}`;
const w=document.createElement('p')
w.textContent=c.Type;
moviediv.append(y,z,u,v,w)
x.appendChild(moviediv)
});

}

