let greenTrash = document.getElementById('green');
let yellowTrash = document.getElementById('yellow');
let blueTrash = document.getElementById('blue');
let brownTrash = document.getElementById('brown');
let trash = document.querySelectorAll('.trash');

let dechets = [
    "ampoule",
    "bouteille",
    "capsule bierre" ,
    "canette" ,
    "bidon lessive",
    "carton" ,
    "journal" ,
    "brique de lait" ,
    "pomme" ,
    "reste de nouriture" ,

];

let green = [
    "ampoule",
    "bouteille",
];

let yellow = [
    "capsule bierre" ,
    "canette" ,
    "bidon lessive",
];

let blue = [
    "carton" ,
    "journal" ,
    "brique de lait" ,
];

let brown = [
    "pomme" ,
    "reste de nouriture" ,
];

let drop ;
let waste = document.getElementById('waste');
let picture = document.getElementById('garbage');
let start = document.getElementById('start');
let count = 0 , chance = 10;

function reset() {
    let alea = Math.floor(Math.random()*dechets.length);
    waste.innerHTML = dechets[alea];
    waste.style.display = '';
}

let alea = Math.floor(Math.random()*dechets.length);

// bouton start
//
start.addEventListener('click' ,function() {
    waste.innerHTML = dechets[alea];
});

// function drag and drop
//
for(const clear of trash) {
    clear.addEventListener('dragover', function (e) {
        e.preventDefault();
    })

    clear.addEventListener('dragenter', function (e) {
        e.preventDefault();
    })

    clear.addEventListener('drop', function (e) {
        waste.style.display = 'none';
        reset();
        drop = e.path[1].id;
        if (chance > 0) {

        if (drop === "green") {
            if (green.includes(waste.innerHTML)) {
                count++;
                chance--;
            }

            else {
                chance--;
                //si tromper dire dans quel trash il doit allais
            }
        }

        if (drop === "yellow") {
            if (yellow.includes(waste.innerHTML)) {
                count++;
                chance--;
            }

            else {
                chance--;
                //si tromper dire dans quel trush il doit allais
            }
        }

        if (drop === "brown") {
            if (brown.includes(waste.innerHTML)) {
                count++;
                chance--;
            }

            else {
                chance--;
                //si tromper dire dans quel trush il doit allais
            }
        }

        if (drop === "blue") {
            if (blue.includes(waste.innerHTML)) {
                count++;
                chance--;
            }

            else {
                chance--;
                //si tromper dire dans quel trush il doit allais
            }
        }
        }

        else if (chance === 0) {
           document.location = "resultat.html";
        }
    })
}