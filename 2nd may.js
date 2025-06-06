//sort is used arrand values in alphabetically//
arr=[10,20,30,40,50,35,45,47]
//console.log(arr.sort())//
arr.sort(function (a,b)
{
return b-a;
})
console.log(arr)
//reduce addition and subtraction//
let arr1=[1,2,3,4,5,139,149,200]
let res=arr1.reduce(function(pre,cur)
{
return pre+cur
})
console.log(res)
//flatering array//
let main =[[1,2,3],[4,5,],[6,7,8]]
let x = main.reduce(function (c,d)
{
return c.concat(d)

})
console.log(x)

//objects//
let obj={
  name:"swaroop",
  age:34,
  weight:100,
display:function()
{
  console.log("hello world")
},
}
console.log(obj.name,obj.age)
obj.display()
//object destructuring//
let {name,age}=obj;
console.log(name,age)
//array destructuring//
//let are =[5,6];//
//let[5,6]=are//
