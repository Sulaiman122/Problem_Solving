function primes(start, end){
  let prime=[]
    for(start;start<=end;start++){
      for(let i=2;i<=Math.sqrt(start);i++){
        if(start%i==0) break;
        if(!prime.includes(start))prime.push(start)
      }
    }
  return prime
}

//didn't work tho but close to the answer
