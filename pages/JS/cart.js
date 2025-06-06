const cartitems=JSON.parse(localStorage.getItem
  ('cartitems'))??[];
  function displayData()
{
  cartitems.forEach(function(v,i)
{
  const productdiv=document.createElement('div')
  productdiv.classList.add("d-flex","justify-space-between","border","border-2","border-black","cartitem")
const img=document.createElement('img');
img.src=v.thumbnail;
img.alt=v.title;
img.height="50"
 
const w =document.createElement('h6');
w.textContent=v.title;



const z =document.createElement('p');
z.textContent="price: ₹ "+v.price;
const deletebutton=document.createElement('button')
deletebutton.textContent="X"
productdiv.append(img,w,z,deletebutton)
document.getElementById('main').
appendChild(productdiv)
})
}
displayData()