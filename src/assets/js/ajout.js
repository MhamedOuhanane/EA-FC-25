//importer les données json des annonces à partir de localstorage
let joueurs = JSON.parse(localStorage.getItem("Joueurs"));



joueurs.players.forEach((Element) => {
    AjoutparBadge.innerHTML +=`<div class="BadgeAjout2 ${"bg" + Element.position} relative w-[14vw] h-[20vw] md:w-[10vw] md:h-[14vw] hover:scale-95 flex flex-col justify-evenly  items-center py-4 text-white">
                        <div class="flex justify-start  w-full h-[70%] p-[4%] md:h-[50%] px-[12%] md:py-[6%] lg:py-[10%]">
                            <div class="max-w-7 flex flex-col items-center z-10 my-1">
                                <span  class="scorejou1 text-[1.4vw]">${Element.rating}</span><span class="joueurpos typescore1 text-[0.8vw]">${Element.position}</span>
                            </div>
                        </div>
                        <img class="absolute  z-0 mb-1" src=${Element.photo}>
                        <span class="bg-black bg-opacity-45 z-10 mb-1 text-[1.5vw]">${Element.name}</span>
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

MudalBadge.classList.add("hidden");


// document.body.classList.

    //Ajouter au bloc de terrain
document.querySelectorAll(".badgebouton").forEach((Element) =>{
    let parentbag = Element.parentNode;
    Delete.onclick = () =>{
        MudalBadge.classList.toggle("hidden");
    };

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


    BadgeAjout2.forEach(element => {
        element.onclick=  () =>{
            if (element.parentNode == AjoutparBadge) {
                AjoutparBadge.appendChild(parentbag.children[1]);
                parentbag.appendChild(element);
                MudalBadge.classList.toggle("hidden");
            } else {
                parentbag = element.parentNode;
                MudalBadge.classList.toggle("hidden");
                MISEAJOURAFFBAD();
                Delete.onclick = () =>{
                    if (parentbag.children.length != 1) {
                        MudalBadge.classList.toggle("hidden");
                        parentbag.children[0].classList.remove("hidden");
                        AjoutparBadge.appendChild(parentbag.children[1]);
                    } else if (Element.parentNode.children.length == 1) {
                        MudalBadge.classList.toggle("hidden");
                    };
                };
            };
        };
    });
    
    Element.addEventListener("click" , () => {
        parentbag = Element.parentNode;
        MudalBadge.classList.toggle("hidden");
        //annulation de l'affichage des badge dans le cas d'ajout
        Delete.onclick = () =>{
            if (parentbag.children.length != 1) {
                MudalBadge.classList.toggle("hidden");
                parentbag.children[0].classList.remove("hidden");
                AjoutparBadge.appendChild(parentbag.children[1]);
            } else if (Element.parentNode.children.length == 1) {
                MudalBadge.classList.toggle("hidden");
            };
        };

        MISEAJOURAFFBAD();
        
        BadgeAjout2.forEach(element => {
            element.onclick=  () =>{
                console.log(true);
                
                if (element.parentNode == AjoutparBadge) {
                        console.log("true1");
                    if ((parentbag.children.length == 1)) {
                        parentbag.appendChild(element);
                        Element.classList.add("hidden");
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
                    Delete.onclick = () =>{
                        if (parentbag.children.length != 1) {
                            MudalBadge.classList.toggle("hidden");
                            parentbag.children[0].classList.remove("hidden");
                            AjoutparBadge.appendChild(parentbag.children[1]);
                        } else if (Element.parentNode.children.length == 1) {
                            MudalBadge.classList.toggle("hidden");
                        };
                    };
                };
            };
        });
        
    });
    MudalBadge.onclick= (Element)=>{
        BadgeAjout2.forEach(element =>{
            if (!element.contains(Element.target)) {
                MudalBadge.classList.add("hidden");
            };
        });
    };
});

