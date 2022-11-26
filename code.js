function logar(){
    var login = document.querySelector('#email').value;
    var senha = document.querySelector('#senha').value;

    if (login == 'admin@admin' && senha === '123'){
        alert('Senha com sucesso');
        location.href = "index2.html"
    }else {
        
        alert('Senha incorreta, entra em contato com os administradores.');
    };
}

var dog = document.querySelector("#dog");
var gato = document.querySelector('#gato');
var coelho = document.querySelector('#coelho');
var peixe = document.querySelector('#peixe');


dog.addEventListener("click", function (){
 location.href = "dog.html"
});

gato.addEventListener("click", function (){
    location.href = "gato.html"
   });

   coelho.addEventListener("click", function (){
    location.href = "coelho.html"
   });

   peixe.addEventListener("click", function (){
    location.href = "fish.html"
   });






// let menu = document.querySelector('.opcao1')
// let lista = document.querySelectorAll('.animal');
// let cachorro = document.querySelector('#L-CACHORRO');
// let gato = document.querySelector('#L-GATO');
// let coelho = document.querySelector('#L-COELHO');
// let peixe = document.querySelector('#L-PEIXE');

// menu.addEventListener("input",function(){
//     const str = this.menu.value;
//     console.log(menu);
// })

let animals = document.querySelectorAll('.animal')
let animalsBackup = document.querySelectorAll('.animal')
let content = document.getElementById('content')

const reset = () => {
    animalsBackup.forEach(animal => {
        content.appendChild(animal)
    })
}

document.getElementById('menu').addEventListener('change', function () {
    animals = animalsBackup
    reset()

    if (this.value === 'all') return
    
    animals.forEach(animal => {
        if (!animal.childNodes[3].childNodes[1].textContent.toLowerCase().includes(this.value.toLowerCase())) {
            console.log(animal.childNodes[3].childNodes[1].textContent)
            animal.remove()
        }
    })
});


