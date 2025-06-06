let main=[1,2,3,4]
const x=main.map(function(u,)
{
return u*2;
})
console.log(x)

//foreach, map, filter examples//

let main1=[10,20,60,70,80]
const y=main1.forEach(function(v)
{
if(v>=50)
{
return v;
}
})
console.log(y)//output is undefined forEach is not print return//

//map will return all values//
let main2=[10,20,40,70,75]
const z = main2.map(function(v)
{
if(v>=50)
{
  return v;
}
})
console.log(z)
//filter will return specific values//
let main3=[10,20,55,70,90]
const a = main3.filter(function(i)
{
if(i>=50)
{
return i;
}
})
console.log(a)
//some//
let main4=[2,4,5,9]
const b = main4.some(function(e)
{
return e%2==0
})
console.log(b)
//every//
let main5 = [10,20,23,44,55]
const c=main5.every(function(f)
{
return f%2==0
})
console.log(c)