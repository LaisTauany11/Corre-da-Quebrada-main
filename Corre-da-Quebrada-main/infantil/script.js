let nike = document.getElementById("nike");
let adidas = document.getElementById("adidas");
let puma = document.getElementById("puma");
let vans = document.getElementById("vans");
let oakley = document.getElementById("oakley");

let nikeT = document.getElementById("nikeT");
let adidasT = document.getElementById("adidasT");
let pumaT = document.getElementById("pumaT");
let vansT = document.getElementById("vansT");
let oakleyT = document.getElementById("oakleyT");

function mostraTodos(){
   
    nike.style.display = 'flex';
    adidas.style.display = 'flex';
    puma.style.display = 'flex';
    vans.style.display = 'flex';
    oakley.style.display = 'flex';

    adidasT.style.display = 'flex';
    nikeT.style.display = 'flex';
    pumaT.style.display = 'flex';
    vansT.style.display = 'flex';
    oakleyT.style.display = 'flex';
}


function mostraNike(){
    nike.style.display = 'flex';
    adidas.style.display = 'none';
    puma.style.display = 'none';
    vans.style.display = 'none';
    oakley.style.display = 'none';

    adidasT.style.display = 'none';
    pumaT.style.display = 'none';
    vansT.style.display = 'none';
    oakleyT.style.display = 'none';
    nikeT.style.display = 'flex';   
}

function mostraAdidas(){
    adidas.style.display = 'flex';
    nike.style.display = 'none';
    puma.style.display = 'none';
    vans.style.display = 'none';
    oakley.style.display = 'none';

    nikeT.style.display = 'none';
    pumaT.style.display = 'none';
    vansT.style.display = 'none';
    adidasT.style.display = 'flex';
    oakleyT.style.display = 'none';
}

function mostraPuma(){
    puma.style.display = 'flex';
    nike.style.display = 'none';
    vans.style.display = 'none';
    oakley.style.display = 'none';
    adidasT.style.display = 'none';
    
    adidasT.style.display = 'none';
    nikeT.style.display = 'none';
    vansT.style.display = 'none';
    oakleyT.style.display = 'none';
    pumaT.style.display = 'flex';
}

function mostraVans(){
    puma.style.display = 'none';
    nike.style.display = 'none';
    oakley.style.display = 'none';
    vans.style.display = 'flex';
    adidas.style.display = 'none';
    
    adidasT.style.display = 'none';
    nikeT.style.display = 'none';
    pumaT.style.display = 'none';
    oakleyT.style.display = 'none';
    vansT.style.display = 'flex';
}

function mostraOakley(){
    oakley.style.display = 'flex';
    vans.style.display = 'none';
    puma.style.display = 'none';
    nike.style.display = 'none';
    adidas.style.display = 'none';
    
    adidasT.style.display = 'none';
    nikeT.style.display = 'none';
    pumaT.style.display = 'none';
    vansT.style.display = 'none';
    oakleyT.style.display = 'flex';
}