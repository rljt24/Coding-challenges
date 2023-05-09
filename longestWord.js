function LongestWord(sen) { 
    let arr = sen.match(/\w[a-z]{0,}/gi);
    let max = "";
    for(let i=0; i < arr.length; i++){
      if(arr[i].length > max.length){
        max = arr[i];
        sen = max;
      }
    }
    
    return sen; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));