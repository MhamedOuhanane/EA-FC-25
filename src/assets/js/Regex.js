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
    console.log(inputtext);
    
    let inputurl = document.querySelector('#mudalnouv input[type="url"]');
    console.log(inputurl);
    let inputnumber = document.querySelectorAll('#mudalnouv input[type="number"]');
    console.log(inputnumber);
    //validation des input de type text (Regex)
    inputtext.forEach(Element =>{
        Element.addEventListener("input" , () => {
            if ( /^[a-zéèêàâùûîïöäüÿç\-\s]{5,20}$/i.test(Element.value) ) {              
                Element.style.backgroundColor = "rgb(187 247 208)";
                Validation = true;
            } else {
                Element.style.backgroundColor = "rgb(254 202 202)";
                Validation = false;
            };
        });
    });
        //validation input de type url pour le photo
    inputurl.oninput = () => {
        if ( /^https:\/\/cdn(?:3\.futbin\.com\/content\/fifa25\/img\/players\/p\d+\.png\?fm=png&ixlib=java-\d+\.\d+\.\d+&verzion=\d+&w=\d+&s=[a-f0-9]+|\.sofifa\.net\/players\/\d+\/\d+\/\d+_\d+\.png)$/
        .test(inputurl.value) ) {
            inputurl.style.backgroundColor = "rgb(187 247 208)";
            Validation = true;
        } else {
            inputurl.style.backgroundColor = "rgb(254 202 202)";
            Validation = false;
        };
    }; 
        //    validation des input de type number (Regex)
    inputnumber.forEach(Element =>{
        Element.oninput = () => {
            if ( /^[0-9]{2}$/i.test(Element.value) ) {
                Element.classList.remove();
                Element.style.backgroundColor = "rgb(187 247 208)";
                Validation = true;
            } else {
                Element.classList.remove();
                Element.style.backgroundColor = "rgb(254 202 202)";
                Validation = false;
            };
        };
    });
      //L'ajout des information au fichier js
    console.log(document.querySelectorAll('#containerINPUT input'));
    Create.onclick= () =>{

    
        if (Validation == true) {
            let infor = document.querySelectorAll('#containerINPUT input');
            
            if (positionnouv.value != "GK") {
                nouvjoue = {
                    name: infor[0].value,
                    photo: "https://cdn3.futbin.com/content/fifa25/img/players/p50522519.png?fm=png&ixlib=java-2.1.0&verzion=1&w=485&s=f9ffb97b6af353daad5d7cb1ba1f6390",
                    position: positionnouv.value,
                    nationality: infor[2].value,
                    flag: "https://cdn.sofifa.net/flags/br.png",
                    club: infor[2].value,
                    logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
                    rating: infor[4].value,
                    pace: infor[5].value,
                    shooting: infor[6].value,
                    passing: infor[7].value,
                    dribbling: infor[8].value,
                    defending: infor[9].value,
                    physical: infor[10].value
    
                }
            } else {
                    nouvjoue = {
                        name: infor[0].value,
                        photo: "https://cdn3.futbin.com/content/fifa25/img/players/p50522519.png?fm=png&ixlib=java-2.1.0&verzion=1&w=485&s=f9ffb97b6af353daad5d7cb1ba1f6390",
                        position: "GK",
                        nationality: infor[2].value,
                        flag: "https://cdn.sofifa.net/flags/br.png",
                        club: infor[3].value,
                        logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
                        rating: infor[4].value,
                        diving: infor[11].value,
                        handling: infor[12].value,
                        kicking: infor[13].value,
                        reflexes: infor[14].value,
                        speed: infor[15].value,
                        positioning: infor[16].value
        
                    }
            }
            console.log(nouvjoue);
            
            Erreur.classList.add("hidden");
            joueurs.players.push(nouvjoue);
            console.log(joueurs);
            
        } else {
            Erreur.classList.remove("hidden");
        }
        
    };
});
