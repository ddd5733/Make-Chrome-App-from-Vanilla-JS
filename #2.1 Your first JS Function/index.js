function sayHello(name , age){
  console.log('Hello~' , name , "u have"+age,
  "years of age" );
}

sayHello("yong", 15);


function sayHello2(name , age){
  console.log(`Hello ${name} u r ${age} years old` );
  return(`Hello ${name} u r ${age} years old` );
}

sayHello2("yong", 30);
const greetNew = sayHello2("yung" , 15);

console.log(greetNew);

