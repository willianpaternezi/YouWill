// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}

// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

// carrossel

const imgs_carrossel = [
    {
        img: "../assets/imgs/canberra.jpg" , 
        local: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6513.985649707046!2d149.12919935!3d-35.281304649999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164d69b05c9021%3A0x500ea6ea7695660!2sCanberra%20ACT%202601%2C%20Australia!5e0!3m2!1sen!2sbr!4v1654458656450!5m2!1sen!2sbr" 
    },
    {
        img: "../assets/imgs/sydney.png",
        local: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424143.2713133365!2d150.65178422173113!3d-33.84792702661292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sbr!4v1653067719740!5m2!1sen!2sbr"
    },
    {
        img: "../assets/imgs/brisbane.png",
        local: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453477.6536737166!2d152.99319645!3d-27.3821429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2sbr!4v1654458667541!5m2!1sen!2sbr"
    }
]

let imgs = document.getElementById("imgs");
imgs = !!imgs === true ?  imgs : document.createElement('div');
console.log(imgs);

for (let i = 0; i < imgs_carrossel.length; i++) {
    let img_carrossel = document.createElement('img');
    img_carrossel.src = imgs_carrossel[i].img;

    imgs.appendChild(img_carrossel);
}

const img = document.querySelectorAll("#imgs img");
let idx = 0;

function carrossel(){
    var iframe = document.getElementById("iframe_carrossel");
    iframe = iframe ? iframe : document.createElement("iframe");
    idx++;
    
    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 80}vw)`;
    
    iframe.src = imgs_carrossel[idx].local ;  
}

setInterval(carrossel, 5000);