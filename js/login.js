<<<<<<< HEAD
let userObj = [{
=======

let userObj =  [{

>>>>>>> 29a5b6bdcd5bb42af6726831bd7376c37f5e357d
  firstName: "Kingsley",
  lastName: "Owolabi",
  age: 29,
  email: "king@example.com",
  password: "Male",

},];

window.localStorage.setItem('users', JSON.stringify(userObj));
let obj = JSON.parse(window.localStorage.getItem('users'));
console.log(obj);
// localStorage.removeItem('users')

let email = document.querySelector('.email');
let password = document.querySelector('.password');

function validate() {
  let inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "" || inputs[i].value === null) {
      inputs[i].classList.add("is-invalid");
    } else {
      inputs[i].classList.remove("is-invalid");

      // obj[inputs[i].name] = inputs[i].value;
      authourize();

    }
  }
}

function authourize() {
  let email = document.querySelector('.email');
  let password = document.querySelector('.password');

  // const authUser = userObj.find(user => user.email == email.value && user.password == password.value)
  const authUser = obj.find(user => user.email == email.value && user.password == password.value)
  console.log(authUser);

  if (authUser) {
    // alert('Authorised');
    location.href = "www.google.com";
  }
  else {
    alert("Unauthorised")
    return;
  }
}


let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  validate();
});
