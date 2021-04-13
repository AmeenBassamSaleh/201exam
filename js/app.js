'use script';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomSalary = [];

function Hre(name, email, Department) {

  this.name = name;
  this.email = email;
  this.Department = Department;
  this.random = getRndInteger(100, 500);
  randomSalary.push(this.random);

  Hre.array.push(this);
}

Hre.array = [];


let table = document.getElementById('table');
let form = document.getElementById('form');

let tbody = table.appendChild(document.createElement('tbody'));

Hre.prototype.mainRender = function () {

  tbody.innerHTML = '';
  for (let i = 0; i < Hre.array.length; i++) {

    let tr = tbody.appendChild(document.createElement('tr'));

    let td = tr.appendChild(document.createElement('td'));
    td.textContent = `${Hre.array[i].name}`;

    let td1 = tr.appendChild(document.createElement('td'));
    td1.textContent = `${Hre.array[i].email}`;

    let td2 = tr.appendChild(document.createElement('td'));
    td2.textContent = `${Hre.array[i].Department}`;

    let td3 = tr.appendChild(document.createElement('td'));
    td3.textContent = `${Hre.array[i].random}`;
  }
};

let total = document.getElementById('total');
let p = total.appendChild(document.createElement('p'));

function sum() {
  let sumT = 0;
  for (let i = 0; i < randomSalary.length; i++) {
   sumT =sumT + randomSalary[i];
  }
  p.textContent = sumT;
}

function sett() {
  let js = JSON.stringify(Hre.array);
  localStorage.setItem('name', js);
}

function gett() {
  let loc =localStorage.getItem('name');
  JSON.parse(loc);
}

submit.addEventListener('click',e);

function e(e) {
  e.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let Department = document.getElementById('Department').value;
  // let name = document.getElementById('name');

  const nam = new Hre(name, email, Department);

  sett();
  sum();

  nam.mainRender();
  form.reset();
}

gett();



