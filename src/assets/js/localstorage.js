//importer les données json des annonces à partir de son chemin
import joueurs from "../data/players.json" with{type: "json"}
let Joueur = JSON.parse(localStorage.getItem("Joueur")) || [];

//save les joueurs qui appartient au terrain et au remplaçant
// let formation = [];

if (Joueur != []) {
    Joueur.forEach(Element => {
        document.querySelectorAll("#AjoutparBadge .BadgeAjout2").forEach( element => {
            let namejoueur = element.children[2].textContent;
            if ((Element.name == namejoueur) && (Element.effectif == "titularisés")) {
                let container1 = document.querySelectorAll("#titularisés .badgebouton span");
                for (let index = 0; index < container1.length; index++) {
                    const ele = container1[index];
                    if (ele.textContent == Element.position) {
                        ele.parentNode.classList.toggle("hidden");
                        element.classList.remove("hidden");
                        document.querySelectorAll("#titularisés > div")[index].appendChild(element);
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
        };
    });
    console.log(Joueur);
    
    localStorage.setItem("Joueur" , JSON.stringify(Joueur));
};
