
function canviarInici() {
    let inici = document.getElementById("pagina_inici");
    let historia = document.getElementById("pagina_blau");
    let vestit = document.getElementById("pagina_groc");
    //let famosos = document.getElementById("pagina_famosos");
    let joc = document.getElementById("pagina_vermell");
    let tresor = document.getElementById("pagina_verd");
    let memory = document.getElementById("pagina_memory");

    inici.style.display = "block";
    inici.classList.remove("d-none");
    historia.style.display = "none";
    historia.classList.add("d-none");
    vestit.style.display = "none";
    vestit.classList.add("d-none");
    //famosos.style.display = "none";
    //famosos.classList.add("d-none");
    joc.style.display = "none";
    joc.classList.add("d-none");
    tresor.style.display = "none";
    tresor.classList.remove("d-none");
    memory.style.display = "none";
    memory.classList.remove("d-none");

    let li_inici = document.getElementById("li_inici");
    let li_historia = document.getElementById("li_historia");
    let li_vestit = document.getElementById("li_vestit");
    //let li_famosos = document.getElementById("li_famosos");
    let li_joc = document.getElementById("li_joc");
    let li_tresor = document.getElementById("li_tresor");
    let li_memory = document.getElementById("li_memory");

    li_inici.classList.remove("text-white");
    li_inici.classList.add("text-secondary");
    li_historia.classList.remove("text-secondary");
    li_historia.classList.add("text-white");
    li_vestit.classList.remove("text-secondary");
    li_vestit.classList.add("text-white");
    //li_famosos.classList.remove("text-secondary");
    //li_famosos.classList.add("text-white");
    li_joc.classList.remove("text-secondary");
    li_joc.classList.add("text-white");
    li_tresor.classList.remove("text-secondary");
    li_tresor.classList.add("text-white");
    li_memory.classList.remove("text-secondary");
    li_memory.classList.add("text-white");
}

function canviarBlau() {
    let inici = document.getElementById("pagina_inici");
    let historia = document.getElementById("pagina_blau");
    let vestit = document.getElementById("pagina_groc");
    //let famosos = document.getElementById("pagina_famosos");
    let joc = document.getElementById("pagina_vermell");
    let tresor = document.getElementById("pagina_verd");
    let memory = document.getElementById("pagina_memory");

    inici.style.display = "none";
    inici.classList.add("d-none");
    historia.style.display = "block";
    historia.classList.remove("d-none");
    vestit.style.display = "none";
    vestit.classList.add("d-none");
    //famosos.style.display = "none";
    //famosos.classList.add("d-none");
    joc.style.display = "none";
    joc.classList.add("d-none");
    tresor.style.display = "none";
    tresor.classList.remove("d-none");
    memory.style.display = "none";
    memory.classList.remove("d-none");

    let li_inici = document.getElementById("li_inici");
    let li_historia = document.getElementById("li_historia");
    let li_vestit = document.getElementById("li_vestit");
    //let li_famosos = document.getElementById("li_famosos");
    let li_joc = document.getElementById("li_joc");
    let li_tresor = document.getElementById("li_tresor");
    let li_memory = document.getElementById("li_memory");

    li_historia.classList.remove("text-white");
    li_historia.classList.add("text-secondary");
    li_inici.classList.remove("text-secondary");
    li_inici.classList.add("text-white");
    li_vestit.classList.remove("text-secondary");
    li_vestit.classList.add("text-white");
    //li_famosos.classList.remove("text-secondary");
    //li_famosos.classList.add("text-white");
    li_joc.classList.remove("text-secondary");
    li_joc.classList.add("text-white");
    li_tresor.classList.remove("text-secondary");
    li_tresor.classList.add("text-white");
    li_memory.classList.remove("text-secondary");
    li_memory.classList.add("text-white");
}

function canviarGroc() {
    let inici = document.getElementById("pagina_inici");
    let historia = document.getElementById("pagina_blau");
    let vestit = document.getElementById("pagina_groc");
    //let famosos = document.getElementById("pagina_famosos");
    let joc = document.getElementById("pagina_vermell");
    let tresor = document.getElementById("pagina_verd");
    let memory = document.getElementById("pagina_memory");

    inici.style.display = "none";
    inici.classList.add("d-none");
    historia.style.display = "none";
    historia.classList.add("d-none");
    vestit.style.display = "block";
    vestit.classList.remove("d-none");
    //famosos.style.display = "none";
    //famosos.classList.add("d-none");
    joc.style.display = "none";
    joc.classList.add("d-none");
    tresor.style.display = "none";
    tresor.classList.remove("d-none");
    memory.style.display = "none";
    memory.classList.remove("d-none");

    let li_inici = document.getElementById("li_inici");
    let li_historia = document.getElementById("li_historia");
    let li_vestit = document.getElementById("li_vestit");
    //let li_famosos = document.getElementById("li_famosos");
    let li_joc = document.getElementById("li_joc");
    let li_tresor = document.getElementById("li_tresor");
    let li_memory = document.getElementById("li_memory");

    li_vestit.classList.remove("text-white");
    li_vestit.classList.add("text-secondary");
    li_inici.classList.remove("text-secondary");
    li_inici.classList.add("text-white");
    li_historia.classList.remove("text-secondary");
    li_historia.classList.add("text-white");
    //li_famosos.classList.remove("text-secondary");
    //li_famosos.classList.add("text-white");
    li_joc.classList.remove("text-secondary");
    li_joc.classList.add("text-white");
    li_tresor.classList.remove("text-secondary");
    li_tresor.classList.add("text-white");
    li_memory.classList.remove("text-secondary");
    li_memory.classList.add("text-white");
}

function canviarFamosos() {
    let inici = document.getElementById("pagina_inici");
    let historia = document.getElementById("pagina_blau");
    let vestit = document.getElementById("pagina_groc");
    //let famosos = document.getElementById("pagina_famosos");
    let joc = document.getElementById("pagina_vermell");
    let tresor = document.getElementById("pagina_verd");
    let memory = document.getElementById("pagina_memory");

    inici.style.display = "none";
    inici.classList.add("d-none");
    historia.style.display = "none";
    historia.classList.add("d-none");
    vestit.style.display = "none";
    vestit.classList.add("d-none");
    //famosos.style.display = "block";
    //famosos.classList.remove("d-none");
    joc.style.display = "none";
    joc.classList.add("d-none");
    tresor.style.display = "none";
    tresor.classList.remove("d-none");
    memory.style.display = "none";
    memory.classList.remove("d-none");

    let li_inici = document.getElementById("li_inici");
    let li_historia = document.getElementById("li_historia");
    let li_vestit = document.getElementById("li_vestit");
    //let li_famosos = document.getElementById("li_famosos");
    let li_joc = document.getElementById("li_joc");
    let li_tresor = document.getElementById("li_tresor");

    //li_famosos.classList.remove("text-white");
    //li_famosos.classList.add("text-secondary");
    li_inici.classList.remove("text-secondary");
    li_inici.classList.add("text-white");
    li_historia.classList.remove("text-secondary");
    li_historia.classList.add("text-white");
    li_vestit.classList.remove("text-secondary");
    li_vestit.classList.add("text-white");
    li_joc.classList.remove("text-secondary");
    li_joc.classList.add("text-white");
    li_tresor.classList.remove("text-secondary");
    li_tresor.classList.add("text-white");
    li_memory.classList.remove("text-secondary");
    li_memory.classList.add("text-white");
}

function canviarVermell() {
    let inici = document.getElementById("pagina_inici");
    let historia = document.getElementById("pagina_blau");
    let vestit = document.getElementById("pagina_groc");
    //let famosos = document.getElementById("pagina_famosos");
    let joc = document.getElementById("pagina_vermell");
    let tresor = document.getElementById("pagina_verd");
    let memory = document.getElementById("pagina_memory");

    inici.style.display = "none";
    inici.classList.add("d-none");
    historia.style.display = "none";
    historia.classList.add("d-none");
    vestit.style.display = "none";
    vestit.classList.add("d-none");
    //famosos.style.display = "none";
    //famosos.classList.add("d-none");
    joc.style.display = "block";
    joc.classList.remove("d-none");
    tresor.style.display = "none";
    tresor.classList.remove("d-none");
    memory.style.display = "none";
    memory.classList.remove("d-none");

    let li_inici = document.getElementById("li_inici");
    let li_historia = document.getElementById("li_historia");
    let li_vestit = document.getElementById("li_vestit");
    //let li_famosos = document.getElementById("li_famosos");
    let li_joc = document.getElementById("li_joc");
    let li_tresor = document.getElementById("li_tresor");
    let li_memory = document.getElementById("li_memory");

    li_joc.classList.remove("text-white");
    li_joc.classList.add("text-secondary");
    //li_famosos.classList.remove("text-secondary");
    //li_famosos.classList.add("text-white");
    li_inici.classList.remove("text-secondary");
    li_inici.classList.add("text-white");
    li_historia.classList.remove("text-secondary");
    li_historia.classList.add("text-white");
    li_vestit.classList.remove("text-secondary");
    li_vestit.classList.add("text-white");
    li_tresor.classList.remove("text-secondary");
    li_tresor.classList.add("text-white");
    li_memory.classList.remove("text-secondary");
    li_memory.classList.add("text-white");
}

function canviarVerd() 
{
    let inici = document.getElementById("pagina_inici");
    let historia = document.getElementById("pagina_blau");
    let vestit = document.getElementById("pagina_groc");
    //let famosos = document.getElementById("pagina_famosos");
    let joc = document.getElementById("pagina_vermell");
    let tresor = document.getElementById("pagina_verd");
    let memory = document.getElementById("pagina_memory");

    inici.style.display = "none";
    inici.classList.add("d-none");
    historia.style.display = "none";
    historia.classList.add("d-none");
    vestit.style.display = "none";
    vestit.classList.add("d-none");
    //famosos.style.display = "none";
    //famosos.classList.add("d-none");
    joc.style.display = "none";
    joc.classList.remove("d-none");
    tresor.style.display = "block";
    tresor.classList.remove("d-none");
    memory.style.display = "none";
    memory.classList.remove("d-none");

    let li_inici = document.getElementById("li_inici");
    let li_historia = document.getElementById("li_historia");
    let li_vestit = document.getElementById("li_vestit");
    //let li_famosos = document.getElementById("li_famosos");
    let li_joc = document.getElementById("li_joc");
    let li_tresor = document.getElementById("li_tresor");
    let li_memory = document.getElementById("li_memory");

    li_joc.classList.remove("text-secondary");
    li_joc.classList.add("text-white");
    li_tresor.classList.remove("text-white");
    li_tresor.classList.add("text-secondary");
    //li_famosos.classList.remove("text-secondary");
    //li_famosos.classList.add("text-white");
    li_inici.classList.remove("text-secondary");
    li_inici.classList.add("text-white");
    li_historia.classList.remove("text-secondary");
    li_historia.classList.add("text-white");
    li_vestit.classList.remove("text-secondary");
    li_vestit.classList.add("text-white");
    li_memory.classList.remove("text-secondary");
    li_memory.classList.add("text-white");
}




// JOC MEMORY

function mostrarSeccio(seccioId, botoActiuId, seccions, botons) {
    // Mostra només la secció activa
    seccions.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            const mostrar = (id === seccioId);
            element.style.display = mostrar ? "block" : "none";
            element.classList.toggle("d-none", !mostrar);
        }
    });

    // Actualitza els estils del menú
    botons.forEach(id => {
        const boto = document.getElementById(id);
        if (boto) {
            boto.classList.remove("text-white", "text-secondary");
            boto.classList.add(id === botoActiuId ? "text-white" : "text-secondary");
        }
    });
}

function canviarMemory() {
    mostrarSeccio("pagina_memory", "li_memory", 
        ["pagina_inici", "pagina_blau", "pagina_groc", "pagina_vermell", "pagina_verd", "pagina_memory"],
        ["li_inici", "li_joc", "li_arbre", "li_memory"]
    );
    iniciarMemory();
}

let cartesGirades = [];
let bloquejat = false;
const imatges = ["img/memory/duo.jpeg", "img/memory/marc.JPG", "img/memory/martini.png", "img/memory/meritxell.jpeg", 
    "img/memory/mossen.jpg", "img/memory/nana.png", "img/memory/pombeta.png", "img/memory/ramon.png", "img/memory/gsm.png",];

function iniciarMemory() {
    const cartes = [...imatges, ...imatges].sort(() => 0.5 - Math.random());
    const container = document.getElementById("memory-game");
    container.innerHTML = '';
    cartesGirades = [];
    bloquejat = false;

    cartes.forEach((src, index) => {
        const carta = document.createElement("div");
        carta.classList.add("col", "memory-card", "border", "bg-light", "p-3");
        carta.dataset.icon = src;
        carta.dataset.index = index;
        carta.style.cursor = "pointer";
        carta.innerHTML = `<img src="img/question.png" alt="?" class="img-fluid" style="max-height: 80px;">`; // cara oculta
        carta.onclick = () => girarCarta(carta);
        container.appendChild(carta);
    });

    document.getElementById("memory-status").textContent = '';
}


function girarCarta(carta) {
    if (bloquejat || carta.classList.contains("matched")) return;

    const icon = carta.dataset.icon;
    carta.innerHTML = `<img src="${icon}" alt="imatge" class="img-fluid" style="max-height: 80px;">`;
    cartesGirades.push(carta);

    if (cartesGirades.length === 2) {
        bloquejat = true;
        const [c1, c2] = cartesGirades;

        if (c1.dataset.icon === c2.dataset.icon && c1.dataset.index !== c2.dataset.index) {
            c1.classList.add("matched", "bg-success");
            c2.classList.add("matched", "bg-success");

            // Esperem una mica abans de desbloquejar
            setTimeout(() => {
                cartesGirades = [];
                bloquejat = false;

                // Comprovem si el joc ha acabat
                const totalCartes = document.querySelectorAll(".memory-card").length;
                const cartesCorrectes = document.querySelectorAll(".memory-card.matched").length;

                if (totalCartes === cartesCorrectes) {
                    document.getElementById("memory-status").textContent = "🎉 Has completat el joc! Molt bé!";
                }
            }, 300);
        } else {
            setTimeout(() => {
                c1.innerHTML = `<img src="img/question.png" alt="?" class="img-fluid" style="max-height: 80px;">`;
                c2.innerHTML = `<img src="img/question.png" alt="?" class="img-fluid" style="max-height: 80px;">`;
                cartesGirades = [];
                bloquejat = false;
                document.getElementById("memory-status").textContent = '';
            }, 1000);
        }
    }
}



function reiniciarMemory() {
    iniciarMemory();
}
