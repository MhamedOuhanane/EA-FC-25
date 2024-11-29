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

    //Validation des information des nouveau joueur ajouter
    let Validation = false;
    let inputtext = document.querySelectorAll('#mudalnouv input[type="Text"]');
    let inputurl = document.querySelector('#mudalnouv input[type="url"]');
    let inputnumber = document.querySelectorAll('#mudalnouv input[type="number"]');
    //validation des input de type text
    inputtext.forEach(Element =>{
        Element.oninput = () => {
            if ( /^[a-zéèêàâùûîïöäüç ]{5,20}$/i.test(Element) ) {
                Element.style.color = "green";
                Validation = true;
            } else {
                Element.style.color = "red";
                Validation = false;
            };
        };
    });
    inputtext.forEach(Element =>{
        Element.oninput = () => {
            if ( /^[a-zéèêàâùûîïöäüç ]{5,20}$/i.test(Element) ) {
                Element.style.color = "green";
                Validation = true;
            } else {
                Element.style.color = "red";
                Validation = false;
            };
        };
    });
    inputtext.forEach(Element =>{
        Element.oninput = () => {
            if ( /^[a-zéèêàâùûîïöäüç ]{5,20}$/i.test(Element) ) {
                Element.style.color = "green";
                Validation = true;
            } else {
                Element.style.color = "red";
                Validation = false;
            };
        };
    });

    // Create.onclick= () =>{
    //     //Validation des information des nouveau joueur ajouter
    //     let inputtext = document.querySelectorAll('#mudalnouv input[type="Text"]');
    //     let inputurl = document.querySelector('#mudalnouv input[type="url"]');
    //     let inputnumber = document.querySelectorAll('#mudalnouv input[type="number"]');

    //     infjoueur.forEach(Element =>{
    //         if (Element.value == "") {
    //         }
    //         else{
                
    //         }
    //     });
    // };
});
