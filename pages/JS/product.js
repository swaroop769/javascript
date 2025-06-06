const params=new URLSearchParams(window.location.search)
console.log(params.get('pid'))
const id=params.get('pid')
const products = () =>
{
  fetch(`https://dummyjson.com/products/${id}`)
       .then((res)=>res.json())
       .then((data)=>displayData(data))
       .catch((err)=>console.log(err))
}
products()
const leftdiv=document.getElementById('leftdiv');
const rightdiv=document.getElementById('rightdiv');
const displayData = (data)=>
{
const img=document.createElement('img');
img.src=data.thumbnail;
img.alt=data.title;
leftdiv.appendChild(img);
 
const w =document.createElement('h6');
w.textContent=data.title;

const y =document.createElement('p');
y.textContent=data.description;

const z =document.createElement('p');
z.textContent="price: ₹ "+data.price;
rightdiv.append(w,y,z)
}