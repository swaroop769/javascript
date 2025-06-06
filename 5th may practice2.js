let degree=0;
function rotate()
{
  degree=degree+180;
  document.querySelector('#modal img').
  Style.rotate=`${degree}deg`
}
function doreman()
{
  document.getElementById('modal').
  innerHTML =`
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrSIhxe3Du6E8lvtv1RElRrv09hhCwiNNng&s" alt="" height="" onclick="rotate()">
<p><b>Doremon</b></p>
  `
}

function reverse()
{
  const input=document.getElementById('inp')
  let name=input.value;
  console.log(name)
  document.body.style.background=name;
}