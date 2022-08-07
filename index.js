// console.log("Working");
// let code= {" // my first program in C++ + #include <iostream> +  using namespace std; +  int main ()" };

// let htmldoc = document.getElementById(`codeify`).innerHTML;
const add_list= ()=>{
    console.log("Working");
    htmldoc += ` <li> </li> `;
    document.getElementById(`codeify`).innerHTML = htmldoc;
}
let element = document.body;
console.log(element);

const toggleDarkLight = ()=>{
    console.log("slfkjsdkl");
    var element = document.body;
   element.classList.toggle("dark-mode");
}