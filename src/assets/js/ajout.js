//importer les données json des annonces à partir de son chemin
import joueurs from "../data/players.json" with{type: "json"}

joueurs.players.forEach((Element) => {
    AjoutparBadge.innerHTML +=`<div class="BadgeAjout2 ${"bg" + Element.position} relative w-[7rem] h-[10rem] hover:scale-95 flex flex-col  items-center py-4 text-white">
                        <div class="flex justify-start  w-full h-[75%] p-[12%]">
                            <div class="max-w-7 flex flex-col items-center pt-3 z-10">
                                <span  class="scorejou1 text-[110%]">${Element.rating}</span><span class="joueurpos typescore1">${Element.position}</span>
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
                        </div>
                        <div class="flex justify-center gap-2  z-10">
                            <img src=${Element.flag} class="w-[11%]" alt="flag">
                            <img src=${Element.logo} class="w-[11%]" alt="logo">
                        </div>
                    </div>`;
});

    //Ajouter au bloc de terrain

document.querySelectorAll(".badgebouton").forEach((Element) =>{
    Element.addEventListener("click" , () => {
        let parentbag = Element.parentNode;
        
        MudalBadge.classList.toggle("hidden");
        let BadgeAjout2 = document.querySelectorAll(".BadgeAjout2");

        //Mise à jour de containers des bage ajouter
        function MISEAJOURAFFBAD() {
            BadgeAjout2 = document.querySelectorAll(".BadgeAjout2");
            BadgeAjout2.forEach((element , index) =>{
                if (element.parentNode == AjoutparBadge) {
                    if (parentbag.children[0].children[1].textContent == document.querySelectorAll(".joueurpos")[index].textContent) {
                        element.classList.remove("hidden");
                    } else {
                        element.classList.add("hidden");
                    };
                };
            });

        };

        MISEAJOURAFFBAD();
        
        BadgeAjout2.forEach(element => {
            element.onclick=  () =>{
                console.log(true);
                
                if (element.parentNode == AjoutparBadge) {
                        console.log("true1");
                    if ((parentbag.children.length == 1)) {
                        console.log("true2");
                        
                        parentbag.appendChild(element);
                        Element.classList.toggle("hidden");
                        MudalBadge.classList.toggle("hidden");
                    } else {
                        console.log("true3");
                        AjoutparBadge.appendChild(parentbag.children[1]);
                        parentbag.appendChild(element);
                        MudalBadge.classList.toggle("hidden");
                    };
                } else {
                    console.log("true4");
                    parentbag = element.parentNode;
                    MudalBadge.classList.toggle("hidden");
                    MISEAJOURAFFBAD();
                };

            };
            MudalBadge.onclick= ()=>{
                if (!MudalBadge.contains(element)) {
                    MudalBadge.classList.add("hidden");
                };
            };
        });
    });
});














//annulation de l'affichage des badge dans le cas d'ajout
cancelaffich3.onclick= () =>{
    MudalBadge.classList.toggle("hidden");
};

//suppression des badges des joueurs
// document.querySelectorAll(".deletbadge").forEach(element =>{
// });

