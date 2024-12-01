//importer les données json des annonces à partir de son chemin
import joueurs from "../data/players.json" with{type: "json"}


//ajouter un joueur au terrain
//A partir de form
joueurs.players.forEach((Element) => {
    cardsform.innerHTML +=`<div class="BadgeAjout1 ${"bg" + Element.position} relative w-[7rem] h-[10rem] hover:scale-95 flex flex-col  items-center py-4 text-white">
                            <div class="flex justify-start  w-full h-[75%] p-[12%]">
                                <div class="max-w-7 flex flex-col items-center pt-3 z-1">
                                    <span  class="scorejou1 text-[110%]">${Element.rating}</span><span class="typescore1 joueurposition">${Element.position}</span>
                                </div>
                            </div>
                            <img class="absolute  -z-1 mb-1" src=${Element.photo}>
                            <span class="z-10 mb-1 ">${Element.name}</span>
                            <div class="flex justify-evenly gap-[0.2rem] md:gap-1 z-10 ${Element.position == "GK" ? "hidden" : ""}">
                                <div class="flex flex-col items-center">
                                    <span class="typescore1">PAC</span>
                                    <span class="scorejou1">${Element.pace}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore1">SHO</span>
                                    <span class="scorejou1">${Element.shooting}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore1">PAS</span>
                                    <span class="scorejou1">${Element.passing}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore1">DRI</span>
                                    <span class="scorejou1">${Element.dribbling}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore1">DEF</span>
                                    <span class="scorejou1">${Element.defending}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore1">PHY</span>
                                    <span class="scorejou1">${Element.physical}</span>
                                </div>
                            </div>
                            <div class="flex justify-evenly gap-[0.2rem] md:gap-1 z-10 ${Element.position != "GK" ? "hidden" : ""}">
                                <div class="flex flex-col items-center">
                                    <span class="typescore1">DIV</span>
                                    <span class="scorejou1">${Element.diving}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore1">HAN</span>
                                    <span class="scorejou1">${Element.handling}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore1">KIC</span>
                                    <span class="scorejou1">${Element.kicking}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore1">REF</span>
                                    <span class="scorejou1">${Element.reflexes}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore1">SPE</span>
                                    <span class="scorejou1">${Element.speed}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore1">POS</span>
                                    <span class="scorejou1">${Element.positioning}</span>
                                </div>
                            </div>
                            <div class="flex justify-center gap-2  z-1">
                                <img src=${Element.flag} class="w-[11%]" alt="flag">
                                <img src=${Element.logo} class="w-[11%]" alt="logo">
                            </div>
                        </div>`;
});
conferjoue.onclick= () =>{
    mudalajout.classList.toggle("hidden");

    let inputname = document.querySelector("#mudalajout input");
    let BadgeAjout1 = document.querySelectorAll(".BadgeAjout1");
    //Filtrage des joueur par name
    inputname.oninput= ()=>{
        joueurs.players.forEach((Element , index) =>{
            BadgeAjout1[index].classList.remove("hidden");
            if (inputname.value == "") {
                BadgeAjout1[index].classList.remove("hidden");
                position.value = "Tous";
            } else if (inputname.value == Element.name) {
                position.value = Element.position;
                if (inputname.value != Element.name) {
                    BadgeAjout1[index].classList.add("hidden");
                }
            } else{
                BadgeAjout1[index].classList.add("hidden");

            }
        });
    };
        //Filtrage des joueur par position
    position.oninput= ()=>{
        inputname.value = "";
        joueurs.players.forEach((Element , index) =>{
            BadgeAjout1[index].classList.remove("hidden");
            if (position.value == "Tous") {                
                BadgeAjout1[index].classList.remove("hidden");
            } else if (position.value != Element.position) {
                BadgeAjout1[index].classList.add("hidden");
            }
            
        });
    };

    // L'ajout des joueurs à partir d'un form

    effectif.oninput = () =>{
        if (effectif.value == "Effectif") {
            effectif.style.border = "";
        } else {
            effectif.style.border = "2px solid green";
        }
    };

    let BadgeAjout2 = document.querySelectorAll(".BadgeAjout2");
    let Ajoutterrain = document.querySelectorAll("#titularisés .badgebouton span");
    let Ajoutrempla = document.querySelectorAll("#titularisés .badgebouton span");

    
    BadgeAjout1.forEach(Element =>{
        Element.onclick= () =>{
            let condiajout = false;
            if (effectif.value == "Effectif") {
                effectif.style.border = "2px solid red";
            } else if (effectif.value == "Titularisés") {
                console.log("true10");
                
                for (let i = 0; i < Ajoutterrain.length; i++) {
                    if ((Element.children[0].children[0].children[1].textContent == Ajoutterrain[i].textContent) && (Ajoutterrain[i].parentNode.parentNode.children.length == 1)) {
                        BadgeAjout2.forEach(Ele =>{                            
                            if ((Element.children[2].textContent == Ele.children[2].textContent)) {
                                console.log(Ele.children[2].textContent);
                                console.log(Element.children[2].textContent);
                                Ajoutterrain[i].parentNode.parentNode.appendChild(Ele);
                                console.log(Ajoutterrain[i].parentNode.parentNode);
                                condiajout = true;
                            };
                        });
                    };
                    if (condiajout == true) {
                        Ajoutterrain[i].parentNode.classList.add("hidden");
                        cancelform();

                        break;
                    }
                };
                
            } else {
                console.log(false);







                mudalajout.classList.toggle("hidden");
            }
        }
    });

    //Anulation de la form d'ajout des joueurs
    function cancelform() {
        cancelformajout.onclick = () =>{
            inputname.value = "";
            position.value = "Tous";
            effectif.value = "Effectif";
            effectif.style.border = "";
            joueurs.players.forEach((Element , index) =>{
                BadgeAjout1[index].classList.remove("hidden");
            });
            mudalajout.classList.toggle("hidden");
        };
    };
    cancelform();
};

