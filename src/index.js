module.exports = function getZerosCount(number, base) {
  // your implementation
  var fact=16;
var base;
var delres=[];

function factorize(base) {
    let factors={}; let ncount=0;
    for (let i = 2; i <= Math.sqrt(base); i++) {
        ncount=1;
        while (base % i == 0) {
          factors[i]=ncount;
            factors[i]=ncount;
            base /= i;
            ncount++;            
        }
    }
    if (base != 1) {
        factors[base]=1;
    }
    return factors;
}
//console.log(factorize(15));

function maxzerocount (num,base){
 
  let number=factorize(base);
  for(let delimeter in number ){
    let dcount = number[delimeter];
    let k=1; let sum=0;
    
    //console.log(delimeter);
    while(Math.floor(num/k)>=1){
      k*=delimeter;
      sum+=Math.floor(num/k);  
      //console.log('sum '+sum+' lim'+delimeter+'k'+k)
    }
    sum=Math.floor(sum/dcount);
    delres.push(sum);    
  }
  return delres;
  
}
function findmin(arr) {
  let min=arr[0];
  for(let i=0; i<arr.length; i++){  
       
    if (min>arr[i]){
        min=arr[i];
      
    }
  }
  return min;
}



return findmin(maxzerocount(number,base))
}