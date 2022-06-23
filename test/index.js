function test () {
    console.log('start');
  
    setTimeout(() => console.log("output 1"));
    
    Promise.resolve().then(() => console.log("output 2"));
  
    Promise.resolve().then(() => setTimeout(() => console.log("output 3")));
    
    setTimeout(() => console.log("output 4"));
  
    console.log("end");
  }
  
  test(); // ?