let obj = JSON.parse(window.localStorage.getItem("Details"));
let email = document.querySelector(".email");
let password = document.querySelector(".password");

function validate() {
  let inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "" || inputs[i].value === null) {
      inputs[i].classList.add("is-invalid");
    } else {
      inputs[i].classList.remove("is-invalid");
      authourize();
    }
  }
}

function authourize() {
  let email = document.querySelector(".email");
  let password = document.querySelector(".password");
  const authUser = obj.find(
    (user) => user.Email == email.value && user.Password == password.value
  );
  console.log(authUser);

  if (authUser) {
    location.href = "./diagnosis.html";
  } else {
    alert("Unauthorised");
    return;
  }
}

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  validate();
});
