document.getElementById("btn").addEventListener("click",click);
function click(e){
  e.preventDefault()
const name = document.getElementById("fname").value;
const email = document.getElementById("email").value;
console.log(name,email)
let obj={
  "name": name,
  "email" : email
}
axios.get("https://crudcrud.com/api/36ed59a0899f45c382e57f909efc1ccc/CRUD",obj)
.then(value=>console.log(value))
.catch(err=>console.log(err))
}
