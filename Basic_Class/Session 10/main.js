// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1';

// const btn = document.querySelector('.btn'); 
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

//click on one thing and have the color change

// const myForm = document.querySelector('#my-form');
// const num1Input = document.querySelector('#num1');
// const num2Input = document.querySelector('#num2');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);

function penjumlahan() 
{
    const n1 = parseInt(document.getElementById("tamb1").value);
    const n2 = parseInt(document.getElementById("tamb2").value);

    document.getElementById("resultTamb").value = n1 + n2;
    
    const numType = document.getElementById("resultTamb");
    if (numType.value % 2 == 1) {
        numType.style.backgroundColor = "yellow";
    } else if (Number.isInteger) { 
        numType.style.backgroundColor = "green";
    } else {
        numType.style.backgroundColor = ""
    }
   
}

function pengurangan() 
{
    const n1 = parseInt(document.getElementById("kur1").value);
    const n2 = parseInt(document.getElementById("kur2").value);

    document.getElementById("resultKur").value = n1 - n2;

    const numType = document.getElementById("resultKur");
    if (numType.value % 2 == 1) {
        numType.style.backgroundColor = "yellow";
    } else if (Number.isInteger) { 
        numType.style.backgroundColor = "green";
    } else {
        numType.style.backgroundColor = ""
    }
}

function perkalian() 
{
    const n1 = parseInt(document.getElementById("kal1").value);
    const n2 = parseInt(document.getElementById("kal2").value);

    document.getElementById("resultKal").value = n1 * n2;

    const numType = document.getElementById("resultKal");
    if (numType.value % 2 == 1) {
        numType.style.backgroundColor = "yellow";
    } else if (Number.isInteger) { 
        numType.style.backgroundColor = "green";
    } else {
        numType.style.backgroundColor = ""
    }
}

function pembagian() 
{
    const n1 = parseInt(document.getElementById("bag1").value);
    const n2 = parseInt(document.getElementById("bag2").value);

    document.getElementById("resultBag").value = n1 / n2;

    const numType = document.getElementById("resultBag");
    if (numType.value % 2 == 1) {
        numType.style.backgroundColor = "yellow";
    } else if (Number.isInteger) { 
        numType.style.backgroundColor = "green";
    } else {
        numType.style.backgroundColor = ""
    }
}

