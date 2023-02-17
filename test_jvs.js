const person = {
  first_name : "kien" ,
  second_name : "nguyen ba" ,
  age : 18 , 
  full_name: function() {
    return this["first_name"] + " " + this["second_name"] ;
  } 
} ;

let answer = person["full_name"] ; 
console.log( answer ) ;

// bản chất của arr là object  

var arr = [ 1 , 2 , 3 , 4 ] ;
let keys = Object.keys(arr) ;
let values = Object.values(arr) ;
console.log("- keys: ",keys,"\n- values: ",values) ;
let nested_arr = Object.entries(arr) ;
console.log("- entries: " , nested_arr ) ;

// var ---> function 
// let ---> block 

function print() {
  let numb = 0 ; 
}