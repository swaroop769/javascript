console.log("before timer")
setTimeout(function()
{
  document.getElementById('main').textContent="hiiiiii hello"
},5000)
//for(i=0;i<=10000;i++)
//{
 // console.log("after timer")
//}

// setinterval//
let count=0;
let c = console.log("before timer")
setInterval(function()
{
  count++;
  document.getElementById('main').textContent=count;
 
},400)
//clearinterval//
let swa=0;
let d = console.log("before timer")
setInterval(function()
{
  swa++;
  document.getElementById('main').textContent=swa;
  if(swa==20)
  {
    clearInterval(d)
  }
},400)