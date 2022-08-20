function FirstFactorial(num) { 
  let x = 1;
  for (let i = 1; i <= num;i++){
    x = (i*x)
  } 
  return x; 
}
   

console.log(FirstFactorial(readline()));
