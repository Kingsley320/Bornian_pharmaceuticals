"use strict";
let doctors = [
  {
    img: "./images/doc1.jpg",
    firstName: "John Doe",
    lastName: "White",
    specialization: "Neurology",
    gender: "Male",
    email: "johndoe@gmail.com",
    available: true,
  },
  {
    img: "./images/doc1.jpg",
    firstName: "Mike",
    lastName: "Varshavski",
    specialization: "Family doctor",
    gender: "Male",
    email: "mikevarshavski@gmail.com",
    available: true,
  },
  {
    img: "./images/doc1.jpg",
    firstName: "Dana",
    lastName: "White",
    specialization: "Foot doctor",
    gender: "Male",
    email: "danawhite@gmail.com",
    available: true,
  },
  {
    img: "./images/doc1.jpg",
    firstName: "Eric",
    lastName: "Berg",
    specialization: "ketosis",
    gender: "Male",
    email: "ericberg@gmail.com",
    available: false,
  },
];
// localStorage.setItem("doctors", JSON.stringify(doctors));

function getDoctors() {
  

// const getAvailDocs = doctors.find(doc => doc.available = true);
const getDocs = doctors.filter((doc) => {
    return doc.available = false;
});
console.log(getDocs);

let results = [];
doctors.forEach(doc => {
  let isDoc = doc.includes(true);
    if (isDoc){
        // results.push(doc);
        console.log(doc);
    }
    console.log(results);
});


}
// let doctors = JSON.parse(localStorage.getItem('doctors'));
// if (getAvailDocs){

//     getAvailDocs.forEach(doc => {
//         console.log(getAvailDocs);
//         let output = '';
//         output += `
//         <div class="Doctor text-center bg-white ">
//         <p class="fw-semibold">Name: <span class="fw-light">${doc.firstName} ${doc.lastName}</span></p>
//         <p class="fw-semibold">Speciality: <span class="fw-light">${doc.specialization}</span></p>
//         <p class="fw-semibold">Email: <span class="fw-light">${doc.email}</span></p>
//         <button type="button" id="bookBtn" class="btn btn-primary fw-bold mt-2"><a href="#"  class="text-white text-decoration-none" id="bookDoc"></a>Book</button>
//         </div>
//         `;
//         document.querySelector('.doctors').innerHTML += output;
//     });
// } else{
//     document.querySelector('.doctors').innerHTML += "No Doctors Available";
// }