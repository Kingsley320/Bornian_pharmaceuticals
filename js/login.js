let userObj =   {
  firstName: "Kingsley",
  lastName: "Owolabi",
  age: 29,
  email: "king@example.com",
  password: "Male",
};
window.localStorage.setItem('users', JSON.stringify(userObj));
let obj = JSON.parse(window.localStorage.getItem('users'));
console.log(obj);
// localStorage.removeItem('users')

function validate() {
  let inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "" || inputs[i].value === null) {
      inputs[i].classList.add("is-invalid");
    } else {
      inputs[i].classList.remove("is-invalid");
    //   obj[inputs[i].name] = inputs[i].value;
      // authourize();
      alert("you're in")
    }
  }
}

// function authourize() {
//   let email = document.querySelector('.email');
//   let password = document.querySelector('.password');

//   const authUser = userObj.find(user => user.email == email.value && user.password == password.value)
  
//   if(authUser){
//     alert('Yess');
//   }
// }

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  validate();
});
