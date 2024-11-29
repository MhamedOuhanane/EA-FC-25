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
        //validation des input de type text (Regex)
    inputtext.forEach(Element =>{
        Element.oninput = () => {
            if ( /^[a-zéèêàâùûîïöäüÿç ]{5,20}$/i.test(Element.value) ) {
                Element.classList.remove();
                Element.style.border = "3px solid green";
                Validation = true;
            } else {
                Element.classList.remove();
                Element.style.border = "3px solid red";
                Validation = false;
            };
        };
    });
        //validation input de type url pour le photo
    // inputurl.oninput = () => {
    //     if ( /^[https:\/\/cdn3\.futbin\.com\/content\/fifa25\/img\/players\/p50522519\.png\?fm=png&ixlib=java-2\.1\.0&verzion]+[a-z0-9&=]/.test(inputurl.value) ) {
    //         inputurl.style.color = "green";
    //         Validation = true;
    //     } else {
    //         inputurl.style.color = "red";
    //         Validation = false;
    //     };
    // };    
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
