//importer les données json des annonces à partir de son chemin
import joueurs from "../data/players.json" with{type: "json"}

//Ajouter un nouveau joueur
Ajounouv.addEventListener("click" , ()=>{
    mudalnouv.classList.remove("hidden");
    cancelnouv.onclick= ()=>{
        mudalnouv.classList.add("hidden");
    };
    let inputNGK = document.querySelectorAll(".inputNGK");
    inputNGK.forEach(Element=>{
        Element.classList.add("hidden");
    });

    function POSITIONSELECT() {
        console.log(document.querySelectorAll(".inputNGK"));
        if (positionnouv.value == "GK") {
            document.querySelectorAll(".inputGK").forEach(Element=>{
                Element.classList.remove("hidden");
            });
            inputNGK.forEach(Element=>{
                Element.classList.add("hidden");
            });
        } else {
            inputNGK.forEach(Element=>{  
                Element.classList.remove("hidden");
            });
            document.querySelectorAll(".inputGK").forEach(Element=>{  
                Element.classList.add("hidden");
            });
            
        };
    };
    positionnouv.addEventListener("change", ()=>{
        POSITIONSELECT();
    });

    let nouvjoue = {};
    Create.onclick= () =>{
        validation = false;
        let infjoueur = document.querySelectorAll("#mudalnouv input");
        infjoueur.forEach(Element =>{
            if (Element.value == "") {
                Element.ariaPlaceholder = "Veuillez entrer une valeur!";
                Element.style.border = "2px solid red";
                validation = false;
            }
            else{
                
            }
        });
    }
});


//ajouter un joueur au terrain
//A partir de form
conferjoue.onclick= () =>{
    mudalajout.classList.toggle("hidden");
    let inputname = document.querySelector("#mudalajout input");
    function condAffich(){
        joueurs.players.forEach(Element => {
            function fucAffich(){
                cardsform.innerHTML +=`<div class="${"bg" + Element.position} relative w-[7rem] h-[10rem] hover:scale-95 flex flex-col  items-center py-4 text-white">
                            <div class="flex justify-start  w-full h-[75%] p-[12%]">
                                <div class="max-w-7 flex flex-col items-center pt-3">
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
            };

    
};