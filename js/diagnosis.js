// let btn = document.getElementById("btn");
// let move = document.getElementById("move");

// btn.addEventListener("click", () => {
//   move.classList.add("move");
// });

let diagnosisBtn = document.getElementById("diagnosis-btn");
diagnosisBtn.addEventListener("click", () => {
  sympCheck();
});

function sympCheck() {
    localStorage.removeItem('diagnosis');
  let checkedSymps = [];
  let inputs = document.querySelectorAll("label > input");

  inputs.forEach((input) => {
    if (input.checked) {
      checkedSymps.push(String(input.value));
    }
  });

  if (checkedSymps.length >= 4) {
    makeAppointment();
  }
  else {
    let isFever = checkedSymps.includes("Fever");
    let isCough = checkedSymps.includes("Cough");
    let isHeadache = checkedSymps.includes("Headache");
    let isDiarrhea = checkedSymps.includes("Diarrhea");
    let isFatigue = checkedSymps.includes("Fatigue");
    let isSmell = checkedSymps.includes("Loss of taste or smell");
    let isNausea = checkedSymps.includes("Nausea or vomiting");

    if (isFever || isCough || isSmell) {
      localStorage.setItem("diagnosis", "Cold");
    } else if (isHeadache || isFatigue) {
      localStorage.setItem("diagnosis", "Malaria");
    } else if (isDiarrhea || isNausea) {
      localStorage.setItem("diagnosis", "Dysentery");
    }
    prescription();
  } 
}

function makeAppointment() {
  document.getElementById("diagnosisbody").innerHTML = `
    <div class="card text-center">
    <div class="card-header">
        Service Receipt
    </div>
    <div class="card-body">
        <h2 class="card-title mt-5 mb-2 d-flex justify-content-center text-decoration-underline fw-bold">
            Diagnosis & Prescription</h2>
        <p class="card-text ">We do not have your diagnosis, please make an appointment with a doctor <br>
        <a href="#" class="btn btn-primary mt-4">Save Receipt</a>
        <a href="./bookAppiontment.html" class="btn btn-primary mt-4">Book Appointment</a>
    </div>
    <div class="card-footer text-muted">
        "Thank you for medicaring with us"
    </div>
</div>
    `;
  return;
}

function prescription() {
  let result = localStorage.getItem("diagnosis");
  if (result == "Cold") {
    // alert(`Your symptoms show you have ${localStorage.getItem('diagnosis')}. You can purchase: Priton, Cough syrup & honey`);
    document.getElementById("diagnosisbody").innerHTML = `
        <div class="card text-center">
        <div class="card-header">
            Service Receipt
        </div>
        <div class="card-body">
            <h2 class="card-title mt-5 mb-5 d-flex justify-content-center text-decoration-underline fw-bold">
                Diagnosis & Prescription</h2>
            <p class="card-text">Your diagnosis: ${localStorage.getItem(
              "diagnosis"
            )} <br>
            <p>Prescription:</p>
            <ol class="">
                <li>Cough Syrup</li>
                <li>Priton</li>
                <li>Honey</li>
                <li>Estimated price: #2000</li>
                <li>Available Pharmacy: Cyplac, Skylac, H-medix, CherryHill</li>
            </ol>
            </p>
            <a href="#" class="btn btn-primary">Save Receipt</a>
            <a href="./appointment.html" class="btn btn-primary">Book Appointment</a>
        </div>
        <div class="card-footer text-muted">
            "Thank you for medicaring with us"
        </div>
    </div>
        `;
  }
  else if (result == "Malaria") {
    // alert(`Your symptoms show you have ${localStorage.getItem('diagnosis')}. You can purchase: Priton, Cough syrup & honey`);
    document.getElementById("diagnosisbody").innerHTML = `
        <div class="card text-center">
        <div class="card-header">
            Service Receipt
        </div>
        <div class="card-body">
            <h2 class="card-title mt-5 mb-5 d-flex justify-content-center text-decoration-underline fw-bold">
                Diagnosis & Prescription</h2>
            <p class="card-text">Your diagnosis: ${localStorage.getItem(
              "diagnosis"
            )} <br>
            <p>Prescription:</p>
            <ol class="">
                <li>Coartem</li>
                <li>Primaquine</li>
                <li>Estimated price: #3000</li>
                <li>Available Pharmacy: Cyplac, Skylac, H-medix, CherryHill</li> 
            </ol>
            </p>
            <a href="#" class="btn btn-primary">Save Receipt</a>
            <a href="./appointment.html" class="btn btn-primary">Book Appointment</a>
        </div>
        <div class="card-footer text-muted">
            "Thank you for medicaring with us"
        </div>
    </div>
        `;
  }
  else if (result == "Dysentery") {
    document.getElementById("diagnosisbody").innerHTML = `
        <div class="card text-center">
        <div class="card-header">
            Service Receipt
        </div>
        <div class="card-body">
            <h2 class="card-title mt-5 mb-5 d-flex justify-content-left text-decoration-underline fw-bold">
                Diagnosis & Prescription</h2>
            <p class="card-text">Your diagnosis: ${localStorage.getItem(
              "diagnosis"
            )} <br>
            <p>Prescription:</p>
            <ol class="">
                <li>Agbo</li>
                <li>Herb Tea</li>
                <li>Septrin</li>
                <li class="list-unstyled">Estimated price: #5000</li>
                <li>Available Pharmacy: Cyplac, Skylac, H-medix, CherryHill</li>
            </ol>
            </p>
            <a href="#" class="btn btn-primary">Save Receipt</a>
            <a href="./appointment.html" class="btn btn-primary">Book Appointment</a>
        </div>
        <div class="card-footer text-muted">
            "Thank you for medicaring with us"
        </div>
    </div>
        `;
  } 
  else {
    document.getElementById("diagnosisbody").innerHTML = `
        <div class="card text-center">
        <div class="card-header">
            Service Receipt
        </div>
        <div class="card-body">
            <h2 class="card-title mt-5 mb-2 d-flex justify-content-center fw-bold">
            Please pick a symptom to get diagnosis</h2>
        </div>
    </div>
        `;
  }
}
