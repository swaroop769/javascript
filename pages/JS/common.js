const count=document.getElementById('count');
const cartitems=JSON.parse(localStorage.getItem
  ('cartitems'))??[];
  count.textContent=cartitems.length
function addToCart(item)
{
  alert("added sucessfully")
  console.log(item)
  cartitems.push(item);
  count.textContent=cartitems.length
  localStorage.setItem('cartitems',JSON.stringify(cartitems))
}