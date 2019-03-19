module.exports = function getZerosCount(number, base) {
  // your implementation
 
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

function maxzerocount (num,base) { 
  let counts=[];
  let number=factorize(base);
  for(let delimeter in number ){
    let dcount = number[delimeter];
    let k=1; let sum=0;    
    while(Math.floor(num/k)>=1){
      k*=delimeter;
      sum+=Math.floor(num/k);       
    }
    sum=Math.floor(sum/dcount);
    counts.push(sum);    
  }
  return counts;  
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
return findmin(maxzerocount(number,base));
}