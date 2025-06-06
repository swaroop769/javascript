//let p = new Promise(function(accept,reject)
//{
//setTimeout(function()
//{
  //accept("hi")
//},5000)
//})

//p  

 //.then((res) =>console.log(res))
 //.catch((err)=>console.log(err))

 //another example//
let p = new Promise(function(accept,reject)
{
  let n=20;
  if(n % 2==0)
  {
    setTimeout(function()
  {
    accept("pass the exams")
  },5000)
  }
  else
  {
reject("fail the exam")
  }
})
  
p
   .then((res)=>console.log(res))
   .catch((err)=>console.log(err))