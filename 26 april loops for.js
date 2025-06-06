//task 3 while
let a = 1;
while(a<=7){
  let b =1,swa='';
  while(b<=a)
  {
    swa=swa+'*';
    b++;

  }
  console.log(swa);
  a++;
}
//for loop from 10 to 1//
for(let c=10;c>=1;c--)
{
  console.log(c)
}
//array with for loop we can modify specific given value using u<3 or u<4 etc//
let br=[5,4,9,8,1]
for(let u=0;u<=br.length-1;u++)
{
  console.log(br[u]);
}
//for of it will take all the given values//
let ar=[5,4,9,8,1]
for(let a of ar)
{
  console.log(a)
}
//for in it will give index//
for(let a in ar)
{
  console.log(a)
}
//for of and for in combine//
for(let a in ar)
  {
    console.log(ar[a],a)
  }
//for in with object//
let obj={
 name:"monica",
 weight:60
 }
 //for in//
 for( let h in obj)
 {
  console.log(obj[h],h)
 }







