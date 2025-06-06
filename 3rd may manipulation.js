//console.log(document)
//let z = document.getElementById('swaroop')
//console.log(z.textContent);
//z.textContent="Bye Bye DOM"

function scoop()
{
  console.log(document)
  let z= document.getElementById("swaroop")
  console.log(z.textContent)
  z.textContent="Hello DOM"
}

let value =0;
let y = document.getElementById("wwe24")
function wwe()
{
value++;
y.textContent=value
}
function decr()
{
  value--;
  y.textContent=value
}
function reset()
{
  value=0;
  y.textContent=value
}