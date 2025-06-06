//$('#btn').click(function()
//{
   //$('#main').toggle(2000)
//$('#main').text('hello')
//$('#main').html('diz is swaroop')
//$('#main').slideDown();
// $( "#main" ).animate({
  //  opacity: 0.25,
    //left: "+=50",
    //height: "toggle"
  //}, 5000, function() {
    // Animation complete.
  //});
//});

const myTypeItInstance = new TypeIt("#Heading", {
  strings: "This will be typed!",
})
  myTypeItInstance.go()
 
 //gsap//
  document.addEventListener
  ('DOMContentLoaded',function()
{
  
gsap.fromTo("#main", { opacity: 0 }, { opacity: 0.5, duration: 1 });

})