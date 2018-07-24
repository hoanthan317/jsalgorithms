for(var i = 30; i <= 300; i++){
  if((i % 13) === 0 && (i % 7) === 0){
    console.log(i + ": a-z");
  } else {
    if((i % 13) === 0 && (i % 7) !== 0){
      console.log(i + ": xyz");
    }
    else if((i % 13) !== 0 && (i % 7) === 0) {
      console.log(i + ": abc");
    }
  }
}
