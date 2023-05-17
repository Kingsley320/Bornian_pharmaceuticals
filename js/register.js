function validation() {
    let FirstName = document.getElementById("exampleInputName1");
    let LastName = document.getElementById("exampleInputName2");
    let Email = document.getElementById("exampleInputEmail1");
     let allInputs = document.querySelectorAll(".inputErr");
     let Password = document.getElementById('exampleInputPassword');

    for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i].value == "" || allInputs[i].value == null) {
            allInputs[i].nextElementSibling.innerHTML = allInputs[i].previousElementSibling.innerHTML + " Is required"
        } else { allInputs[i].nextElementSibling.innerHTML = "" }
    }
    if (!FirstName.value || !LastName.value || !Email.value || Password.value) {
        return;
    }

    let obj = {
        FirstName: FirstName.value,
        LastName: LastName.value,
        Email: Email.value,
        Password: Password.value
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
