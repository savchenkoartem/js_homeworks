
function getMin (...args) {
  let res=arguments[0];
  for (let i=0;i<args.length;i++) {
    if (arguments[i]<res) {
      res=arguments[i]; 
    }
    }
 console.log(res)
  } 

  getMin(7,4,5,6,7,8,56,44,2,3,44,77,1,22);
