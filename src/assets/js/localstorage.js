//importer les données json des annonces à partir de son chemin
import joueurs from "../data/players.json" with{type: "json"}

//save les joueurs qui appartient au terrain et au remplaçant
// let formation = [];
let container = document.querySelectorAll(".badgebouton");

souvgarder.onclick = () =>{
    let formation = [];
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
            formation.push(info);
        };
    });
    console.log(formation);
    
};