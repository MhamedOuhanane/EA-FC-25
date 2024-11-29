//importer les données json des annonces à partir de son chemin
import joueurs from "../data/players.json" with{type: "json"}


//ajouter un joueur au terrain
//A partir de form
conferjoue.onclick= () =>{
    mudalajout.classList.toggle("hidden");
    joueurs.players.forEach((Element) => {
        cardsform.innerHTML +=`<div class="BadgeAjout1 ${"bg" + Element.position} relative w-[7rem] h-[10rem] hover:scale-95 flex flex-col  items-center py-4 text-white">
                                <div class="flex justify-start  w-full h-[75%] p-[12%]">
                                    <div class="max-w-7 flex flex-col items-center pt-3 z-1">
                                        <span  class="scorejou1 text-[110%]">${Element.rating}</span><span class="typescore1">${Element.position}</span>
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
                                </div
                                <div class="flex justify-center gap-2  z-1">
                                    <img src=${Element.flag} class="w-[11%]" alt="flag">
                                    <img src=${Element.logo} class="w-[11%]" alt="logo">
                                </div>
                            </div>`;
    });

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

    BadgeAjout1.forEach((Element , index) =>{
        Element.onclick= () =>{
            if (effectif.value == "Effectif") {
                effectif.style.border = "2px solid red "
            } else if (effectif.value == "Titularisés") {
                



                                
                mudalajout.classList.toggle("hidden");
            } else {
                







                mudalajout.classList.toggle("hidden");
            }
        }
    });

};


//Ajouter a partire du botton de badge
function AffichAjou(POSITION){
    joueurs.players.forEach((Element) => {
        if (Element.position == POSITION) {
            AjoutparBadge.innerHTML +=`<div class="BadgeAjout2 ${"bg" + Element.position} relative w-[7rem] h-[10rem] hover:scale-95 flex flex-col  items-center py-4 text-white">
                                <div class="flex justify-start  w-full h-[75%] p-[12%]">
                                    <div class="max-w-7 flex flex-col items-center pt-3 z-1">
                                        <span  class="scorejou1 text-[110%]">${Element.rating}</span><span class="typescore1">${Element.position}</span>
                                    </div>
                                </div>
                                <img class="absolute  z-0 mb-1" src=${Element.photo}>
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
                                </div
                                <div class="flex justify-center gap-2  z-1">
                                    <img src=${Element.flag} class="w-[11%]" alt="flag">
                                    <img src=${Element.logo} class="w-[11%]" alt="logo">
                                </div>
                            </div>`;
        }
        
    });
}

    //Ajouter au bloc de terrain

document.querySelectorAll(".badgebouton").forEach((Element , index) =>{
    Element.addEventListener("click" , () => {

        MudalBadge.classList.toggle("hidden");
        // document.querySelector("body").addEventListener("click" , () =>{
        //     MudalBadge.classList.add("hidden");
        // });
        let BadgeAjout2 = document.querySelectorAll(".BadgeAjout2");

        //Mise à jour de containers des bage ajouter
        function MISEAJOURAFFBAD() {
            AffichAjou(Element.children[1].textContent);
            document.querySelectorAll(".BadgeAjout2").forEach((ele) =>{
                document.querySelectorAll(".BadgeAjout1").forEach((elem) =>{ 
                    if (ele.children[2].textContent == elem.children[2].textContent) {
                        ele.classList.toggle("hidden");
                        ele.classList.replace("BadgeAjout2" , "BadgeAjout1");
                    }
                });
                // console.log(ele.classList.children[0]);
                
            });

            BadgeAjout2 = document.querySelectorAll(".BadgeAjout2");
        };

        MISEAJOURAFFBAD();
        
        BadgeAjout2.forEach(element => {
            console.log(BadgeAjout2);
            element.addEventListener("click", () =>{
                
                
                if (element.parentNode == AjoutparBadge) {
                    console.log(Element.parentNode.children.length);
                    
                    if (Element.parentNode.children.length == 1) {
                        Element.parentNode.appendChild(element);
                        element.classList.replace("BadgeAjout2" , "BadgeAjout1")
                        Element.classList.toggle("hidden");
                        MudalBadge.classList.toggle("hidden");
                    } else if (Element.parentNode.children.length == 2) {
                        Element.parentNode.children[1].replace("BadgeAjout1" , "BadgeAjout2");
                        console.log(Element.parentNode.lastChild);
                        console.log(true);
                        Element.parentNode.children[1].remove();
                        
                        Element.parentNode.appendChild(element);
                        Element.classList.toggle("hidden");
                        MudalBadge.classList.toggle("hidden");
                    }
                    
                    
                    AjoutparBadge.innerHTML = ``;
                } else if(element.parentNode == Element.parentNode) {
                    console.log(AjoutparBadge);
                    MudalBadge.classList.toggle("hidden");
                    MISEAJOURAFFBAD();
                }

            });
        });
        BadgeAjout2 = document.querySelectorAll(".BadgeAjout2");
        

    });
});

    //Ajouter au bloc de remplaçants
