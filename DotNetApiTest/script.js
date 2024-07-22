'use strict';

const employeeName = document.getElementById('employeeName');
const employeeAge = document.getElementById('employeeAge');
const employeeSalary = document.getElementById('employeeSalary');
const employeeDesignation = document.getElementById('employeeDesignation');
const employeeJoiningDate = document.getElementById('employeeJoiningDate');
const employeeDOB = document.getElementById('employeeDOB');
const btnSendApi = document.querySelector('.btnSendApi');

employeeJoiningDate.value = '2024-07-22T10:11:12.876Z';
employeeDOB.value = '2024-07-22T10:11:12.876Z';

btnSendApi.addEventListener('click', GetAllValues);

function GetAllValues() {
  const employee = {
    name: employeeName.value,
    age: employeeAge.value,
    designation: employeeDesignation.value,
    salary: employeeSalary.value,
    sateOfJoining: employeeJoiningDate.value,
    dateOfBirth: employeeDOB.value,
  };

  console.log(employee);

  FetchAPi(employee);
}

function FetchAPi(employee) {
  fetch('https://localhost:44354/Employee', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employee),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Employee created successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error creating employee.');
    });
}
