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
            if ( /^[a-zéèêàâùûîïöäüÿç\-\s]{5,20}$/i.test(Element.value) ) {
                Element.classList.remove();
                Element.className = "bg-green-200";
                Validation = true;
            } else {
                Element.classList.remove();
                Element.className = "bg-red-300";
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
           //validation des input de type number (Regex)
    inputnumber.forEach(Element =>{
        Element.oninput = () => {
            if ( /^[0-9][1-9]$/i.test(Element.value) ) {
                Element.classList.remove();
                Element.className = "bg-green-200";
                Validation = true;
            } else {
                Element.classList.remove();
                Element.className = "bg-red-300";
                Validation = false;
            };
        };
    });
      //L'ajout des information au fichier js
    console.log(document.querySelectorAll('#containerINPUT input'));
    Create.onclick= () =>{

    
        if (Validation == true) {
            let infor = document.querySelectorAll('#containerINPUT input');
            
            if (positionnouv.value != GK) {
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
                        pace: infor[11].value,
                        shooting: infor[12].value,
                        passing: infor[13].value,
                        dribbling: infor[14].value,
                        defending: infor[15].value,
                        physical: infor[16].value
        
                    }
            }
            
            joueurs.players.push(nouvjoue);
        }
        
    };
});
