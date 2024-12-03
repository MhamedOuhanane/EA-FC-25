//importer les données json des annonces à partir de son chemin
import joueurs from "../data/players.json" with{type: "json"};
let existJoueurs = JSON.parse(localStorage.getItem("Joueurs")) || [];
if (existJoueurs.length == 0) {
    localStorage.setItem("Joueurs" , JSON.stringify(joueurs));
    console.log(joueurs);
    
};



let Joueur = JSON.parse(localStorage.getItem("Joueur")) || [];
//affiche les joueurs qui appartient au terrain et au remplaçant a partir de localstorage
if (Joueur != []) {
    Joueur.forEach(Element => {
        document.querySelectorAll("#AjoutparBadge .BadgeAjout2").forEach( element => {
            let namejoueur = element.children[2].textContent;
            if ((Element.name == namejoueur)) {
                let container1 = document.querySelectorAll(`#${Element.effectif} .badgebouton span`);
                console.log(container1);
                
                for (let index = 0; index < container1.length; index++) {
                    const ele = container1[index];
                    const containerbadge = document.querySelectorAll(`#${Element.effectif} > div`)[index];
                    if ((ele.textContent == Element.position) && (containerbadge.children.length == 1)) {
                        ele.parentNode.classList.toggle("hidden");
                        element.classList.remove("hidden");
                        containerbadge.appendChild(element);
                        console.log(containerbadge);
                        break;
                    };
                }
            }
        });
    });
};

//save les joueurs qui appartient au terrain et au remplaçant
let container = document.querySelectorAll(".badgebouton");
souvgarder.onclick = () =>{
    Joueur = [];
    container.forEach(Element => {
        let parentbag = Element.parentNode;
        if (parentbag.children.length == 2) {
            let name = parentbag.children[1].children[2].textContent;
            let positionjoue = "";
            joueurs.players.forEach(element =>{
                if (name == element.name) {
                    positionjoue = element.position;
                };
            });
            let Effectif = parentbag.parentNode.id;
            let info = {
                name: name,
                position: positionjoue,
                effectif: Effectif
            };
            Joueur.push(info);
            
        };
    });
    console.log(Joueur);
    
    localStorage.setItem("Joueur" , JSON.stringify(Joueur));
};

//drag and drpo
let BadgeAjout2 = document.querySelectorAll(".BadgeAjout2");
let drag = null;
let parentbadge = null;

BadgeAjout2.forEach(badge =>{
    badge.addEventListener('dragstart' , () =>{
        badge.classList.add("opacity-50");
        drag = badge;
        DRAGDROP();
    });
    
    badge.addEventListener('dragend' , () =>{
        badge.classList.remove("opacity-50");
        drag = null;
        parentbadge = null;
    });
});
function DRAGDROP() {
    let posi = drag.children[0].children[0].children[1].textContent;
    document.querySelectorAll(`.dragbox${posi}`).forEach(element =>{
        element.addEventListener("dragover" , (ele) =>{
                ele.preventDefault();
                element.classList.add("scale-90");
        });
        element.addEventListener("dragleave" , () =>{
            element.classList.remove("scale-90");
        });
        element.addEventListener("drop" , ()=>{
            if (element.children.length == 1) {
                drag.parentNode.children[0].classList.remove("hidden");
                element.children[0].classList.add("hidden");
                element.appendChild(drag);
            } else {
                drag.parentNode.appendChild(element.children[1]);
                element.appendChild(drag);
            };
        });
    });
};