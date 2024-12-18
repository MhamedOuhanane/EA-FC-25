//importer les données json des annonces à partir de localstorage
let joueurs = JSON.parse(localStorage.getItem("Joueurs"));

//Ajouter un nouveau joueur
Ajounouv.addEventListener("click" , ()=>{
    mudalnouv.classList.remove("hidden");
    document.body.classList.toggle("overflow-hidden");
    
    
    let inforGK = document.querySelectorAll(".inputGK");
    let inforNGK = document.querySelectorAll(".inputNGK");
    inforNGK.forEach(Element=>{
        Element.classList.add("hidden");
    });
    inforGK.forEach(Element=>{
        Element.classList.remove("hidden");
    });

    function POSITIONSELECT() {
        if (positionnouv.value == "GK") {
            inforGK.forEach(Element=>{
                Element.classList.toggle("hidden");
            });
            inforNGK.forEach(Element=>{
                Element.classList.toggle("hidden");
            });
        } else {
            inforNGK.forEach(Element=>{  
                Element.classList.toggle("hidden");
            });
            inforGK.forEach(Element=>{  
                Element.classList.toggle("hidden");
            });
            
        };
    };
    positionnouv.addEventListener("change", ()=>{
        POSITIONSELECT();
    });

    let nouvjoue = {};

    //Validation des information des nouveau joueur ajouter
    let Validation = false;    
    let inputurl = document.querySelector('#mudalnouv input[type="url"]');
    let inputnumber = document.querySelectorAll('#mudalnouv input[type="number"]');
        //validation des input de type text (Regex)
    inputname.addEventListener("input" , () => {
        if ( /^[a-zéèêàâùûîïöäüÿç\-\s]{5,20}$/i.test(inputname.value) ) {   
            inputname.style.backgroundColor = "rgb(187 247 208)";
            Validation = true;
        } else {
            inputname.style.backgroundColor = "rgb(254 202 202)";
            Validation = false;
        };
        if (inputname.value == "") {
            inputname.style.backgroundColor = "";
        };
    });
    
        //validation input de type url pour le photo
    inputurl.oninput = () => {
        if ( /^https:\/\/[a-z0-9.-]+\/[a-z0-9\/\._-]+\.(png|jpg|JPG|webp)(\?[\w&=.-]+)?/.test(inputurl.value) ) {
            inputurl.style.backgroundColor = "rgb(187 247 208)";
            
            Validation = true;
        } else {
            inputurl.style.backgroundColor = "rgb(254 202 202)";
            Validation = false;
        };
        if (inputurl.value == "") {
            inputurl.style.backgroundColor = "";
        };
    }; 
        //    validation des input de type number (Regex)
    inputnumber.forEach(Element =>{
        Element.oninput = () => {
            if ( (/^[0-9]{2}$/.test(Element.value)) && (Element.value != "00") ) {
                Element.style.backgroundColor = "rgb(187 247 208)";
                Validation = true;
            } else {
                Element.style.backgroundColor = "rgb(254 202 202)";
                Validation = false;
            };
            if (Element.value == "") {
                Element.style.backgroundColor = "";
            }
        };
    });
        // serch contry par value d'input nationality
    let urlcontry = "";
    let namecontry = "";
    inputcontry.addEventListener("input" , ()=>{
        inputcontry.style.backgroundColor = "rgb(254 202 202)";
        Validation = false;
        joueurs.contrys.forEach(Element =>{
            if (new RegExp(`^${Element.name}$`, 'i').test(inputcontry.value)) {
                urlcontry = Element.file_url;
                namecontry = inputcontry.value;
                inputcontry.style.backgroundColor = "rgb(187 247 208)";
                Validation = true;
            } else if (inputcontry.value == "") {
                inputcontry.style.backgroundColor = "";
                Validation = false;
            };
        });
    });

        // serch de club dans mon fichier json par value d'input nationality
    let nameclub = "";
    let urlclub = "";
    inputclub.addEventListener("input" , ()=>{
        inputclub.style.backgroundColor = "rgb(254 202 202)";
        Validation = false;
        joueurs.clubs.forEach(Element =>{
            if (new RegExp(`^${Element.name}$`,'i').test(inputclub.value)) {
                nameclub = Element.name;
                urlclub = Element.image_url;
                inputclub.style.backgroundColor = "rgb(187 247 208)";
                Validation = true;
            } else if (inputclub.value == ""){
                inputclub.style.backgroundColor = "rgb(254 202 202)";
                Validation = false;
            };
        });
    });

    //L'ajout des information au fichier json
    let infor = document.querySelectorAll(`.input${positionnouv.value}`);
    Erreurexist.classList.add("hidden"); //ajouter "hidden" au class container d'erreur pour l'existanse de joueur
    Create.onclick= () =>{
        for (let index = 0; index < joueurs.players.length; index++) {
            const element = joueurs.players[index];
                if (new RegExp(`^${element.name}$`,'i').test(inputname.value)){
                    Erreurexist.classList.toggle("hidden");
                    OK1.onclick = () =>{
                        Erreurexist.classList.toggle("hidden");
                    }
                    Validation = false;
                };
        };
    
        // verification des value des information de nouveau joueur 
        function PositionValue() {
            if (Validation == true) {
                if (positionnouv.value == "GK") {
                    inforGK.forEach(Element =>{
                        if (Element.value == "") {
                            Element.style.backgroundColor = "rgb(254 202 202)";
                            Validation = false
                            Erreur.classList.remove("hidden");
                        };
                    }); 
                } else {
                    inforNGK.forEach(Element =>{
                        if (Element.value == "") {
                            Element.style.backgroundColor = "rgb(254 202 202)";
                            Validation = false
                            Erreur.classList.remove("hidden");
                        };
                    }); 
                };
            };
        }
        PositionValue();

        positionnouv.oninput = () =>{
            PositionValue();
        };

        if ((Validation == true)){
            if (positionnouv.value != "GK") {
                nouvjoue = {
                    name: inputname.value,
                    photo: inputurl.value,
                    position: positionnouv.value,
                    nationality: namecontry,
                    flag: urlcontry,
                    club: nameclub,
                    logo: urlclub,
                    rating: rating.value,
                    pace: inforNGK[0].value,
                    shooting: inforNGK[1].value,
                    passing: inforNGK[2].value,
                    dribbling: inforNGK[3].value,
                    defending: inforNGK[4].value,
                    physical: inforNGK[5].value
    
                }
            } else {
                nouvjoue = {
                    name: inputname.value,
                    photo: inputurl.value,
                    position: "GK",
                    nationality: namecontry,
                    flag: urlcontry,
                    club: nameclub,
                    logo: urlclub,
                    rating: rating.value,
                    diving: inforGK[0].value,
                    handling: inforGK[1].value,
                    kicking: inforGK[2].value,
                    reflexes: inforGK[3].value,
                    speed: inforGK[4].value,
                    positioning: inforGK[5].value
                };
            };
            Erreur.classList.add("hidden");
            infor.forEach(Element =>{
                Element.value = "";
                Element.style.backgroundColor = "";
            });
            positionnouv.value = "GK";
            mudalnouv.classList.add("hidden");
            document.body.classList.toggle("overflow-hidden");
            joueurs.players.push(nouvjoue);
            localStorage.setItem("Joueurs" , JSON.stringify(joueurs));
            location.reload();
        } else {
            Erreur.classList.remove("hidden");
        };
    };
    
    cancelnouv.onclick= ()=>{
        mudalnouv.classList.add("hidden");
        document.body.classList.toggle("overflow-hidden");
        document.querySelectorAll("#containerINPUT > input").forEach(Element =>{
            Element.value = "";
            Element.style.backgroundColor = "";
        });
        positionnouv.value = "GK";
        Erreur.classList.add("hidden");
    };
});
