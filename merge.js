
function Check(obj1,obj2) 
{
  
  // let obj3={...obj1,...obj2};  
  

  // return obj3;
  let obj=Object.assign(obj1,obj2);
  return obj;
}