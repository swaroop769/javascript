let arr=[10,20,30,40,50];
console.log(arr[2]+arr[3])
console.log(arr.length)
arr[10]=50;
console.log(arr.length)
//array push//
let swa=[10,12,14,16,18];
swa.push(20)
console.log(swa)
//pop //
let swa1=[10,12,14,16,18,20];
swa1.pop()
console.log(swa1)
//unshift add value at starting//
let swa2=[10,20,30];
swa2.unshift(9,8,7)
console.log(swa2)
//shift//
let swa3=[10,20,30,40];
swa3.shift()
console.log(swa3)
//splice//
let swa4 = [1,2,3,4,5,6,7,8,9,10];
swa4.splice(5)
console.log(swa4)
//splice//
let swa5 = [1,2,3,4,5,6,7,8,9,10];
swa5.splice(2,2)
console.log(swa5)
//splice//
let swa6 = [1,2,3,4,5,6,7,8,9,10]
swa6.splice(3,2,10,20,30)
console.log(swa6)
//reverse//
let swa7=[2,4,6,8];
swa7.reverse()
console.log(swa7)
//index//
//console.log(swa7.indexof(17))//
//foreach//
let swa8=[5,4,6,5];
swa8.forEach(function (a,b)
{
  console.log(a,b)
})
//for each example 2//
let names=["geetha", "swaroop"]
names.forEach(function(v,i)
{
  console.log(v.charAt(0))
})

//for each//
let names1="durga prasad", str=''
names1.split(' ').forEach(function(e,f)
{
  str=str + e.charAt(0).toUpperCase()
})
console.log(str)

// print sum of array element using foreach//
are=[1,3,5,7,9]
let sum = 0;
are.forEach(function(w)
{
sum=sum+w;
})
console.log(sum)

//for each output 30,70//
let wash =[[10,20],[30,40]]
let wash1=[]
wash.forEach(function(z)
{
console.log(z)
let sum=0;
z.forEach(function(zs)
{
sum=sum+zs
})
wash1.push(sum)
})
console.log(wash1)




//for each example 2//
arrays=[[20,30],[40,50],[100,200],[500,500],[100,100,100]]
arrays1=[]
arrays.forEach(function(m)
{
console.log(m)
let sum = 0;

m.forEach(function(u)
{
sum=sum+u;
})
arrays1.push(sum)
})
console.log(arrays1)

