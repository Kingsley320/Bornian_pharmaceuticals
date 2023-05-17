// var typed = new Typed('#welcomeTYP', {
//     strings: ["PLease Sign Up"],
//     typeSpeed: 60,
//     backSpeed: 60,
//     loop: false
//   });


function validation() {
    let FirstName = document.getElementById("exampleInputName1");
    // let FirstErr = document.getElementById("FirstNameErr");
    let LastName = document.getElementById("exampleInputName2");
    // let LastErr = document.getElementById("exampleInputName2");
    let Email = document.getElementById("exampleInputEmail1");
    // let EmailErr = document.getElementById("EmailErr");

    let allInputs = document.querySelectorAll(".inputErr");
    // console.log(allInputs);

    for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i].value == "" || allInputs[i].value == null) {
            allInputs[i].nextElementSibling.innerHTML = allInputs[i].previousElementSibling.innerHTML + " Is required"
        } else { allInputs[i].nextElementSibling.innerHTML = "" }
    }
    if (!FirstName.value || !LastName.value || !Email.value) {
        return;
    }

    let obj = {
        FirstName: FirstName.value,
        LastName: LastName.value,
        Email: Email.value,
    };
    let userInfo = localStorage.getItem("Details");
    let userData = userInfo ? JSON.parse(userInfo) : [];
    userData.push(obj);
    localStorage.setItem("Details", JSON.stringify(userData));  
}

document.getElementById("submit").onclick = (m) => {
    m.preventDefault();
    validation();
};
