






var  user={
    name:"ahmad",
    age:23
}
function duplicate(user){
     var dup={}
    dup.name=user.name;
    dup.age=user.age;
return dup;
}
var user2=duplicate(user);
user.name='Nimra'
console.log(user2.name);
console.log(user.name);