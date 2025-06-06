//Function return//
function main(a,b)
{
  return a+b;
  
}
let x=main(10,20)
console.log(x)


//Function Expression//
const swa=function(b,c)
{
  return b+c;
}

let y=swa(10,20);
console.log(y)

//function expression example 2//
function display()
{
  console.log("hi hello world")
}
console.log(display)
display()

//funtion expression ex-3//
const moni=function()
{
  console.log("hi world swaroop")
}
console.log(moni)
moni()
//arrow function//
let w=(u,v)=>
{
  return u+v
}
console.log(w)



//function expression 1st method//
function wwe(b)
{
  return b.length;
}
console.log(wwe("swaroop"))//printing swaroop//
//funtion expression  2nd method//
const waste=function(c)
{
  return c.length;
}
console.log(waste("monica"))

//function arrow//
const m=(w)=>
{
  return w.length;
}
console.log(m("prajna"))

//call back function and higher order function//
function sco()
{
  console.log("diz is swaroop")
}

function scoop(k)
{
  k()
}
scoop(sco)
//another axample of call back function//
function sco1(a,b)
{
  console.log("diz is swaroop and")
}
function scoop2(k)
{
  k(10,20)
}
scoop2(sco1)


//closures function imaportant//

function rani()
{
  let msg="bye bye"

function letter()
{
  console.log(msg)
}
return letter;
}
let p= rani()
console.log(p)
p()
