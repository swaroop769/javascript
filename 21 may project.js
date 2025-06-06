//async function
async function products(category,id)
{
    const res=await fetch(`https://dummyjson.com/products/category/${category}?limit=4`)
    const data= await res.json()
    console.log(data.products);
    displayData(data.products,id);
}


const displayData=(data,id)=>
{
  data.forEach(function(v,b)
{


  const u =document.createElement('div');
  u.classList.add('product')
  const o =document.createElement('img');
  o.src=v.thumbnail
  o.alt=v.title
  
  const w =document.createElement('h6');
  w.textContent=v.title;
  const productlink=document.createElement('a')
  productlink.href=`./pages/product.html?pid=${v.id}`
  const y =document.createElement('p');
  y.textContent=v.price;
  
  const addcartbutton=document.createElement('button')
  addcartbutton.textContent="Add Cart";
  addcartbutton.classList.add('btn',"btn-success","p-2")
  addcartbutton.addEventListener('click',function()
{
  addToCart(v)
})
 productlink.appendChild(w)
  u.append(o,productlink,y,addcartbutton);
  document.getElementById(id). 
  append(u)
  })
}
products('beauty','tobeauty')
products('smartphones','tosmartphone')
products('groceries','toGroceries')


//promises//
//function swaroop(category,id)
//{
  //fetch(`https://dummyjson.com/products/category/${category}?limit=4`)
       //.then((res)=>res.json())
       //.then((data)=>console.log(data))
       //.then((data)=>displayData(data.products,id))
       //.catch((err)=>console.log(err))
       
//}

//const displayData=(function(data,id)
//{
  //const u =document.createElement('div')
  //const v =document.createElement('img')
  //const w =document.createElement('h1')
  //const y =document.createElement('p')
  //u.append(v,w,y);
  //document.getElementById('id'). 
  //appendChild(u)
  
//})
//swaroop('beauty','tobeauty')
//swaroop('smartphone','tosmartphones')