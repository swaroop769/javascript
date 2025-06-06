let obj={
  name:"swaroop",
  dateofbirth:1991,
  x:function()
    {
      console.log(this.name)
    }
  }
  obj.x();
  //
  let a = window.location.href
  console.log(a)
  console.log(window.location.search)
   console.log(window.location.reload)
   // console.log(window.location.replace('https://www.google.com/'))

  //history back
  document.getElementById('btn').addEventListener('click',function()
{
  window.history.back()

})
//farword//
 document.getElementById('wwe').addEventListener('click',function()
{
  
   window.history.forward()
})


