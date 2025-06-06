document.getElementById('main').
addEventListener('click',swaroop)
function swaroop()
{
  console.log("Hello World")

}
//mouseover//
document.getElementById('main').
addEventListener('click',display2)
function display2()
{
  alert("swaroop got hovered")
} 
//mouseover//
document.getElementById('main2').
addEventListener('mouseover',wwe)
function wwe()
{
const r1=Math.round(Math.randam()* 100);
const r2=Math.round(Math.randam()* 100);
console.log(r1,r2)
document.getElementById('main2').
style.top=r1 + "%";
document.getElementById('main2').
style.left= r2 + "%";
}

//keypress//

document.addEventListener('keypress',function(e)
{
  if(e.key=='a')
  {
Change()
 }
})
//form events//
document.getElementById('inp1').
addEventListener('input',bgchange)
function bgchange(e)
{
console.log(e.target.value)
document.body.style.background=e.target.value
}
document.getElementById('chill').
addEventListener('change',bgchange)