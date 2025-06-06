//length//
let arr=[1,2,3,4,5];
console.log(arr[1]+arr[3])
//length//
let arr1=[10,20,30,40,50,60,70];
console.log(arr1.length)
arr1[10]=100
console.log(arr1.length)
//push//
let arr2=[10,20,30,40];
arr2.push(50,60,70)
console.log(arr2)
//pop//
let arr3=[20,30,40,50];
arr3.pop()
console.log(arr3)
//unshift//
let arr4=[10,20,30,40];
arr4.unshift(1,2,3)
console.log(arr4)
//shift//
let arr5=[20,30,40,500];
arr5.shift()
console.log(arr5)
//splice//
let arr6=[10,20,30,40,50,60,70,80]
arr6.splice(4)
console.log(arr6)

let arr7=[10,20,30,40,50,60,70,80];
arr7.splice(4,2)
console.log(arr7)

let arr8=[10,20,30,40,50,60,70,80];
arr8.splice(4,2,55,65)
console.log(arr8)

//reverse//
let arr9=[10,20,30,40,50,60,70];
arr9.reverse()
console.log(arr9)

//index and last of index//
//forEach//
let arr10=[10,20,30,40,50];
arr10.forEach(function(a,b)
{
console.log(a,b)
})
//
let arr11=["swaroop", "monica"];
arr11.forEach(function(c,d)
{
console.log(c.charAt(0))
})
//
let arr12="swaroop chennereddy",str='';
arr12.split(' ').forEach(function(e,f)
{
str=str+e.charAt(0)
})
console.log(str)
//
let arr13=[10,20,30,40];
let sum=0;
arr13.forEach(function(g,h)
{
sum=sum+g;
})
console.log(sum)
//
let arr14=[[10,20],[20,40]]
arr14.forEach(function(i,j)
{
  console.log(i)
  sum=0;
  i.forEach(function(k)
{
sum=sum+k;
})
console.log(sum)
})
//map//
let arr15=[1,2,3,4,5];
let x=arr15.map(function(l)
{
return l*2;
})
console.log(x)
//map it will print all the values//
let arr16=[10,20,30,40,50,60,70];
let y = arr16.map(function(m)
{
if(m>50)
{
  return m;
}
})
console.log(y)
//fileter above 50 only it will print//
let arr17=[10,20,30,40,50,60,70,80];
let z=arr17.filter(function(n)
{
if(n>50)
{
  return n;
}
})
console.log(z)

//some//
let arr18=[2,4,10,13,15];
let u=arr18.some(function(p)
{
return p % 2 == 0;
})
console.log(u)
//every//
let arr19=[2,4,6,7,9,10];
let v=arr19.every(function(q)
{
return q % 2==0;
})
console.log(v)
//sort//
let arr20=[20,10,30,100,50,60,70,150];
arr20.sort(function(r,s)
{
return r-s;
})
console.log(arr20)
//reduce//
let arr21=[1,20,30,];
let a=arr21.reduce(function(pre,cur)
{
  return pre+cur;
})
console.log(a)
//reduce//
let arr22=[[1,2,3],[4,5,6],[7,8,10],[12,13,14]];
let b=arr22.reduce(function(x,y)
{
  return x.concat(y)
})
console.log(b)