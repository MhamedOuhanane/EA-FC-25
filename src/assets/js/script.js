// ajouter class hidden au munu des joueus
document.querySelector(".mudoljou").classList.add("hidden");
//  document.querySelector(".mudoljou").



//importer les données json des annonces à partir de son chemin
import Joueurs from "../data/players.json" with{type: "json"};

// affichage des joueur dans le menu apres le click sur le bouton joueurs
munujoue.addEventListener('click' , ()=>{
    document.querySelector(".mudoljou").classList.remove("hidden");
    canselmenujou.onclick=  ()=>{
        document.querySelector(".mudoljou").classList.toggle("hidden");
    };

    Joueurs.players.forEach(Element =>{
        joueurs.innerHTML +=`<div class="cardplayer ${"bg" + Element.position} relative w-[7rem] h-[10rem] md:w-[12rem] md:h-[17rem] hover:scale-95 flex flex-col  items-center py-4 md:py-7">
                            <div class="flex justify-start  w-full h-[75%] p-[12%]">
                                <div class="max-w-7 flex flex-col items-center pt-3 z-10">
                                    <span  class="scorejou text-[110%] md:text-[120%]">${Element.rating}</span><span class="typescore">${Element.position}</span>
                                </div>
                            </div>
                            <img class="absolute  z-0 mb-1 " src=${Element.photo} alt="image de joueur">
                            <span class="md:text-xl z-10 mb-1 bg-black bg-opacity-50 px-2">${Element.name}</span>
                            <div class="flex justify-evenly gap-[0.2rem] md:gap-1 z-10 ${Element.position == "GK" ? "hidden" : ""}">
                                <div class="flex flex-col items-center">
                                    <span class="typescore">PAC</span>
                                    <span class="scorejou">${Element.pace}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore">SHO</span>
                                    <span class="scorejou">${Element.shooting}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore">PAS</span>
                                    <span class="scorejou">${Element.passing}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore">DRI</span>
                                    <span class="scorejou">${Element.dribbling}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore">DEF</span>
                                    <span class="scorejou">${Element.defending}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore">PHY</span>
                                    <span class="scorejou">${Element.physical}</span>
                                </div>
                            </div>
                            <div class="flex justify-evenly gap-[0.2rem] md:gap-1 z-10 ${Element.position != "GK" ? "hidden" : ""}">
                                <div class="flex flex-col items-center">
                                    <span class="typescore">DIV</span>
                                    <span class="scorejou">${Element.diving}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore">HAN</span>
                                    <span class="scorejou">${Element.handling}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore">KIC</span>
                                    <span class="scorejou">${Element.kicking}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore">REF</span>
                                    <span class="scorejou">${Element.reflexes}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore">SPE</span>
                                    <span class="scorejou">${Element.speed}</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class="typescore">POS</span>
                                    <span class="scorejou">${Element.positioning}</span>
                                </div>
                            </div>
                            <div class="flex justify-center gap-2 md:gap-4  z-1">
                                <img class="w-[11%]" src=${Element.flag} alt="flag">
                                <img class="w-[11%]" src=${Element.logo}  alt="logo">
                            </div>
                        </div>`;

    });
});


