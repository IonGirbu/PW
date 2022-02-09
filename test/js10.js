let n  = Number(prompt());
function getDivisors(n){
    let output = 0; 
    for (let i=1; i<=n; i++) {
      if (n % i == 0) {
         output = alert(i);
}
}
  return output;
}