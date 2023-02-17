var hocSinh=[
    {ten: 'huy', khoi:'A', diem: {toan: 7, van: 5, anh:5}},
    {ten: 'lam', khoi:'B', diem: {toan: 7, van: 7, anh:5}},
    {ten: 'tung', khoi:'C', diem: {toan: 7, van: 4, anh:7}},
] ;
    
var khoiThi = [
    {khoi: 'A', heSo:{toan:2, van:1, anh:1}, diemSan:25},
    {khoi: 'B', heSo:{toan:1, van:1, anh:2}, diemSan:24},
    {khoi: 'C', heSo:{toan:1, van:2, anh:1}, diemSan:20},
]

function check(student,major) {
    for(let i=0;i<student.length;i++) {
        for(let y=0;y<major.length;y++) {
            if(student[i].khoi==major[y].khoi) {
                let math = student[i].diem.toan*major[y].heSo.toan ;
                let social = student[i].diem.van*major[y].heSo.van ;
                let eng = student[i].diem.anh*major[y].heSo.anh ;
                let total_sum = math+social+eng ;
                let check = (total_sum>=major[y].diemSan)?"passed":"failed" ;
                console.log("- student name: ",student[i].ten,"\n grade: ",total_sum,"\n status: ",check) ;
                break ;  
            }
        }
    }
}

const testing = (callback) => {
    callback() ;
}
function tester() { 
    console.log("complete !") ;
}

testing(function() {
    console.log("complete !") ;
}) ;

const sum = (num1,num2,cb) => {
    cb(num1,num2) ;
} ;
let num1 = 10 , num2 = 20 ; 

sum(num1,num2,function(n1,n2){
    console.log(n1+n2) ;
}) ;

const hexttext = (cb) => {
    let arr = cb() ;
    console.log(arr) ;
}

hexttext(function(){
    let arr = [0,1,2,3,4,5,6,7,8,9] ;
    var new_arr = Object.entries(arr) ;
    return new_arr ;  
}) ;

function sayHello(name, callback) {
	var myName = name.toUpperCase() + ", Hello";
    return callback(myName);
}
 
var result = sayHello("Khoa", function (arg) {
    return arg;
});
 
console.log(result);

var keywords = ["Khoa", "codelearn", "Học lập trình", "codelearn.io"]

// Lặp qua từng phần tử và xử lý trong hàm callback
keywords.forEach(function (eachName, index) {
    console.log(index + 1 + ". " + eachName);
});

const numbers = [65, 44, 12, 4];
numbers.forEach(function(value,index,arr){
    arr[index] = value * 10 ; 
}) ;
console.log(numbers) ;

const solution = (names) => {
	let ans = "" ;
	names.forEach(function(value,index,arr){
    ans += arr[index][0].toUpperCase() ;
	})
	return ans.split("").sort().join("") ; 
};  

var personObj1 = {
    name: "alex" ,
    age: 30 , 
} ;

var person = personObj1 ; 

person.age = 25 ; 

person = {
    name: "John" ,
    age: 50 ,
} ;

console.log(personObj1) ;
var personObj2 = person;
console.log(personObj2) ;