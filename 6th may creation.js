//function swaroop()
//{
//const x = document.createElement('p');
//x.textContent="Hello world"

//document.getElementById('main').
//appendChild(x)
//}
//swaroop();
//print 3 movies
//const movies =[
  //{
//url:'',
//name:'rrr'
  //},
  //{
//url:'',
//name:'kgf'
  //},
  //{
//url:'',
//name:'salar'
  //},
//]
//function swaroop1()
//{
  //movies.forEach(function(val,i) 
//{
//const movieDiv = document.createElement("div")
//const movieimg = document.createElement("img")
//movieimg.src=val.url;
//movieimg.alt=val.name;
//movieimg.height='10px'
//const moviestitle = document.createElement("h1")
//moviestitle.textContent=val.name;
//movieDiv.append(movieimg,moviestitle)
//document.getElementById('main1').
//append(movieDiv)
//})
//}
//swaroop1();//practice


const monica=[
  {
url:'https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg',
name:'RRR'

  },
  {
url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlwzzsh_ThPXGDigUpJbTRQiaZuk75VphiWg&s',
name:'salaar'
  },
  {
url:'https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg',
name:'swaroop'
  },
]
function swaroop2()
{
monica.forEach(function(val,i)
{
const monicadiv=document.createElement('div')
const monicaimg=document.createElement('img')
monicaimg.src=val.url;
monicaimg.alt=val.name;
monicaimg.height='200'
const monicatitle=document.createElement('h1')
monicatitle.textContent=val.name;
monicadiv.append(monicaimg,monicatitle)
document.getElementById('main2').
append(monicadiv)
})
}
swaroop2()















