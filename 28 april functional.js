//for//
for(a=10;a<=20;a++)
{
  console.log(a)

}

//for of particular value//
let are=[10,20,30,40,50]
for(c=0;c<=2;c++)
{
  console.log(are[c])
}

//for of full all value//
bra=[1,20,30,40]
for(b of bra)
{
  console.log(b)
}

//for in//
at=[11,22,33,44,55]
for(d in at)
{
  console.log(d)
}

//for in with values
at=[11,22,33,44,55]
for(d in at)
{
  console.log(at[d],d)
}

//for in with object//
let obj={
  name:'swaroop',
  weight:'84',
  age:34,
  year:1991
}
for(e in obj)
{
  console.log(obj[e],e)
}

// function //
function display()
{
  console.log("hello world")
}
display()

//function sum of 2 numbers//
function wwe()
{
  let f=10;
  let g=20;
  console.log(f+g)
}
wwe()
//function//
function wwe10(i)
{
  console.log(i.length);
}
wwe10("prajna")
//function//
function wwe11(j,k=20)
{
  console.log(j+k)
}
wwe11(10);

//sum with rest//important
function wwe12(l, ...m)
{
  console.log(l, m);
}
wwe12(1,2,3,4,5)
//takean array and pass multiple values to function and print their product//
function wwe13(...o)
{
  let sum=1
  for(let n of o){
    sum=sum*n
  }
  console.log(sum)
}
wwe13(10,5,4,6,3)

//spread //important
function wwe14(p,...q)
{
  console.log(p,q)
  let r=[p,...q];
  console.log(r.length)
}
wwe14(10,4,3,2)