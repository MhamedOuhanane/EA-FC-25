//importer les données json des annonces à partir de localstorage
let joueurs = JSON.parse(localStorage.getItem("Joueurs"));

let Joueur = JSON.parse(localStorage.getItem("Joueur")) || [];

//save les joueurs qui appartient au terrain et au remplaçant
// let formation = [];

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
            console.log(Joueur);
            
        };
    });
    console.log(Joueur);
    
    localStorage.setItem("Joueur" , JSON.stringify(Joueur));
};
